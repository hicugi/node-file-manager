let state = process.cwd();

export const setCurrentDir = (newValue) => {
  state = newValue;
};

export const getCurrentDir = () => {
  return state;
};

export const printCurrentDir = () => {
  console.log(`You are currently in ${getCurrentDir()}`);
};
