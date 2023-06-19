// calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex
import { readFile } from 'node:fs/promises';
import crypto from 'crypto';

const calculateHash = async () => {
  // Write your code here
  try {
    const filePath = './src/hash/files/fileToCalculateHashFor.txt';
    const fileData = await readFile(filePath, 'utf-8');

    const hash = crypto.createHash('SHA256');
    hash.update(fileData);
    const hex = hash.digest('hex');
    console.log('SHA256 hex: ', hex);
  } catch (error) {
    throw new Error(error.message);
  }
};

await calculateHash();
