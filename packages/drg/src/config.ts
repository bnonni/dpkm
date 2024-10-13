import { readFile } from 'fs/promises';
import { join } from 'path';

export const CWD = process.cwd();
export const HOME = process.env.HOME;
export const DPM_PORT = process.env.PORT || 2092;

export const REGISTRY_DIR_NAME = '.registryd';
export const REGISTRY_DIR = join(CWD, REGISTRY_DIR_NAME);

export const REGISTRY_PROCESS_NAME = 'registry.drpm.tools';
export const REGISTRY_PID_FILE = 'registryd.pid';
export const REGISTRY_PID = await readFile(join(CWD, REGISTRY_PID_FILE), 'utf8') ?? process.pid ?? 0;
export const DPM_REGISTRY = process.env.DPM_REGISTRY || `http://localhost:${DPM_PORT}`;

export default {
  CWD,
  HOME,
  DPM_PORT,
  REGISTRY_PROCESS_NAME,
  REGISTRY_PID_FILE,
  REGISTRY_PID,
  REGISTRY_DIR,
  REGISTRY_DIR_NAME,
  DPM_HOME          : `${HOME}/.drpm`,
  NPMRC             : `${HOME}/.npmrc`,
  LOCAL_NPMRC       : `${CWD}/.npmrc`,
  PREFIXES          : [
    `@drpm:registry=${DPM_REGISTRY}`,
    `@dpk:registry=${DPM_REGISTRY}`,
    `drpm:registry=${DPM_REGISTRY}`,
    `dpk:registry=${DPM_REGISTRY}`
  ],
};