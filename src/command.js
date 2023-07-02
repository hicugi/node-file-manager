import path from "path";
import { getCurrentDir, setCurrentDir } from "./fs/currentDir.js";

const commands = {
  up() {
    let dir = getCurrentDir();
    dir = path.resolve(dir, "..");

    setCurrentDir(dir);
  },
};

export const executeCommand = (key) => {
  const event = commands[key];

  if (!event) {
    console.error("Invalid input");
    return;
  }

  event();
};
