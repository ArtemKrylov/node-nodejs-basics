// args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2

const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  const pattern = /^--/;
  const argNames = args.filter(arg => pattern.test(arg));
  const argValues = args.filter(arg => !pattern.test(arg));
  console.log(
    'command line arguments:\n ',
    argNames.map((el, i) => `${el} is ${argValues[i]}`).join(', ')
  );
};

parseArgs();
