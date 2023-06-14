import { writeFile, access } from "node:fs/promises";

const create = async () => {
  // Write your code here
  const content = "I am fresh and young";
  const path = "./src/fs/files/fresh.txt";

  //file existence check
  try {
    await access(path);
    throw new Error("exists");
  } catch (error) {
    if (error.message === "exists") {
      throw new Error(`FS operation failed`);
    }
  }

  //file write
  try {
    await writeFile(path, content);
  } catch (error) {
    throw new Error(`FS operation failed`);
  }
};

export default await create();
