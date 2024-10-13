import { Web5 } from '@web5/api';
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path from 'path';
import drpm from '../packages/common/src/protocol.js';
const sync = '30s';
const password = 'correct horse battery staple';
const dwnEndpoints = ['http://localhost:3000'];

const { web5, did } = await Web5.connect({
  sync,
  password,
  techPreview      : { dwnEndpoints },
  didCreateOptions : { dwnEndpoints }
});

// const agent = web5.agent as Web5PlatformAgent;
console.debug('did', did);

const { status: configure, protocol } = await web5.dwn.protocols.configure({ message: { definition: drpm }});
console.log('configure', configure);

if (!protocol) {
  throw new Error('Failed to configure protocol');
}

const { status: sendProto } = await protocol.send(did);
console.log('sendProto', sendProto);

const name = 'tool5';
const version = '1.0.2';
const filePath = path.resolve(process.cwd() + `/${name}-${version}.tgz`);
console.log('filePath', filePath);

const tgzFile = await readFile(filePath);
console.log('tgzFile', tgzFile);

const hash = createHash('sha512');
console.log('hash', hash);

hash.update(tgzFile);
console.log('hash.update', hash);

const base64Hash = hash.digest('base64');
console.log('base64Hash', base64Hash);

const integrity = `sha512-${base64Hash}`;
console.log('integrity', integrity);

const { record, status: create } = await web5.dwn.records.create({
  store   : true,
  data    : { package: tgzFile },
  message : {
    dataFormat   : 'application/json',
    schema       : drpm.types.package.schema,
    protocolPath : 'package',
    protocol     : drpm.protocol,
    tags         : {
      name,
      version,
      integrity,
    },
  },
});

console.log('create', create);
console.log('record', record);

if(!record) {
  throw new Error('Failed to create record');
}

const { status: sendRecord } = await record.send(did);
console.log('sendRecord', sendRecord);

const { status: stat, records: recs = [] } = await web5.dwn.records.query({
  from    : did,
  message : {
    filter : {
      schema       : drpm.types.package.schema,
      protocolPath : 'package',
      dataFormat   : 'application/json',
      protocol     : drpm.protocol,
      tags         : {
        name    : 'tool5',
        version : '1.0.2',
      },
    },
  },
});
console.log('query => status', stat);
console.log('query => records', recs);
if (!recs.length) {
  throw new Error('Failed to query record');
}
const reads = await Promise.all(recs.map(async (rec) => {
  return await rec.data.json();
}));
console.log('query => records => reads', reads);