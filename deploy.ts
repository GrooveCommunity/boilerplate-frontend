import { spawnSync } from 'child_process';

import pkg from './package.json';

try {
  const start = Date.now();

  const { version, name } = pkg;

  let {
    AWS_ACCOUNT_ID,
    AWS_REGION,
    ENV_NAME,
  } = process.env;

  if (!ENV_NAME) ENV_NAME = 'local';
  if (!AWS_REGION) AWS_REGION = 'us-east-1';
  if (!AWS_ACCOUNT_ID) AWS_ACCOUNT_ID = 'none';

  const deploy = `s3://${AWS_ACCOUNT_ID}-${AWS_REGION}-${ENV_NAME}-${name}`;

  console.log(`started deploy of v${version} to ${deploy}`);

  spawnSync('aws', ['s3', 'sync', './build', deploy], {stdio: [process.stdin, process.stdout, process.stderr]});

  const end = Date.now();
  console.log(`finished deploy of v${version} with ${(end - start)/ 1000}s`);
} catch (e) {
  console.error('error when deploy:', e);
}
