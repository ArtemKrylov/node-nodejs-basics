// worker.js - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
// n should be received from main thread
import { parentPort } from 'worker_threads';
const nthFibonacci = n =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// This function sends result of nthFibonacci computations to main thread
const sendResult = () => {
  try {
    parentPort.on('message', message => {
      parentPort.postMessage(nthFibonacci(message));
    });

    parentPort.on('error', error => {
      throw new Error(error.message);
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

sendResult();
