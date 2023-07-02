export const getCurrentDir = () => {
  return process.cwd();
};

export const printCurrentDir = () => {
  console.log(`You are currently in ${getCurrentDir()}`);
};
