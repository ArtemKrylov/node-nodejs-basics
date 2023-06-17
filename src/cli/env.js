// env.js - implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
const parseEnv = () => {
  // Write your code here
  const envVars = process.env;
  console.log(
    'environment variables:\n ',
    Object.keys(envVars)
      .map(key => `RSS_${key}=${envVars[key]}`)
      .join('; ')
  );
};

parseEnv();
