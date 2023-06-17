// list.js - implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
import { readdir } from 'node:fs/promises';

const list = async () => {
  // Write your code here
  try {
    const files = await readdir('./src/fs/files');
    console.log('files in ./src/fs/files: ', files);
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await list();
