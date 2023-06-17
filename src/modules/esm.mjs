// cjsToEsm.cjs - rewrite it to it's equivalent in ECMAScript notation (and rename it to esm.mjs)
import { sep } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import objA from './files/a.json' assert { type: 'json' };
import objB from './files/b.json' assert { type: 'json' };
import * as moduleC from './files/c.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const random = Math.random();

const unknownObject = random > 0.5 ? objA : objB;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectoryPath = dirname(currentFilePath);

console.log(`Path to current file is ${currentFilePath}`);
console.log(`Path to current directory is ${currentDirectoryPath}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
