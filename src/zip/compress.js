//TODO compress.js - implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
const compress = async () => {
  // Write your code here
  try {
    const zip = zlib.createGzip();
    const fileReadStream = createReadStream(
      './src/zip/files/fileToCompress.txt'
    );
    const fileWriteStream = createWriteStream('./src/zip/files/archive.gz');

    fileReadStream.pipe(zip).pipe(fileWriteStream);
  } catch (error) {
    throw new Error(error.message);
  }
};

await compress();
