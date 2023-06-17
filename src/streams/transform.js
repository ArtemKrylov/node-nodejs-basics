//TODO transform.js - implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout
import { Transform } from 'stream';
import { createWriteStream } from 'fs';

class ReverseStream extends Transform {
  constructor(options) {
    super(options);
  }
  _read(n) {}
}

const transform = async () => {
  // Write your code here
  const fileWriteStream = createWriteStream(
    './src/streams/files/fileToWrite.txt'
  );
  try {
    process.stdin.on('data', data => {});
  } catch (error) {
    throw new Error(error.message);
  }
};

await transform();
