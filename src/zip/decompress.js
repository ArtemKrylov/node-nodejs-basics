//TODO decompress.js - implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
const decompress = async () => {
  // Write your code here
  try {
    const unZip = zlib.createUnzip();
    const fileReadStream = createReadStream('./src/zip/files/archive.gz');
    const fileWriteStream = createWriteStream(
      './src/zip/files/fileToCompress.txt'
    );
    fileReadStream.pipe(unZip).pipe(fileWriteStream);
  } catch (error) {
    throw new Error(error.message);
  }
};

await decompress();
