import { Web5 } from '@web5/api';
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import dpm from '../src/protocol.js';
import { join } from 'path';
import metadata from './dpk-metadata.js';

async function sha512Integrity(tgzFilepath: string): Promise<string> {
  console.log(`Computing sha512 integrity hash for ${tgzFilepath}`);
  const fileBuffer = await readFile(tgzFilepath);
  const hash = createHash('sha512').update(fileBuffer).digest('base64');
  return `sha512-${hash}`;
}

async function configureProtocol() {
  const { status, protocol } = await web5.dwn.protocols.configure({ message: { definition: dpm }});
  console.log('configureProtocol => status', status);

  if (!protocol) {
    throw new Error('Failed to configure dpm protocol');
  }
  console.log('configureProtocol => protocol', protocol);

  return await protocol.send(did);
};

async function releaseDPK({ version, dpk, integrity, parentId }) {
  const { record, status } = await web5.dwn.records.create({
    store   : true,
    data    : dpk,
    message : {
      parentContextId : parentId,
      published       : true,
      dataFormat      : 'application/octet-stream',
      schema          : dpm.types.release.schema,
      protocolPath    : 'package/release',
      protocol        : dpm.protocol,
      tags            : {
        version,
        integrity
      }
    },
  });
  if (!record) {
    return status;
  }
  console.log('DPK published => releaseDPK => status', status);
  console.log('DPK published => createDPK => recordId', record.id);
  const { status: send } = await record.send(did);
  return {status: send, record};
}

async function createDPK({ name }: { name: string; }) {
  const { record, status } = await web5.dwn.records.create({
    store   : true,
    data    : metadata,
    message : {
      published    : true,
      dataFormat   : 'application/json',
      schema       : dpm.types.package.schema,
      protocolPath : 'package',
      protocol     : dpm.protocol,
      tags         : { name }
    },
  });
  if (!record) {
    throw new Error('Failed to create dpk');
  }
  console.log('DPK published => createDPK => status', status);
  console.log('DPK published => createDPK => recordId', record.id);
  const { status: send } = await record.send(did);
  return {status: send, record};
}

async function queryPackages({name}) {
  const { status, records = [] } = await web5.dwn.records.query({
    from    : did,
    message : {
      filter : {
        dataFormat   : 'application/json',
        schema       : dpm.types.package.schema,
        protocolPath : 'package',
        protocol     : dpm.protocol,
        tags         : { name },
      },
    },
  });

  const reads = await Promise.all(records.map(async (record) => {
    return await record.data.json();
  }));

  return { status, records, reads };
}

async function queryReleases({ version, integrity, parentId }) {
  const { status, records = [] } = await web5.dwn.records.query({
    from    : did,
    message : {
      filter : {
        parentId,
        dataFormat   : 'application/json',
        schema       : dpm.types.release.schema,
        protocolPath : 'package/release',
        protocol     : dpm.protocol,
        tags         : {
          version,
          integrity
        },
      },
    },
  });

  const reads = await Promise.all(records.map(async (record) => {
    return await record.data.json();
  }));

  return { status, records, reads };
}

const password = 'correct horse battery staple';
const dwnEndpoints = ['http://localhost:3000'];
const data = {
  name     : '@dpm/tool5',
  version  : '5.0.1',
  tgz      : 'dpm-tool5-5.0.1.tgz',
  parentId : ''
};

/*
 {
    name            : '@dcx-protocol/applicant',
    version         : '7.0.0',
    tgz             : 'dcx-protocol-applicant-7.0.0.tgz',
    parentContextId : ''
  },
  {
    name            : '@dcx-protocol/common',
    version         : '7.0.0',
    tgz             : 'dcx-protocol-common-7.0.0.tgz',
    parentContextId : ''
  },
  {
    name            : '@dcx-protocol/issuer',
    version         : '7.0.0',
    tgz             : 'dcx-protocol-issuer-7.0.0.tgz',
    parentContextId : ''
  },
  {
    name            : '@dcx-protocol/root',
    version         : '7.0.1',
    tgz             : 'dcx-protocol-root-7.0.1.tgz',
    parentContextId : ''
  },
  {
    name            : '@dcx-protocol/server',
    version         : '7.0.1',
    tgz             : 'dcx-protocol-server-7.0.1.tgz',
    parentContextId : ''
  }
*/
const { web5, did } = await Web5.connect({
  password,
  sync             : '30s',
  techPreview      : { dwnEndpoints },
  didCreateOptions : { dwnEndpoints }
});
console.log('web5Connect => did', did);

const { status: configStatus } = await configureProtocol();
console.log('Configured DPM protocol => configStatus', configStatus);

const { name, version, tgz } = data;
const tgzPath = join(`${process.cwd()}/scripts/dpks`, tgz);
console.log(`DPK name, version, tgz, tgzPath =>`, name, version, tgz, tgzPath);

const integrity = await sha512Integrity(tgzPath);
console.log(`Computed integrity hash =>`, integrity);

const { status: dpkStatus, record } = await createDPK({ name });
console.log('Created dpk package => dpkStatus', dpkStatus);
console.log('Created dpk package => record.id', record.id );

const dpk = await readFile(tgzPath);
console.log('Created dpk release => dpk', dpk);
const releaseStatus = await releaseDPK({ version, dpk, integrity, parentId: record.id });
console.log('Created dpk release => releaseStatus', releaseStatus);

const {reads} = await queryReleases({ version, integrity, parentId: record.id });
for(let read of reads) {
  console.log('Read package record', read);
}

// const {reads} = await queryPackages({ name });
// console.log('Read package records query');

