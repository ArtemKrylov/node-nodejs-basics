// read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
import { createReadStream } from 'fs';

const read = async () => {
  // Write your code here
  try {
    const fileStream = createReadStream(
      './src/streams/files/fileToRead.txt',
      'utf8'
    );

    let data = '';
    fileStream.on('data', chunk => {
      data += chunk;
    });

    fileStream.on('end', () => {
      process.stdout.write(data);
    });

    fileStream.on('error', error => {
      throw new Error('Error while reading the file');
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

await read();
