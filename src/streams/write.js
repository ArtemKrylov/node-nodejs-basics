// write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import { createWriteStream } from 'fs';
const write = async () => {
  // Write your code here
  try {
    const fileWriteStream = createWriteStream(
      './src/streams/files/fileToWrite.txt'
    );
    process.stdin.on('data', data => fileWriteStream.write(data.toString()));

    process.stdin.on('end', () => {
      fileWriteStream.end();
    });

    process.stdin.on('error', () => {
      throw new Error('error while writing to the file');
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

await write();
