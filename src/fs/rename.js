// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
import * as fs from 'node:fs/promises';

const rename = async () => {
  // Write your code here
  try {
    await fs.rename(
      './src/fs/files/wrongFileName.txt',
      './src/fs/files/properFilename.md'
    );
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await rename();
