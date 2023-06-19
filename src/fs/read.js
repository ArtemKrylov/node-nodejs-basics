// read.js - implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
import { readFile } from 'node:fs/promises';

const read = async () => {
  // Write your code here
  try {
    const fileContent = await readFile(
      './src/fs/files/fileToRead.txt',
      'utf-8'
    );
    console.log('fileContent of ./src/fs/files/fileToRead.txt:\n', fileContent);
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await read();
