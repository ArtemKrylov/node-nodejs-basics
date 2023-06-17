// copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
import { access, copyFile, mkdir, readdir } from 'node:fs/promises';

const copy = async () => {
  // Write your code here
  const filesPath = './src/fs/files';
  const filesCopyPath = './src/fs/files_copy';

  try {
    await access(filesPath);
    await mkdir(filesCopyPath, () => {});
    const files = await readdir(filesPath);
    files.forEach(async file => {
      await copyFile(`${filesPath}/${file}`, `${filesCopyPath}/${file}`);
    });
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await copy();
