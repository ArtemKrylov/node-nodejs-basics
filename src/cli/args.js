import * as util from "node:util";

const parseArgs = () => {
  // Write your code here
  // const comLineArgs = process.argv;
  // console.log("command line arguments:\n ", comLineArgs);
	const args = process.argv.slice(2);
	const pattern = /^--/;
	const argNames = args.filter(arg => pattern.test(arg));
	const argValues = args.filter(arg => !pattern.test(arg));
	console.log('command line arguments:\n ', argNames.map((el, i) => `${el} is ${argValues[i]}`).join(', '));
};

parseArgs();
