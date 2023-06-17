// calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
  // Write your code here
  try {
    const filePath = './src/hash/files/fileToCalculateHashFor.txt';
    const fileData = await readFile(filePath, 'utf-8');
    console.log('fileData: ', fileData);
  } catch (error) {
    throw new Error(error.message);
  }
};

await calculateHash();
