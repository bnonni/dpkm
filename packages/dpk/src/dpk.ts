import { DidDht, DidWeb, UniversalResolver } from '@web5/dids';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { ResponseUtils, Logger, DpkRequest, DpkResponse, DwnResponse, QueryFilters } from '@drpm/common';

const DidResolver = new UniversalResolver({ didResolvers: [DidDht, DidWeb] });
const trailingSlashRegex = /\/$/;

export async function findEntryPoint(modulePath: string): Promise<string> {
  const packageJsonPath = join('node_modules', modulePath, 'package.json');
  const packageJsonContent = await readFile(packageJsonPath, 'utf8');
  const packageJson = JSON.parse(packageJsonContent);
  const entryPoint = (packageJson.type === 'module' ? packageJson.module : packageJson.main) ?? packageJson.main;
  return entryPoint;
}

// TODO: Refactor to be more dynamic and generic for handling all possible query filters
export function encodeURIQueryFilters(queryFilters: QueryFilters): string {
  const { name, version } = queryFilters;
  const encodedName = encodeURIComponent(`filter.tags.name=${name}`);
  const encodedVersion = encodeURIComponent(`filter.tags.version=${version}`);
  return `${encodedName}&${encodedVersion}`;
}

export async function getDwnEndpoints(did: string) {
  const { didDocument } = await DidResolver.resolve(did);
  const services = didDocument?.service;
  const didServiceEndpoint = services?.find(service => service.type === 'DecentralizedWebNode')?.serviceEndpoint ?? ['http://localhost:3000/'];
  const serviceEndpoints = Array.isArray(didServiceEndpoint) ? didServiceEndpoint : [didServiceEndpoint];
  return serviceEndpoints.map(endpoint => endpoint.replace(trailingSlashRegex, ''));
}

export async function fetchDPK({ did, dpk: { name, version, integrity }}: DpkRequest): Promise<DpkResponse> {
  try {
    for (const endpoint of await getDwnEndpoints(did)) {
      const baseDRL = `${endpoint}/${did}`;
      // may have to encode name bc of @
      const queryDRL = name
        ? `${baseDRL}/query?filter.tags.name=${name}`
        : `${baseDRL}/query?filter.protocolPath=package/release&filter.tags.version=${version}&filter.tags.integrity=${integrity}`;

      Logger.debug(`Querying DRL ${queryDRL} ...`);
      const query: Response = await fetch(queryDRL);
      if (!query || !query.ok) {
        Logger.error(`DWeb Node response error: ${query.status}`);
        continue;
      }

      const { status: {code, detail: status}, entries } = await query.json() as DwnResponse;
      Logger.debug('fetchDPK => status', status);
      if(ResponseUtils.dwnFail({code, status})) {
        Logger.error(`DWeb Node response error: failing DwnResponseStatus code=${code} detail=${status}`);
        continue;
      } else if (entries.length > 1) {
        Logger.error(`DWeb Node response error: entries.length should be 1, received ${entries.length}`, entries);
        continue;
      }

      const entry = entries.shift();
      if (!entry) {
        Logger.error('DWeb Node response error: no record entry returned from query');
        continue;
      }
      const { recordId, descriptor: { dataFormat } } = entry ?? {};
      const drl = `${baseDRL}/read/records/${recordId}`;

      const read: Response = await fetch(drl);
      if (!read || !read.ok) {
        Logger.error(`DWeb Node response error: ${read.status}`);
        continue;
      }
      const data = dataFormat === 'application/json' ? await read.json() : read.body as ReadableStream<Uint8Array>;
      if (!data) {
        Logger.error('DWeb Node request failed: no record data returned from read');
        continue;
      }
      return { ok: true, code: 200, status: 'OK', message: data };
    }
    return { ok: false, code: 404, status: 'Not found' };
  } catch(error: any) {
    Logger.error('DWeb Node request failed:', error);
    return { ok: false, code: 500, status: 'Server error', message: error.message };
  }
}