const parseEnv = () => {
  // Write your code here
  const envVars = process.env;
  console.log(
    "environment variables:\n ",
    Object.keys(envVars)
      .map((key) => `RSS_${key}=${envVars[key]}`)
      .join("; ")
  );
};

parseEnv();
