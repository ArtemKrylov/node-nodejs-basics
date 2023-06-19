//TODO cp.js - implement function spawnChildProcess that receives array of arguments args and creates child process from file script.js, passing these args to it. This function should create IPC-channel between stdin and stdout of master process and child process: child process stdin should receive input from master process stdin child process stdout should send data to master process stdout
import cp from 'child_process';

const spawnChildProcess = async args => {
  // Write your code here
  try {
    const childProcess = cp.spawn('node', [
      './src/cp/files/script.js',
      ...args,
    ]);
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('exit', code => {
      process.stdin.unpipe(childProcess.stdin);
      childProcess.stdout.unpipe(process.stdout);
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
