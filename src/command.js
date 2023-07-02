import path from "path";
import fs from "fs";
import { getCurrentDir, setCurrentDir } from "./fs/currentDir.js";

const commands = {
  up() {
    let dir = getCurrentDir();
    dir = path.resolve(dir, "..");

    setCurrentDir(dir);
  },
  cd(newPath) {
    const { sep } = path;
    let dir = getCurrentDir();

    if (sep === "/" && newPath.includes("\\")) {
      newPath = newPath.replace(/\\/g, sep);
    } else if (sep === "\\" && newPath.includes("/")) {
      newPath = newPath.replace(/\\/g, sep);
    }

    dir = path.resolve(dir, newPath);
    fs.statSync(dir);

    setCurrentDir(dir);
  },
};

export const executeCommand = (str) => {
  const [key, ...args] = str.split(" ");
  const event = commands[key];

  if (!event) {
    console.error("Invalid input");
    return;
  }

  try {
    event(...args);
  } catch {
    console.error("Operation failed");
  }
};
