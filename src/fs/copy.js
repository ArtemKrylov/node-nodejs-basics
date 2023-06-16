import { access, copyFile, mkdir, readdir } from "node:fs/promises";

const copy = async () => {
  // Write your code here
  const filesPath = "./src/fs/files";
  const filesCopyPath = "./src/fs/files_copy";

  try {
    await access(filesPath);
    await mkdir(filesCopyPath, () => {});
    const files = await readdir(filesPath);
    files.forEach(async (file) => {
      await copyFile(`${filesPath}/${file}`, `${filesCopyPath}/${file}`);
    });
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await copy();
