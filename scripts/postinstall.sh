#!/usr/bin/env bash

set -e # Exit on error

# Initialize flags
FORCE=false
GLOBAL_FLAG=false
NGINX_FLAG=false
IS_INTERACTIVE=false
if [ -t 0 ]; then
    IS_INTERACTIVE=true
fi

# Initialize global system variables
OS="$(uname)"
BUILD_DIR="$PWD/build"
NGINX_DIR="$BUILD_DIR/nginx"
NPMRC=".npmrc"
GLOBAL_NPMRC="$HOME/$NPMRC"
LOCAL_NPMRC="$PWD/$NPMRC"

if [[ -n "$XDG_CONFIG_HOME" ]]; then
    DRPM_HOME="$XDG_CONFIG_HOME/drpm"
else
    DRPM_HOME="$HOME/.drpm"
fi

# Initialize global drpm variables
REGISTRY_URL="http://localhost:2092"
REGISTRY_PID_FILE="registry.pid"
REGISTRY_PROCESS_NAME="registry.drpm.software"
REGISTRY_PID=0
PREFIXES=("@drpm:registry=$REGISTRY_URL" "@dpk:registry=$REGISTRY_URL" "drpm:registry=$REGISTRY_URL" "dpk:registry=$REGISTRY_URL")
MISSING_PREFIXES=()

# Function to output cleaner info
roomy_echo() {
    echo ""
    echo "$1"
}

# Function to handle unsupported OS and exit
unsupported_os() {
    echo "Unsupported OS: $1"
    exit 1
}


# Function to back up a file if it exists
backup_file() {
    local FILE_TO_BAK="$1"
    if [[ -f "$FILE_TO_BAK" ]]; then
        BAK_FILE="$DRPM_HOME/$(basename "$FILE_TO_BAK").bak"
        roomy_echo "Backing up $FILE_TO_BAK to $BAK_FILE"
        cp "$FILE_TO_BAK" "$BAK_FILE"
    fi
}

# Function to ensure an `.npmrc` file exists
ensure_npmrc_exists() {
    local NPMRC_FILE="$1"
    if [[ ! -f "$NPMRC_FILE" ]]; then
        roomy_echo "Creating .npmrc ..."
        touch "$NPMRC_FILE"
    else
        roomy_echo ".npmrc exists"
    fi
}

# Function to find missing prefixes in an `.npmrc` file
find_missing_prefixes() {
    local FILE_TO_CHECK="$1"
    for PREFIX in "${PREFIXES[@]}"; do
        if ! grep -qE "$PREFIX" "$FILE_TO_CHECK"; then
            MISSING_PREFIXES+=("$PREFIX")
        else
            echo "$PREFIX exists in .npmrc, continuing ..."
        fi
    done
}

# Function to prompt for global installation
prompt_global_npmrc_install() {
    echo ""
    read -rp "Would you like to add the DRPM registries to global .npmrc ($GLOBAL_NPMRC)? [y/N] " ANSWER
    [[ "$ANSWER" =~ ^[yY]$ ]] && GLOBAL_FLAG=true || return 0
}

# Function to add missing prefixes to an `.npmrc` file
add_prefixes_to_npmrc() {
    # npm config set @my-scope:registry http://localhost:4873

    local NPMRC_FILE="$1"
    shift
    local PREFIXES_TO_ADD=("$@")

    # Ensure file ends with a newline before appending
    [[ -s "$NPMRC_FILE" && $(tail -c1 "$NPMRC_FILE" | wc -l) -eq 0 ]] && echo >> "$NPMRC_FILE"

    if [[ "${#PREFIXES_TO_ADD[@]}" -gt 0 ]]; then
        roomy_echo "Adding prefixes to $NPMRC_FILE ..."
        for PREFIX in "${PREFIXES_TO_ADD[@]}"; do
            echo "$PREFIX" >> "$NPMRC_FILE"
            echo "Added $PREFIX to $NPMRC_FILE"
        done
    fi
}

# Function to handle checks and installation
do_check_and_install_npmrc() {
    local NPMRC_FILE="$1"
    ensure_npmrc_exists "$NPMRC_FILE"

    find_missing_prefixes "$NPMRC_FILE"

    if [[ "${#MISSING_PREFIXES[@]}" -eq 0 ]]; then
        echo "No missing prefixes in $NPMRC_FILE."
        if $FORCE; then
            backup_file "$NPMRC_FILE"
            add_prefixes_to_npmrc "$NPMRC_FILE" "${MISSING_PREFIXES[@]}"
        fi
    fi
}

restart_drpm_registry() {
    if $IS_INTERACTIVE; then
        echo ""
        read -rp "Registry running, (pid=$REGISTRY_PID). Would you like to restart the registry process? [y/N] " ANSWER
        if [[ "$ANSWER" =~ ^[yY]$ ]]; then
            echo "Restarting registry process (pid=$REGISTRY_PID) ..."
            kill -9 "$REGISTRY_PID"
            sh scripts/registry.nohup.sh
            echo "Registry restarted (pid=$(pgrep -f \"$REGISTRY_PROCESS_NAME\"))"
        else
            echo "Registry still running, continuing ..."
        fi
    else
        roomy_echo "Non-interactive shell detected. To restart registryd, run 'sh ./scripts/registry.nohup.sh' manually."
    fi
}

# Function to start the DRPM registry if not running
start_drpm_registry() {
    if docker version >/dev/null 2>&1; then
        sh ./scripts/registry.docker.sh
    else
        # shellcheck disable=SC2009
        REGISTRY_PID="$(cat $REGISTRY_PID_FILE 2>/dev/null || \
            pgrep -f $REGISTRY_PROCESS_NAME \
            || ps aux | grep $REGISTRY_PROCESS_NAME | grep -v grep | awk '{print $2}' \
            || lsof -i :2092 | grep node | awk '{print $2}')"

        if [[ -z "$REGISTRY_PID" ]]; then
            roomy_echo "Starting registry ..."
            sh ./scripts/registry.nohup.sh
        else
            roomy_echo "Registry already running (pid=$REGISTRY_PID)"
            restart_drpm_registry
        fi  
    fi
}

# NOTE: I really don't think we should be touching people's /etc/hosts file.
# Perhaps suggest it to them, but that's pretty "invasive" IMO
# Function to edit /etc/hosts
edit_hosts() {
    local CUSTOM_DOMAIN="127.0.0.1 registry.drpm.tools.local"
    if $IS_INTERACTIVE; then
        if ! grep -q "$CUSTOM_DOMAIN" /etc/hosts; then
            echo ""
            read -rp "Some hosts need to be added to your local hosts file. Should we add them for you? [y/N] " ANSWER
            if [[ "$ANSWER" =~ ^[yY]$ ]]; then
                read -rp "Please enter your password: " -s PASSWORD
                echo "$PASSWORD" | sudo -S sh -c "echo \"$CUSTOM_DOMAIN\" >> /etc/hosts"
                echo "Custom domain added to /etc/hosts"
            else
              roomy_echo "Add the following hosts to your /etc/hosts file."
                echo "$CUSTOM_DOMAIN"
            fi
        else
            echo "Custom domain already present in /etc/hosts"
        fi
    else
        roomy_echo "Non-interactive shell detected."
        echo "Add the following hosts to your /etc/hosts file to finish setting up registryd"
        echo $CUSTOM_DOMAINS
    fi
}

# Function to set up environment variables
setup_drpm_env_vars() {
    case "$SHELL" in
        */zsh)
            SHELL_RC="$HOME/.zshrc"
            ;;
        */bash)
            SHELL_RC="$HOME/.bashrc"
            ;;
        *)
            SHELL_RC="$HOME/.profile"
            ;;
    esac

    if $IS_INTERACTIVE; then
        local VARS_TO_EXPORT=("DRPM_HOME=\"$DRPM_HOME\"" "REGISTRY_URL=\"$REGISTRY_URL\"" "REGISTRY_PID_FILE=\"$REGISTRY_PID_FILE\"" "REGISTRY_PROCESS_NAME=\"$REGISTRY_PROCESS_NAME\"" "PATH=\"$DRPM_HOME:$PATH\"")
        read -rp "Some environment variables need to be set. Should we set them for you? [y/N] " ANSWER
        if [[ "$ANSWER" =~ ^[yY]$ ]]; then
            echo "Found $SHELL_RC file, adding env vars ..."
            [[ -s "$SHELL_RC" && $(tail -c1 "$SHELL_RC" | wc -l) -eq 0 ]] && echo >> "$SHELL_RC"

            for VAR in "${VARS_TO_EXPORT[@]}"; do
                if ! grep -q "$VAR" "$SHELL_RC"; then
                    echo "export $VAR" >> "$SHELL_RC"
                fi
            done

            echo "DRPM env vars added to $SHELL_RC"

            if [[ "$0" != "${BASH_SOURCE[0]}" ]]; then
                echo "Attempting to source $SHELL_RC ..."
                # shellcheck disable=SC1090
                . "$SHELL_RC"
            else
                echo "Please run 'source $SHELL_RC' or open a new terminal session to apply changes"
            fi
        fi
    else
        roomy_echo "Please add the following variables to your shell."
        for VAR in "${VARS_TO_EXPORT[@]}"; do
            echo "$VAR"
        done
    fi
}

# Function to set up Nginx
setup_nginx() {
    local OS="$1"
    if ! $NGINX_FLAG || pgrep -f "nginx" > /dev/null; then
        return 0
    fi
    case "$OS" in
        Darwin)
            echo "Setting up Nginx for macOS (Darwin)..."
            # Install nginx using Homebrew if not installed
            if ! brew ls --versions nginx > /dev/null; then
                echo "Nginx not found. Installing..."
                brew install nginx
            else
                echo "Nginx is already installed."
            fi
            # Copy custom macOS config and replace the existing nginx.conf
            echo "Copying custom macOS nginx.conf..."
            cp "$NGINX_DIR/mac.conf" /usr/local/etc/nginx/nginx.conf
            # Start Nginx as a brew service
            echo "Starting Nginx via brew services..."
            brew services start nginx
            ;;
        Linux)
            echo "Setting up Nginx for Linux..."
            # Install nginx if not installed
            if ! command -v nginx > /dev/null; then
                echo "Nginx not found. Installing..."
                sudo apt-get update && sudo apt-get install -y nginx
            else
                echo "Nginx is already installed."
            fi
            # Copy custom Linux config and replace the existing nginx.conf
            echo "Copying custom Linux nginx.conf..."
            sudo cp "$NGINX_DIR/linux.conf" /etc/nginx/nginx.conf
            # Start Nginx service
            echo "Starting Nginx service..."
            sudo systemctl start nginx
            sudo systemctl enable nginx
            ;;
        *)
            unsupported_os "$OS"
            ;;
    esac
}

main() {
    do_check_and_install_npmrc "$LOCAL_NPMRC"
    do_check_and_install_npmrc "$GLOBAL_NPMRC"
    edit_hosts
    setup_nginx "$OS"
    start_drpm_registry
    setup_drpm_env_vars
}

# Main logic
# Parse command line arguments
if [[ "$#" -gt 0 ]]; then
    while [[ "$#" -gt 0 ]]; do
        case "$1" in
            -f|--force) FORCE=true; shift ;;
            -g|--global) GLOBAL_FLAG=true; shift ;;
            -n|--nginx) NGINX_FLAG=true; shift ;;
            *) echo "Unknown option: $1"; shift ;;
        esac
    done
fi

# Create the DRPM home directory if it doesn't exist
[[ ! -d "$DRPM_HOME" ]] && mkdir -p "$DRPM_HOME"
roomy_echo "DRPM installed per DRPM_HOME ($DRPM_HOME)."

# Run the main function and exit 0
main
exit 0
