import * as fs from "node:fs/promises";

const rename = async () => {
  // Write your code here
  try {
    await fs.rename(
      "./src/fs/files/wrongFileName.txt",
      "./src/fs/files/properFilename.md"
    );
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await rename();
