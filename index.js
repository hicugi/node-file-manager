import { getUsername } from "./src/greeting.js";
import { listenStdIn } from "./src/listenStdIn.js";
import { printCurrentDir } from "./src/fs/currentDir.js";

const username = getUsername();
console.log(`Welcome to the File Manager, ${username}!`);
printCurrentDir();
console.log(""); // seperate from headline

listenStdIn((inpStr) => {
  if (inpStr === ".exit") {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
  }

  printCurrentDir();
});
