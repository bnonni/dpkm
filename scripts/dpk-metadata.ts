export default {
  '_id'       : 'tool5',
  '_rev'      : '12-4fe997eb634ed55db1c0792553198834',
  'name'      : 'tool5',
  'dist-tags' : {
    'latest' : '5.0.1'
  },
  'versions' : {
    '1.0.1' : {
      'name'    : 'tool5',
      'version' : '1.0.1',
      'author'  : {
        'url'  : 'https://github.com/bnonni',
        'name' : 'Bryan Nonni'
      },
      'license'     : 'ISC',
      '_id'         : 'tool5@1.0.1',
      'maintainers' : [
        {
          'name'  : 'bnonni',
          'email' : 'development.xw3hd@passmail.com'
        }
      ],
      'homepage' : 'https://github.com/bnonni/tool5#readme',
      'bugs'     : {
        'url' : 'https://github.com/bnonni/tool5/issues'
      },
      'bin' : {
        'tool5' : 'dist/tool5.js'
      },
      'dist' : {
        'shasum'     : 'c696fc6f8ec715949b95a693923a4de55d2b7543',
        'tarball'    : 'https://registry.npmjs.org/tool5/-/tool5-1.0.1.tgz',
        'fileCount'  : 41,
        'integrity'  : 'sha512-sD21UJW8gFnb8xuUwmxwaC0OqScRrG0Pw4d+RkMduF298dSOWpawvB9s1E3fQuQAKVGEe97FadyFiA4u0qGXIA==',
        'signatures' : [
          {
            'sig'   : 'MEUCIQDQ50XGB3yeqlDTuuTlOd4EgWpByRTe30h0FfO4Py9brgIgTr9+nmCvd0hzPvxP3Fbn4zyB8VDzppsInpRaS3Upk1M=',
            'keyid' : 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA'
          }
        ],
        'unpackedSize' : 40717
      },
      'main'    : 'dist/tool5.js',
      'type'    : 'module',
      '_from'   : 'file:tool5-1.0.1.tgz',
      'scripts' : {
        'wipe'            : 'rm -rf dist node_modules',
        'build'           : 'npm run clean && tsc',
        'clean'           : 'rimraf dist',
        'start'           : 'npm run build && node dist/web5-tools.js',
        'did:create'      : 'npm run build && node dist/web5-tools.js -p did -a create',
        'cli:install'     : 'sh install-tool5.sh',
        'cli:uninstall'   : 'rm -rf dist node_modules',
        'update:outdated' : 'ncu --install always -u'
      },
      '_npmUser' : {
        'name'  : 'bnonni',
        'email' : 'development.xw3hd@passmail.com'
      },
      '_resolved'  : '/private/var/folders/79/f_lth4bd1x5gd1qh3k703cwm0000gn/T/8a343545b4f81ad1367592be193815cb/tool5-1.0.1.tgz',
      '_integrity' : 'sha512-sD21UJW8gFnb8xuUwmxwaC0OqScRrG0Pw4d+RkMduF298dSOWpawvB9s1E3fQuQAKVGEe97FadyFiA4u0qGXIA==',
      'repository' : {
        'url'  : 'git+ssh://git@github.com/bnonni/tool5.git',
        'type' : 'git'
      },
      '_npmVersion' : '10.8.2',
      'description' : 'CLI tools for interacting with Web5',
      'directories' : {

      },
      '_nodeVersion' : '22.8.0',
      'dependencies' : {
        '@web5/api'            : '^0.10.0',
        'commander'            : '^12.1.0',
        '@web5/dids'           : '^1.1.4',
        '@web5/agent'          : '^0.7.1',
        '@web5/common'         : '^1.0.2',
        '@web5/crypto'         : '^1.0.4',
        'ed25519-keygen'       : '^0.6.2',
        '@web5/user-agent'     : '^0.6.3',
        '@web5/credentials'    : '^1.1.1',
        '@dcx-protocol/common' : '^7.0.0'
      },
      '_hasShrinkwrap'  : false,
      'devDependencies' : {
        'tsx'                              : '^4.19.1',
        'dotenv'                           : '^16.4.5',
        'eslint'                           : '^9.10.0',
        'rimraf'                           : '^6.0.1',
        'globals'                          : '^15.9.0',
        '@eslint/js'                       : '^9.10.0',
        'typescript'                       : '^5.6.2',
        '@types/node'                      : '^22.5.4',
        'npm-check-updates'                : '^17.1.1',
        '@types/readable-stream'           : '^4.0.15',
        '@typescript-eslint/parser'        : '^8.5.0',
        '@typescript-eslint/eslint-plugin' : '^8.5.0'
      },
      '_npmOperationalInternal' : {
        'tmp'  : 'tmp/tool5_1.0.1_1726268624516_0.58597925103071',
        'host' : 's3://npm-registry-packages'
      }
    },
    '1.0.2' : {
      'name'    : 'tool5',
      'version' : '1.0.2',
      'author'  : {
        'url'  : 'https://github.com/bnonni',
        'name' : 'Bryan Nonni'
      },
      'license'     : 'ISC',
      '_id'         : 'tool5@1.0.2',
      'maintainers' : [
        {
          'name'  : 'bnonni',
          'email' : 'development.xw3hd@passmail.com'
        }
      ],
      'homepage' : 'https://github.com/bnonni/tool5#readme',
      'bugs'     : {
        'url' : 'https://github.com/bnonni/tool5/issues'
      },
      'bin' : {
        'tool5' : 'dist/tool5.js'
      },
      'dist' : {
        'shasum'     : 'a64de6bab6b9964e06a68b592ce17ebf8113e679',
        'tarball'    : 'https://registry.npmjs.org/tool5/-/tool5-1.0.2.tgz',
        'fileCount'  : 41,
        'integrity'  : 'sha512-h8ks0IK6ylcmkoYwBYLXKrFRq4EbexCf4E+pwb9kjjC9wElQvPr/lqrqE6LiF4uvSVbb869YrXLuworaGi8ZcQ==',
        'signatures' : [
          {
            'sig'   : 'MEYCIQDcdGBXWHIUW1pfpD5F28WpLut6p5sOBBceEco1btc/dgIhAJnvu8c13GHnLK67fIZzpfIbGsaJlZGKbFsoGsAanGFD',
            'keyid' : 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA'
          }
        ],
        'unpackedSize' : 40704
      },
      'main'    : 'dist/tool5.js',
      'type'    : 'module',
      'gitHead' : 'f4410eb3255b3b8ac9c001701272906831c66cd5',
      'scripts' : {
        'wipe'            : 'rm -rf dist node_modules',
        'build'           : 'npm run clean && tsc',
        'clean'           : 'rimraf dist',
        'start'           : 'npm run build && node dist/web5-tools.js',
        'did:create'      : 'npm run build && node dist/web5-tools.js -p did -a create',
        'cli:install'     : 'sh install-tool5.sh',
        'cli:uninstall'   : 'rm -rf dist node_modules',
        'update:outdated' : 'ncu --install always -u'
      },
      '_npmUser' : {
        'name'  : 'bnonni',
        'email' : 'development.xw3hd@passmail.com'
      },
      'repository' : {
        'url'  : 'git+ssh://git@github.com/bnonni/tool5.git',
        'type' : 'git'
      },
      '_npmVersion' : '10.8.2',
      'description' : 'CLI tools for interacting with Web5',
      'directories' : {

      },
      '_nodeVersion' : '22.8.0',
      'dependencies' : {
        '@web5/api'            : '^0.10.0',
        'commander'            : '^12.1.0',
        '@web5/dids'           : '^1.1.4',
        '@web5/agent'          : '^0.7.1',
        '@web5/common'         : '^1.0.2',
        '@web5/crypto'         : '^1.0.4',
        'ed25519-keygen'       : '^0.6.2',
        '@web5/user-agent'     : '^0.6.3',
        '@web5/credentials'    : '^1.1.1',
        '@dcx-protocol/common' : '^7.0.0'
      },
      '_hasShrinkwrap'  : false,
      'devDependencies' : {
        'tsx'                              : '^4.19.1',
        'dotenv'                           : '^16.4.5',
        'eslint'                           : '^9.10.0',
        'rimraf'                           : '^6.0.1',
        'globals'                          : '^15.9.0',
        '@eslint/js'                       : '^9.10.0',
        'typescript'                       : '^5.6.2',
        '@types/node'                      : '^22.5.4',
        'npm-check-updates'                : '^17.1.1',
        '@types/readable-stream'           : '^4.0.15',
        '@typescript-eslint/parser'        : '^8.5.0',
        '@typescript-eslint/eslint-plugin' : '^8.5.0'
      },
      '_npmOperationalInternal' : {
        'tmp'  : 'tmp/tool5_1.0.2_1726270660898_0.42659524479011024',
        'host' : 's3://npm-registry-packages'
      }
    },
    '1.1.0' : {
      'name'    : 'tool5',
      'version' : '1.1.0',
      'author'  : {
        'url'  : 'https://github.com/bnonni',
        'name' : 'Bryan Nonni'
      },
      'license'     : 'ISC',
      '_id'         : 'tool5@1.1.0',
      'maintainers' : [
        {
          'name'  : 'bnonni',
          'email' : 'development.xw3hd@passmail.com'
        }
      ],
      'homepage' : 'https://github.com/bnonni/tool5#readme',
      'bugs'     : {
        'url' : 'https://github.com/bnonni/tool5/issues'
      },
      'bin' : {
        'tool5' : 'dist/tool5.js'
      },
      'dist' : {
        'shasum'     : 'd5b399bfd9547180f3a5228f859bcb2fd5495d75',
        'tarball'    : 'https://registry.npmjs.org/tool5/-/tool5-1.1.0.tgz',
        'fileCount'  : 43,
        'integrity'  : 'sha512-A32bzOZ5I99t1AvSKv6xx3NZ+2uXN+qPvqXxo44ZN985m8TeW0ssBLdAdDWdCA332JRVCUqAjUgnANuYKonkLQ==',
        'signatures' : [
          {
            'sig'   : 'MEYCIQD9SdZHg1JRXcPo1/u1QPBPPZ2BQhTRqTtwUsBT5ZVqAgIhAMIjBHiopUJp5LxerX7ig1idt41V+glwIX4MQu2+XSUj',
            'keyid' : 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA'
          }
        ],
        'unpackedSize' : 62337
      },
      'main'    : 'dist/tool5.js',
      'type'    : 'module',
      'gitHead' : 'd0fa39ec1fada8afbea35ec2e5d627c0699df04b',
      'scripts' : {
        'wipe'            : 'rm -rf dist node_modules',
        'build'           : 'npm run clean && tsc',
        'clean'           : 'rimraf dist',
        'start'           : 'npm run build && node dist/web5-tools.js',
        'did:create'      : 'npm run build && node dist/web5-tools.js -p did -a create',
        'cli:install'     : 'sh install-tool5.sh',
        'cli:uninstall'   : 'rm -rf dist node_modules',
        'update:outdated' : 'ncu --install always -u'
      },
      '_npmUser' : {
        'name'  : 'bnonni',
        'email' : 'development.xw3hd@passmail.com'
      },
      'repository' : {
        'url'  : 'git+ssh://git@github.com/bnonni/tool5.git',
        'type' : 'git'
      },
      '_npmVersion' : '10.8.3',
      'description' : 'CLI tools for interacting with Web5',
      'directories' : {

      },
      '_nodeVersion' : '20.17.0',
      'dependencies' : {
        '@web5/api'            : '^0.10.0',
        'commander'            : '^12.1.0',
        '@web5/dids'           : '^1.1.4',
        '@web5/agent'          : '^0.6.1',
        '@web5/common'         : '^1.0.2',
        '@web5/crypto'         : '^1.0.4',
        'ed25519-keygen'       : '^0.6.2',
        '@web5/user-agent'     : '^0.5.1',
        '@web5/credentials'    : '^1.1.1',
        '@dcx-protocol/common' : '^7.0.0'
      },
      '_hasShrinkwrap'  : false,
      'devDependencies' : {
        'tsx'                              : '^4.19.1',
        'dotenv'                           : '^16.4.5',
        'eslint'                           : '^9.10.0',
        'rimraf'                           : '^6.0.1',
        'globals'                          : '^15.9.0',
        '@eslint/js'                       : '^9.10.0',
        'typescript'                       : '^5.6.2',
        '@types/node'                      : '^22.5.4',
        'npm-check-updates'                : '^17.1.1',
        '@types/readable-stream'           : '^4.0.15',
        '@typescript-eslint/parser'        : '^8.5.0',
        '@typescript-eslint/eslint-plugin' : '^8.5.0'
      },
      '_npmOperationalInternal' : {
        'tmp'  : 'tmp/tool5_1.1.0_1726885689482_0.9487328018219181',
        'host' : 's3://npm-registry-packages'
      }
    },
    '1.1.2' : {
      'name'    : 'tool5',
      'version' : '1.1.2',
      'author'  : {
        'url'  : 'https://github.com/bnonni',
        'name' : 'Bryan Nonni'
      },
      'license'     : 'ISC',
      '_id'         : 'tool5@1.1.2',
      'maintainers' : [
        {
          'name'  : 'bnonni',
          'email' : 'development.xw3hd@passmail.com'
        }
      ],
      'homepage' : 'https://github.com/bnonni/tool5#readme',
      'bugs'     : {
        'url' : 'https://github.com/bnonni/tool5/issues'
      },
      'bin' : {
        'tool5' : 'dist/esm/tool5.js'
      },
      'dist' : {
        'shasum'     : '0ff659ba7154d295dc62ade6f6d9c808c76b21e5',
        'tarball'    : 'https://registry.npmjs.org/tool5/-/tool5-1.1.2.tgz',
        'fileCount'  : 43,
        'integrity'  : 'sha512-y9IKoA4eWw6nce5jOTWCs6EtjnvYUrBYs1is3fHbPY60FHLvi7xVd7R8zr7u2OhD9MUK8bmAmCljTXjbnl/t8w==',
        'signatures' : [
          {
            'sig'   : 'MEUCIQCNvN6J9EY6wjHfglJLEp5LUmE/J/A+199wcFafW2y8FgIgKqdLNiiqm13urSzmDHb1JQ4C3GCCim3R1FK6Umxvpf4=',
            'keyid' : 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA'
          }
        ],
        'unpackedSize' : 62346
      },
      'main'    : 'dist/esm/tool5.js',
      'type'    : 'module',
      'gitHead' : '5cd50f87444fc576c0e23310823fe5771ee7cb51',
      'scripts' : {
        'wipe'            : 'rm -rf dist node_modules',
        'build'           : 'npm run clean && tsc',
        'clean'           : 'rimraf dist',
        'start'           : 'npm run build && node dist/esm/tool5.js',
        'did:create'      : 'npm run build && node dist/esm/tool5.js -p did -a create',
        'cli:install'     : 'sh install-tool5.sh',
        'cli:uninstall'   : 'rm -rf dist node_modules',
        'update:outdated' : 'ncu --install always -u'
      },
      '_npmUser' : {
        'name'  : 'bnonni',
        'email' : 'development.xw3hd@passmail.com'
      },
      'repository' : {
        'url'  : 'git+ssh://git@github.com/bnonni/tool5.git',
        'type' : 'git'
      },
      '_npmVersion' : '10.8.3',
      'description' : 'CLI tools for interacting with Web5',
      'directories' : {

      },
      '_nodeVersion' : '20.17.0',
      'dependencies' : {
        '@web5/api'            : '^0.10.0',
        'commander'            : '^12.1.0',
        '@web5/dids'           : '^1.1.4',
        '@web5/agent'          : '^0.6.1',
        '@web5/common'         : '^1.0.2',
        '@web5/crypto'         : '^1.0.4',
        'ed25519-keygen'       : '^0.6.2',
        '@web5/user-agent'     : '^0.5.1',
        '@web5/credentials'    : '^1.1.1',
        '@dcx-protocol/common' : '^7.0.0'
      },
      '_hasShrinkwrap'  : false,
      'devDependencies' : {
        'tsx'                              : '^4.19.1',
        'dotenv'                           : '^16.4.5',
        'eslint'                           : '^9.10.0',
        'rimraf'                           : '^6.0.1',
        'globals'                          : '^15.9.0',
        '@eslint/js'                       : '^9.10.0',
        'typescript'                       : '^5.6.2',
        '@types/node'                      : '^22.5.4',
        'npm-check-updates'                : '^17.1.1',
        '@types/readable-stream'           : '^4.0.15',
        '@typescript-eslint/parser'        : '^8.5.0',
        '@typescript-eslint/eslint-plugin' : '^8.5.0'
      },
      '_npmOperationalInternal' : {
        'tmp'  : 'tmp/tool5_1.1.2_1726888109422_0.3680140781219523',
        'host' : 's3://npm-registry-packages'
      }
    },
    '1.2.0' : {
      'name'    : 'tool5',
      'version' : '1.2.0',
      'author'  : {
        'url'  : 'https://github.com/bnonni',
        'name' : 'Bryan Nonni'
      },
      'license'     : 'ISC',
      '_id'         : 'tool5@1.2.0',
      'maintainers' : [
        {
          'name'  : 'bnonni',
          'email' : 'development.xw3hd@passmail.com'
        }
      ],
      'homepage' : 'https://github.com/bnonni/tool5#readme',
      'bugs'     : {
        'url' : 'https://github.com/bnonni/tool5/issues'
      },
      'bin' : {
        'tool5' : 'dist/esm/tool5.js'
      },
      'dist' : {
        'shasum'     : '3dd2d7eccdc395d5362db41f6637200093f7ea90',
        'tarball'    : 'https://registry.npmjs.org/tool5/-/tool5-1.2.0.tgz',
        'fileCount'  : 74,
        'integrity'  : 'sha512-Ti9LGqajLSoRPQoDhGfEWVaJWmxQwEfrJF/Wv0mAgth2s8e9sprp6g49s+7lb1ZuKroVBk4HMMouv6uhZtsyeg==',
        'signatures' : [
          {
            'sig'   : 'MEUCIQC78TN4mN2iNA/XBvqm9yi8qWRgJ0gEzYgoLPEmFNU0ZgIgKmcHxnuTSpZHS8xxDqNzUCh/E+IBuMfogFYkFgf3PSc=',
            'keyid' : 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA'
          }
        ],
        'unpackedSize' : 147582
      },
      'main'    : './dist/cjs/index.js',
      'type'    : 'module',
      'types'   : './dist/types/index.d.ts',
      'module'  : './dist/esm/index.js',
      'exports' : {
        '.' : {
          'import'  : './dist/esm/index.js',
          'require' : './dist/cjs/index.js'
        },
        './package.json' : './package.json'
      },
      'gitHead' : '8fcedb3d02358bdf02728351f9f3e2f5f003a725',
      'scripts' : {
        'wipe'            : 'rm -rf dist node_modules',
        'build'           : 'npm run build:cjs && npm run build:esm',
        'clean'           : 'rimraf dist',
        'start'           : 'npm run build && node dist/esm/tool5.js',
        'build:cjs'       : 'rimraf dist/cjs && tsc -p tsconfig.cjs.json && echo \'{"type": "commonjs"}\' \u003E ./dist/cjs/package.json',
        'build:esm'       : 'rimraf dist/esm dist/types && tsc -p tsconfig.esm.json',
        'did:create'      : 'npm run build && node dist/esm/tool5.js -p did -a create',
        'cli:install'     : 'sh install-tool5.sh',
        'cli:uninstall'   : 'rm -rf dist node_modules',
        'update:outdated' : 'ncu --install always -u'
      },
      '_npmUser' : {
        'name'  : 'bnonni',
        'email' : 'development.xw3hd@passmail.com'
      },
      'repository' : {
        'url'  : 'git+ssh://git@github.com/bnonni/tool5.git',
        'type' : 'git'
      },
      '_npmVersion' : '10.8.2',
      'description' : 'CLI tool for interacting with Web5',
      'directories' : {

      },
      '_nodeVersion' : '20.17.0',
      'dependencies' : {
        'chalk'             : '^5.3.0',
        '@web5/api'         : '^0.10.0',
        'commander'         : '^12.1.0',
        '@web5/dids'        : '^1.1.4',
        '@web5/agent'       : '^0.6.1',
        '@web5/common'      : '^1.0.2',
        '@web5/crypto'      : '^1.0.4',
        'ed25519-keygen'    : '^0.6.2',
        '@web5/user-agent'  : '^0.5.1',
        '@web5/credentials' : '^1.1.1'
      },
      '_hasShrinkwrap'  : false,
      'devDependencies' : {
        'tsx'                              : '^4.19.1',
        'dotenv'                           : '^16.4.5',
        'eslint'                           : '^9.10.0',
        'rimraf'                           : '^6.0.1',
        'globals'                          : '^15.9.0',
        '@eslint/js'                       : '^9.10.0',
        'typescript'                       : '^5.6.2',
        '@types/node'                      : '^22.5.4',
        'npm-check-updates'                : '^17.1.1',
        '@types/readable-stream'           : '^4.0.15',
        '@typescript-eslint/parser'        : '^8.5.0',
        '@typescript-eslint/eslint-plugin' : '^8.5.0'
      },
      '_npmOperationalInternal' : {
        'tmp'  : 'tmp/tool5_1.2.0_1727392414536_0.524804375261716',
        'host' : 's3://npm-registry-packages'
      }
    },
    '3.0.0' : {
      'name'    : 'tool5',
      'version' : '3.0.0',
      'author'  : {
        'url'  : 'https://github.com/bnonni',
        'name' : 'Bryan Nonni'
      },
      'license'     : 'ISC',
      '_id'         : 'tool5@3.0.0',
      'maintainers' : [
        {
          'name'  : 'bnonni',
          'email' : 'development.xw3hd@passmail.com'
        }
      ],
      'homepage' : 'https://github.com/bnonni/tool5#readme',
      'bugs'     : {
        'url' : 'https://github.com/bnonni/tool5/issues'
      },
      'bin' : {
        'tool5' : 'dist/esm/tool5.js'
      },
      'dist' : {
        'shasum'     : 'ec86b4d038b1cfd28a90d8d9f85a0428fb3e7bff',
        'tarball'    : 'https://registry.npmjs.org/tool5/-/tool5-3.0.0.tgz',
        'fileCount'  : 91,
        'integrity'  : 'sha512-WXxqW97RTg86+9z30WyOvY7xaBKG6IPM9FeO4lsKSgLbp9cJG9vKsEuBqq9YYNJ/tmLZSSADBd0hr7xpRUNZzw==',
        'signatures' : [
          {
            'sig'   : 'MEQCIFbStYwh2z6KdOeKejS641WzSHrU1iNfK8puKA1K5mYnAiAp/JSci3jTRUwLd3vJEA9PoGv+145A6scQEZAdaCjYig==',
            'keyid' : 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA'
          }
        ],
        'unpackedSize' : 105939
      },
      'main'    : './dist/cjs/index.js',
      'type'    : 'module',
      'types'   : './dist/types/index.d.ts',
      'module'  : './dist/esm/index.js',
      'exports' : {
        '.' : {
          'import'  : './dist/esm/index.js',
          'require' : './dist/cjs/index.js'
        },
        './package.json' : './package.json'
      },
      'gitHead' : '63f4cf2e3a94c2093e42a70a6e535cf9bdde9d5c',
      'scripts' : {
        'wipe'            : 'rm -rf dist node_modules',
        'build'           : 'npm run build:cjs && npm run build:esm',
        'clean'           : 'rimraf dist',
        'start'           : 'npm run build && node dist/esm/tool5.js',
        'prepare'         : 'npm run build && chmod +x ./dist/esm/tool5.js',
        'build:cjs'       : 'rimraf dist/cjs && tsc -p tsconfig.cjs.json && echo \'{"type": "commonjs"}\' \u003E ./dist/cjs/package.json',
        'build:esm'       : 'rimraf dist/esm dist/types && tsc -p tsconfig.esm.json',
        'did:create'      : 'npm run build && node dist/esm/tool5.js -p did -a create',
        'cli:install'     : 'sh install-tool5.sh',
        'cli:uninstall'   : 'rm -rf dist node_modules',
        'update:outdated' : 'ncu --install always -u'
      },
      '_npmUser' : {
        'name'  : 'bnonni',
        'email' : 'development.xw3hd@passmail.com'
      },
      'repository' : {
        'url'  : 'git+ssh://git@github.com/bnonni/tool5.git',
        'type' : 'git'
      },
      '_npmVersion' : '10.8.2',
      'description' : 'CLI tool for interacting with Web5',
      'directories' : {

      },
      '_nodeVersion' : '20.17.0',
      'dependencies' : {
        'chalk'             : '^5.3.0',
        '@web5/api'         : '^0.10.0',
        'commander'         : '^12.1.0',
        '@web5/dids'        : '^1.1.4',
        '@web5/agent'       : '^0.6.1',
        '@web5/common'      : '^1.0.2',
        '@web5/crypto'      : '^1.0.4',
        'ed25519-keygen'    : '^0.6.2',
        '@web5/user-agent'  : '^0.5.1',
        '@web5/credentials' : '^1.1.1'
      },
      '_hasShrinkwrap'  : false,
      'devDependencies' : {
        'tsx'                              : '^4.19.1',
        'dotenv'                           : '^16.4.5',
        'eslint'                           : '^9.10.0',
        'rimraf'                           : '^6.0.1',
        'globals'                          : '^15.9.0',
        '@eslint/js'                       : '^9.10.0',
        'typescript'                       : '^5.6.2',
        '@types/node'                      : '^22.5.4',
        'npm-check-updates'                : '^17.1.1',
        '@types/readable-stream'           : '^4.0.15',
        '@typescript-eslint/parser'        : '^8.5.0',
        '@typescript-eslint/eslint-plugin' : '^8.5.0'
      },
      '_npmOperationalInternal' : {
        'tmp'  : 'tmp/tool5_3.0.0_1727397549237_0.3512960787505721',
        'host' : 's3://npm-registry-packages'
      }
    },
    '3.1.0' : {
      'name'    : 'tool5',
      'version' : '3.1.0',
      'author'  : {
        'url'  : 'https://github.com/bnonni',
        'name' : 'Bryan Nonni'
      },
      'license'     : 'ISC',
      '_id'         : 'tool5@3.1.0',
      'maintainers' : [
        {
          'name'  : 'bnonni',
          'email' : 'development.xw3hd@passmail.com'
        }
      ],
      'homepage' : 'https://github.com/bnonni/tool5#readme',
      'bugs'     : {
        'url' : 'https://github.com/bnonni/tool5/issues'
      },
      'bin' : {
        'tool5' : 'dist/esm/tool5.js'
      },
      'dist' : {
        'shasum'     : '2659e449aa25d920ee90142edf6768e1a62f77b4',
        'tarball'    : 'https://registry.npmjs.org/tool5/-/tool5-3.1.0.tgz',
        'fileCount'  : 91,
        'integrity'  : 'sha512-x6Og6QqUY1yoMZMTdPEtmWYmuqrSyYqPA6qNARnHrHEbNevfdJY7zbPfDPyPUXRsUfNddZZ5guKuEJmWP0Ec/w==',
        'signatures' : [
          {
            'sig'   : 'MEUCICtbygaEZD6TCpV0HkwjPGnlf8ek6HA0DoBFN9nmlUOjAiEA8oT2uYr0ovn9y1tJpjXA52HOhPKnvWVKA1qyjU3+U+o=',
            'keyid' : 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA'
          }
        ],
        'unpackedSize' : 105939
      },
      'main'    : './dist/cjs/index.js',
      'type'    : 'module',
      'types'   : './dist/types/index.d.ts',
      'module'  : './dist/esm/index.js',
      'exports' : {
        '.' : {
          'import'  : './dist/esm/index.js',
          'require' : './dist/cjs/index.js'
        },
        './package.json' : './package.json'
      },
      'gitHead' : '540de5094f303d0f9687ff48d05dd8e2228ed406',
      'scripts' : {
        'wipe'            : 'rm -rf dist node_modules',
        'build'           : 'npm run build:cjs && npm run build:esm',
        'clean'           : 'rimraf dist',
        'start'           : 'npm run build && node dist/esm/tool5.js',
        'prepare'         : 'npm run build && chmod +x ./dist/esm/tool5.js',
        'build:cjs'       : 'rimraf dist/cjs && tsc -p tsconfig.cjs.json && echo \'{"type": "commonjs"}\' \u003E ./dist/cjs/package.json',
        'build:esm'       : 'rimraf dist/esm dist/types && tsc -p tsconfig.esm.json',
        'did:create'      : 'npm run build && node dist/esm/tool5.js -p did -a create',
        'cli:install'     : 'sh install-tool5.sh',
        'cli:uninstall'   : 'rm -rf dist node_modules',
        'update:outdated' : 'ncu --install always -u'
      },
      '_npmUser' : {
        'name'  : 'bnonni',
        'email' : 'development.xw3hd@passmail.com'
      },
      'repository' : {
        'url'  : 'git+ssh://git@github.com/bnonni/tool5.git',
        'type' : 'git'
      },
      '_npmVersion' : '10.8.2',
      'description' : 'CLI tool for interacting with Web5',
      'directories' : {

      },
      '_nodeVersion' : '20.17.0',
      'dependencies' : {
        'chalk'             : '^5.3.0',
        '@web5/api'         : '^0.10.0',
        'commander'         : '^12.1.0',
        '@web5/dids'        : '^1.1.4',
        '@web5/agent'       : '^0.6.1',
        '@web5/common'      : '^1.0.2',
        '@web5/crypto'      : '^1.0.4',
        'ed25519-keygen'    : '^0.6.2',
        '@web5/user-agent'  : '^0.5.1',
        '@web5/credentials' : '^1.1.1'
      },
      '_hasShrinkwrap'  : false,
      'devDependencies' : {
        'tsx'                              : '^4.19.1',
        'dotenv'                           : '^16.4.5',
        'eslint'                           : '^9.10.0',
        'rimraf'                           : '^6.0.1',
        'globals'                          : '^15.9.0',
        '@eslint/js'                       : '^9.10.0',
        'typescript'                       : '^5.6.2',
        '@types/node'                      : '^22.5.4',
        'npm-check-updates'                : '^17.1.1',
        '@types/readable-stream'           : '^4.0.15',
        '@typescript-eslint/parser'        : '^8.5.0',
        '@typescript-eslint/eslint-plugin' : '^8.5.0'
      },
      '_npmOperationalInternal' : {
        'tmp'  : 'tmp/tool5_3.1.0_1727543482478_0.5442697067331657',
        'host' : 's3://npm-registry-packages'
      }
    },
    '4.0.0' : {
      'name'    : 'tool5',
      'version' : '4.0.0',
      'author'  : {
        'url'  : 'https://github.com/bnonni',
        'name' : 'Bryan Nonni'
      },
      'license'     : 'ISC',
      '_id'         : 'tool5@4.0.0',
      'maintainers' : [
        {
          'name'  : 'bnonni',
          'email' : 'development.xw3hd@passmail.com'
        }
      ],
      'homepage' : 'https://github.com/bnonni/tool5#readme',
      'bugs'     : {
        'url' : 'https://github.com/bnonni/tool5/issues'
      },
      'bin' : {
        'tool5' : 'dist/esm/tool5.js'
      },
      'dist' : {
        'shasum'     : '3ac2ec9a4e30007733145adf5ac07b3573605151',
        'tarball'    : 'https://registry.npmjs.org/tool5/-/tool5-4.0.0.tgz',
        'fileCount'  : 92,
        'integrity'  : 'sha512-gk3vqFXiLxsenFZlYbAYxNSgIrLypwjtwrqdDDJoQFSTK6NMCUZV1vl8k7SsSt+5n7WRePqqInd4ixbmsxvNGw==',
        'signatures' : [
          {
            'sig'   : 'MEQCIEznCRH2ap7tGVqljrEQ5ifXZdgeVuqy/f10NCTuBIfQAiBhIKu19jh4py4I/Hv0cshXABRykJ3pwqQybecSnNFloA==',
            'keyid' : 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA'
          }
        ],
        'unpackedSize' : 125768
      },
      'main'    : './dist/cjs/index.js',
      'type'    : 'module',
      'types'   : './dist/types/index.d.ts',
      'module'  : './dist/esm/index.js',
      'exports' : {
        '.' : {
          'import'  : './dist/esm/index.js',
          'require' : './dist/cjs/index.js'
        },
        './package.json' : './package.json'
      },
      'gitHead' : '4f6c070649ac0c1ecac10ed7e281993db4dfb85c',
      'scripts' : {
        'wipe'            : 'rm -rf dist node_modules',
        'build'           : 'npm run build:cjs && npm run build:esm',
        'clean'           : 'rimraf dist',
        'start'           : 'npm run build && node dist/esm/tool5.js',
        'prepare'         : 'npm run build && chmod +x ./dist/esm/tool5.js',
        'build:cjs'       : 'rimraf dist/cjs && tsc -p tsconfig.cjs.json && echo \'{"type": "commonjs"}\' \u003E ./dist/cjs/package.json',
        'build:esm'       : 'rimraf dist/esm dist/types && tsc -p tsconfig.esm.json',
        'did:create'      : 'npm run build && node dist/esm/tool5.js -p did -a create',
        'cli:install'     : 'sh install-tool5.sh',
        'cli:uninstall'   : 'rm -rf dist node_modules',
        'update:outdated' : 'ncu --install always -u'
      },
      '_npmUser' : {
        'name'  : 'bnonni',
        'email' : 'development.xw3hd@passmail.com'
      },
      'repository' : {
        'url'  : 'git+ssh://git@github.com/bnonni/tool5.git',
        'type' : 'git'
      },
      '_npmVersion' : '10.8.2',
      'description' : 'CLI tool for interacting with Web5',
      'directories' : {

      },
      '_nodeVersion' : '20.17.0',
      'dependencies' : {
        'chalk'             : '^5.3.0',
        '@web5/api'         : '^0.10.0',
        'commander'         : '^12.1.0',
        '@web5/dids'        : '^1.1.4',
        '@web5/agent'       : '^0.6.1',
        '@web5/common'      : '^1.0.2',
        '@web5/crypto'      : '^1.0.4',
        'ed25519-keygen'    : '^0.6.2',
        '@web5/user-agent'  : '^0.5.1',
        '@web5/credentials' : '^1.1.1'
      },
      '_hasShrinkwrap'  : false,
      'devDependencies' : {
        'tsx'                              : '^4.19.1',
        'dotenv'                           : '^16.4.5',
        'eslint'                           : '^9.10.0',
        'rimraf'                           : '^6.0.1',
        'globals'                          : '^15.9.0',
        '@eslint/js'                       : '^9.10.0',
        'typescript'                       : '^5.6.2',
        '@types/node'                      : '^22.5.4',
        'npm-check-updates'                : '^17.1.1',
        '@types/readable-stream'           : '^4.0.15',
        '@typescript-eslint/parser'        : '^8.5.0',
        '@typescript-eslint/eslint-plugin' : '^8.5.0'
      },
      '_npmOperationalInternal' : {
        'tmp'  : 'tmp/tool5_4.0.0_1728195928332_0.18473557328267876',
        'host' : 's3://npm-registry-packages'
      }
    },
    '4.0.1' : {
      'name'    : 'tool5',
      'version' : '4.0.1',
      'author'  : {
        'url'  : 'https://github.com/bnonni',
        'name' : 'Bryan Nonni'
      },
      'license'     : 'ISC',
      '_id'         : 'tool5@4.0.1',
      'maintainers' : [
        {
          'name'  : 'bnonni',
          'email' : 'development.xw3hd@passmail.com'
        }
      ],
      'homepage' : 'https://github.com/bnonni/tool5#readme',
      'bugs'     : {
        'url' : 'https://github.com/bnonni/tool5/issues'
      },
      'bin' : {
        'tool5' : 'dist/esm/tool5.js'
      },
      'dist' : {
        'shasum'     : '8bf7518c906d92a36fe8cef24298f4d84c30b2b5',
        'tarball'    : 'https://registry.npmjs.org/tool5/-/tool5-4.0.1.tgz',
        'fileCount'  : 91,
        'integrity'  : 'sha512-niYZmTexpr9see0ywQC3LO2//Gt5GZoz24HWNZI8AjMJFyM1WbmqmgsNC6r/e6fEOMeh+ZERdSajuLamBOu/7w==',
        'signatures' : [
          {
            'sig'   : 'MEUCIB3y6/43Xj3DXkSgi6WC5G7RQLuSrGO8W3RCDA8dT501AiEAlGwhJbcTYkP1qgizDJvUuhG8gSeT0pz34SB5QGaaOMM=',
            'keyid' : 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA'
          }
        ],
        'unpackedSize' : 109087
      },
      'main'    : './dist/cjs/index.js',
      'type'    : 'module',
      'types'   : './dist/types/index.d.ts',
      'module'  : './dist/esm/index.js',
      'exports' : {
        '.' : {
          'import'  : './dist/esm/index.js',
          'require' : './dist/cjs/index.js'
        },
        './package.json' : './package.json'
      },
      'gitHead' : '7f2468256c58c571a73a99d941add1a74859b8ef',
      'scripts' : {
        'wipe'            : 'rm -rf dist node_modules',
        'build'           : 'npm run build:cjs && npm run build:esm',
        'clean'           : 'rimraf dist',
        'start'           : 'npm run build && node dist/esm/tool5.js',
        'prepare'         : 'npm run build && chmod +x ./dist/esm/tool5.js',
        'build:cjs'       : 'rimraf dist/cjs && tsc -p tsconfig.cjs.json && echo \'{"type": "commonjs"}\' \u003E ./dist/cjs/package.json',
        'build:esm'       : 'rimraf dist/esm dist/types && tsc -p tsconfig.esm.json',
        'did:create'      : 'npm run build && node dist/esm/tool5.js -p did -a create',
        'cli:install'     : 'sh install-tool5.sh',
        'cli:uninstall'   : 'rm -rf dist node_modules',
        'update:outdated' : 'ncu --install always -u'
      },
      '_npmUser' : {
        'name'  : 'bnonni',
        'email' : 'development.xw3hd@passmail.com'
      },
      'repository' : {
        'url'  : 'git+ssh://git@github.com/bnonni/tool5.git',
        'type' : 'git'
      },
      '_npmVersion' : '10.8.2',
      'description' : 'CLI tool for interacting with Web5',
      'directories' : {

      },
      '_nodeVersion' : '20.17.0',
      'dependencies' : {
        'chalk'             : '^5.3.0',
        '@web5/api'         : '^0.10.0',
        'commander'         : '^12.1.0',
        '@web5/dids'        : '^1.1.4',
        '@web5/agent'       : '^0.6.1',
        '@web5/common'      : '^1.0.2',
        '@web5/crypto'      : '^1.0.4',
        'ed25519-keygen'    : '^0.6.2',
        '@web5/user-agent'  : '^0.5.1',
        '@web5/credentials' : '^1.1.1'
      },
      '_hasShrinkwrap'  : false,
      'devDependencies' : {
        'tsx'                              : '^4.19.1',
        'dotenv'                           : '^16.4.5',
        'eslint'                           : '^9.10.0',
        'rimraf'                           : '^6.0.1',
        'globals'                          : '^15.9.0',
        '@eslint/js'                       : '^9.10.0',
        'typescript'                       : '^5.6.2',
        '@types/node'                      : '^22.5.4',
        'npm-check-updates'                : '^17.1.1',
        '@types/readable-stream'           : '^4.0.15',
        '@typescript-eslint/parser'        : '^8.5.0',
        '@typescript-eslint/eslint-plugin' : '^8.5.0'
      },
      '_npmOperationalInternal' : {
        'tmp'  : 'tmp/tool5_4.0.1_1728195958375_0.4333213752275791',
        'host' : 's3://npm-registry-packages'
      }
    },
    '5.0.0' : {
      'name'    : 'tool5',
      'version' : '5.0.0',
      'author'  : {
        'url'  : 'https://github.com/bnonni',
        'name' : 'Bryan Nonni'
      },
      'license'     : 'ISC',
      '_id'         : 'tool5@5.0.0',
      'maintainers' : [
        {
          'name'  : 'bnonni',
          'email' : 'development.xw3hd@passmail.com'
        }
      ],
      'homepage' : 'https://github.com/bnonni/tool5#readme',
      'bugs'     : {
        'url' : 'https://github.com/bnonni/tool5/issues'
      },
      'bin' : {
        'tool5' : 'dist/esm/tool5.js'
      },
      'dist' : {
        'shasum'     : 'b5c3090291b2a392b4851cacbaf98c5f2432ac0f',
        'tarball'    : 'https://registry.npmjs.org/tool5/-/tool5-5.0.0.tgz',
        'fileCount'  : 95,
        'integrity'  : 'sha512-f2K0WQ9+x7TqoTog4XXx+2HI79IJ/UxphCFsLS/Ysm4b85Ap7Y1ndMHtrU17y43KWvSAJl28y/h5KGkMt05QYA==',
        'signatures' : [
          {
            'sig'   : 'MEQCIFUamesWn2bBNOppKtelfoPwLLX7Z4XYop5KXdoArEsTAiAYB3tdrL3gUbi8/uiJnMLTcFa9j7d/wxe4zR9nmZLANQ==',
            'keyid' : 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA'
          }
        ],
        'unpackedSize' : 113911
      },
      'main'    : './dist/cjs/index.js',
      'type'    : 'module',
      'types'   : './dist/types/index.d.ts',
      'module'  : './dist/esm/index.js',
      'exports' : {
        '.' : {
          'import'  : './dist/esm/index.js',
          'require' : './dist/cjs/index.js'
        },
        './package.json' : './package.json'
      },
      'gitHead' : 'fdf9655b621b59c4d0f90854fb19f95e55535b53',
      'scripts' : {
        'wipe'            : 'rm -rf dist node_modules',
        'build'           : 'npm run build:cjs && npm run build:esm',
        'clean'           : 'rimraf dist',
        'start'           : 'npm run build && node dist/esm/tool5.js',
        'prepare'         : 'npm run build && chmod +x ./dist/esm/tool5.js',
        'build:cjs'       : 'rimraf dist/cjs && tsc -p tsconfig.cjs.json && echo \'{"type": "commonjs"}\' \u003E ./dist/cjs/package.json',
        'build:esm'       : 'rimraf dist/esm dist/types && tsc -p tsconfig.esm.json',
        'did:create'      : 'npm run build && node dist/esm/tool5.js -p did -a create',
        'cli:install'     : 'sh install-tool5.sh',
        'cli:uninstall'   : 'rm -rf dist node_modules',
        'update:outdated' : 'ncu --install always -u'
      },
      '_npmUser' : {
        'name'  : 'bnonni',
        'email' : 'development.xw3hd@passmail.com'
      },
      'repository' : {
        'url'  : 'git+ssh://git@github.com/bnonni/tool5.git',
        'type' : 'git'
      },
      '_npmVersion' : '10.8.2',
      'description' : 'CLI tool for interacting with Web5',
      'directories' : {

      },
      '_nodeVersion' : '20.17.0',
      'dependencies' : {
        'chalk'             : '^5.3.0',
        '@web5/api'         : '^0.10.0',
        'commander'         : '^12.1.0',
        '@web5/dids'        : '^1.1.4',
        '@web5/agent'       : '^0.6.1',
        '@web5/common'      : '^1.0.2',
        '@web5/crypto'      : '^1.0.4',
        'ed25519-keygen'    : '^0.6.2',
        '@web5/user-agent'  : '^0.5.1',
        '@web5/credentials' : '^1.1.1'
      },
      '_hasShrinkwrap'  : false,
      'devDependencies' : {
        'tsx'                              : '^4.19.1',
        'dotenv'                           : '^16.4.5',
        'eslint'                           : '^9.10.0',
        'rimraf'                           : '^6.0.1',
        'globals'                          : '^15.9.0',
        '@eslint/js'                       : '^9.10.0',
        'typescript'                       : '^5.6.2',
        '@types/node'                      : '^22.5.4',
        'npm-check-updates'                : '^17.1.1',
        '@types/readable-stream'           : '^4.0.15',
        '@typescript-eslint/parser'        : '^8.5.0',
        '@typescript-eslint/eslint-plugin' : '^8.5.0'
      },
      '_npmOperationalInternal' : {
        'tmp'  : 'tmp/tool5_5.0.0_1728198240799_0.23136974210580652',
        'host' : 's3://npm-registry-packages'
      }
    },
    '5.0.1' : {
      'name'        : 'tool5',
      'version'     : '5.0.1',
      'description' : 'CLI tool for interacting with Web5',
      'type'        : 'module',
      'main'        : './dist/cjs/index.js',
      'module'      : './dist/esm/index.js',
      'types'       : './dist/types/index.d.ts',
      'bin'         : {
        'tool5' : 'dist/esm/tool5.js'
      },
      'exports' : {
        '.' : {
          'import'  : './dist/esm/index.js',
          'require' : './dist/cjs/index.js'
        },
        './package.json' : './package.json'
      },
      'scripts' : {
        'start'           : 'npm run build && node dist/esm/tool5.js',
        'wipe'            : 'rm -rf dist node_modules',
        'clean'           : 'rimraf dist',
        'build'           : 'npm run build:cjs && npm run build:esm',
        'build:cjs'       : 'rimraf dist/cjs && tsc -p tsconfig.cjs.json && echo \'{"type": "commonjs"}\' \u003E ./dist/cjs/package.json',
        'build:esm'       : 'rimraf dist/esm dist/types && tsc -p tsconfig.esm.json',
        'did:create'      : 'npm run build && node dist/esm/tool5.js -p did -a create',
        'cli:install'     : 'sh install-tool5.sh',
        'cli:uninstall'   : 'rm -rf dist node_modules',
        'update:outdated' : 'ncu --install always -u',
        'prepare'         : 'npm run build && chmod +x ./dist/esm/tool5.js'
      },
      'repository' : {
        'type' : 'git',
        'url'  : 'git+ssh://git@github.com/bnonni/tool5.git'
      },
      'author' : {
        'name' : 'Bryan Nonni',
        'url'  : 'https://github.com/bnonni'
      },
      'license' : 'ISC',
      'bugs'    : {
        'url' : 'https://github.com/bnonni/tool5/issues'
      },
      'homepage'     : 'https://github.com/bnonni/tool5#readme',
      'dependencies' : {
        '@web5/agent'       : '^0.6.1',
        '@web5/api'         : '^0.10.0',
        '@web5/common'      : '^1.0.2',
        '@web5/credentials' : '^1.1.1',
        '@web5/crypto'      : '^1.0.4',
        '@web5/dids'        : '^1.1.4',
        '@web5/user-agent'  : '^0.5.1',
        'chalk'             : '^5.3.0',
        'commander'         : '^12.1.0',
        'ed25519-keygen'    : '^0.6.2'
      },
      'devDependencies' : {
        '@eslint/js'                       : '^9.10.0',
        '@types/node'                      : '^22.5.4',
        '@types/readable-stream'           : '^4.0.15',
        '@typescript-eslint/eslint-plugin' : '^8.5.0',
        '@typescript-eslint/parser'        : '^8.5.0',
        'dotenv'                           : '^16.4.5',
        'eslint'                           : '^9.10.0',
        'globals'                          : '^15.9.0',
        'npm-check-updates'                : '^17.1.1',
        'rimraf'                           : '^6.0.1',
        'tsx'                              : '^4.19.1',
        'typescript'                       : '^5.6.2'
      },
      '_id'          : 'tool5@5.0.1',
      'gitHead'      : 'ecac56caf08a6c5198695fe1476cb462c5d7db80',
      '_nodeVersion' : '20.18.0',
      '_npmVersion'  : '10.8.2',
      'dist'         : {
        'integrity'    : 'sha512-gPClNFHEACDPrNPIY9nQ5CtgNzXLek1VKLkenI/RRKrrWSSyIVte0HloLzyQJFW0bXgFnv5TgtcUM+xHE7B6/w==',
        'shasum'       : 'dc12d542e446ae3025101bc3de6c0fb5886a8a49',
        'tarball'      : 'https://registry.npmjs.org/tool5/-/tool5-5.0.1.tgz',
        'fileCount'    : 95,
        'unpackedSize' : 115474,
        'signatures'   : [
          {
            'keyid' : 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            'sig'   : 'MEYCIQDhX2SZFZyV3rBaQp/tH0NRk1YWw6rF2KrietBA6xDIFQIhANJcAYMSl+mvNefhpxjyApSUK/CXFEnCeUSEQf113OPI'
          }
        ]
      },
      '_npmUser' : {
        'name'  : 'bnonni',
        'email' : 'development.xw3hd@passmail.com'
      },
      'directories' : {

      },
      'maintainers' : [
        {
          'name'  : 'bnonni',
          'email' : 'development.xw3hd@passmail.com'
        }
      ],
      '_npmOperationalInternal' : {
        'host' : 's3://npm-registry-packages',
        'tmp'  : 'tmp/tool5_5.0.1_1728514637169_0.3221744505985593'
      },
      '_hasShrinkwrap' : false
    }
  },
  'time' : {
    'created'  : '2024-09-13T23:37:40.897Z',
    'modified' : '2024-10-09T22:57:17.600Z',
    '1.0.0'    : '2024-09-11T00:52:27.030Z',
    '1.0.1'    : '2024-09-13T23:03:44.683Z',
    '1.0.2'    : '2024-09-13T23:37:41.088Z',
    '1.1.0'    : '2024-09-21T02:28:09.773Z',
    '1.1.2'    : '2024-09-21T03:08:29.645Z',
    '1.2.0'    : '2024-09-26T23:13:34.840Z',
    '3.0.0'    : '2024-09-27T00:39:09.488Z',
    '3.1.0'    : '2024-09-28T17:11:22.720Z',
    '4.0.0'    : '2024-10-06T06:25:28.536Z',
    '4.0.1'    : '2024-10-06T06:25:58.643Z',
    '5.0.0'    : '2024-10-06T07:04:01.115Z',
    '5.0.1'    : '2024-10-09T22:57:17.406Z'
  },
  'bugs' : {
    'url' : 'https://github.com/bnonni/tool5/issues'
  },
  'author' : {
    'name' : 'Bryan Nonni',
    'url'  : 'https://github.com/bnonni'
  },
  'license'    : 'ISC',
  'homepage'   : 'https://github.com/bnonni/tool5#readme',
  'repository' : {
    'type' : 'git',
    'url'  : 'git+ssh://git@github.com/bnonni/tool5.git'
  },
  'description' : 'CLI tool for interacting with Web5',
  'maintainers' : [
    {
      'name'  : 'bnonni',
      'email' : 'development.xw3hd@passmail.com'
    }
  ],
  'readme'         : '# Tool5\n\nA simple typescript cli for interacting with tbd web5-js.\n\n## Summary\n\nThis repo is meant to be instructional. Use the code and cli to experiement with interacting with the core web5-js primitives: DIDs, VCs, DWNs.\nThis repo is not meant to be a substitute for the web5-js library. It exposes a simple cli interface that is using the web5-js library "under the hood."\nTo add web5 to your project or to build a DWA (decentralized web app) with web5, visit the tbd web5-js repo: \u003Chttps://github.com/TBD54566975/web5-js\u003E\n\n## Quick Install\n\nTo install `tool5`, run one of the following commands\n\n```sh\n# quick install clone\ngit clone git@github.com:bnonni/tool5.git && cd tool5 && npm run cli:install\n```\n\n```sh\n# quick install script\nwget -O - https://raw.githubusercontent.com/bnonni/tool5/main/install-tool5.sh | sh\n```\n\n## Step-by-step Install\n\nRun each of the below commands to install `tool5` locally.\n\n```sh\n# clone repo & cd into dir\ngit clone git@github.com:bnonni/tool5.git && cd tool5\n# install dependencies & build project\nnpm install && npm run build\n# install cli\nnpm run install:cli\n# show help menu\ntool5 --help\n# create a new did:dht\ntool5 -p did -a create\n```\n\n### did\n\nActions you can take on DIDs\n\n* create: creates a new did\n* recover: recovers an existing did (coming soon)\n* publish: publishes a did to the dht network (coming soon)\n* resolve: resolves a did from the dht network (coming soon)\n\n### vc (coming soon)\n\nActions you can take on VCs\n\n* create: creates a new verifiable credential\n* verify: verifies an existing credential\n\n### dwn (coming soon)\n\nActions you can take on DWNs\n\n* create: creates a new dwn record\n* read: reads dwn records\n* update: updates an existing dwn record\n* delete: deletes a dwn record\n',
  'readmeFilename' : 'README.md'
};