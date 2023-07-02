export const getUsername = () => {
  let result = "Unknown User";

  for (const str of process.argv) {
    if (str.startsWith("--username")) {
      result = str.split("=")[1];
      break;
    }
  }

  return result;
};
