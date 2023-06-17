//TODO transform.js - implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout
import { Transform } from 'stream';

const transform = async () => {
  // Write your code here
  try {
    const reverseStream = new Transform({
      transform(chunk, _, callback) {
        this.push(chunk.toString().split('').reverse().join(''));
        callback();
      },
    });
    process.stdin.pipe(reverseStream).pipe(process.stdout);
  } catch (error) {
    throw new Error(error.message);
  }
};

await transform();
