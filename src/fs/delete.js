// delete.js - implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
import { unlink } from 'node:fs/promises';

const remove = async () => {
  // Write your code here
  try {
    await unlink('./src/fs/files/fileToRemove.txt');
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await remove();
