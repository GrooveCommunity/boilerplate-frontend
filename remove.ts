import { spawnSync } from 'child_process';

import pkg from './package.json';

try {
  const start = Date.now();

  const { version, name } = pkg;
  const deploy = `s3://${name}`;

  console.log(`started deletion of v${version}`);

  spawnSync('aws', ['s3', 'rm', deploy, '--recursive'], { stdio: [process.stdin, process.stdout, process.stderr] });

  const end = Date.now();
  console.log(`finished deletion of v${version} with ${(end - start)/ 1000}s`);
} catch (e) {
  console.error('error when deploy to s3:', e);
}
