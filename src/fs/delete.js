import { unlink } from "node:fs/promises";

const remove = async () => {
  // Write your code here
  try {
    await unlink("./src/fs/files/fileToRemove.txt");
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await remove();
