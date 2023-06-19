// main.js - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file worker.js and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from 10 to each worker. For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
// status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
// data - value from worker in case of success or null in case of error in worker
import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  // Write your code here

  try {
    const corsNumberCPU = os.cpus().length;
    let results = [];

    for (let i = 0, n = 10; i < corsNumberCPU; ++i, ++n) {
      const startWorker = async () => {
        return new Promise(resolve => {
          const worker = new Worker('./src/wt/worker.js');
          worker.on('error', () => {
            resolve({ status: 'error', data: null });
          });

          worker.postMessage(n);
          worker.on('message', message => {
            resolve({ status: 'resolved', data: message });
          });
        });
      };
      const workerResult = await startWorker();
      results.push(workerResult);
    }

    console.log('results: ', results);
  } catch (error) {
    throw new Error(error.message);
  }
};

await performCalculations();
