import { getUsername } from "./src/greeting.js";
import { listenStdIn } from "./src/listenStdIn.js";

const username = getUsername();
console.log(`Welcome to the File Manager, ${username}!`);

listenStdIn((inpStr) => {
  if (inpStr === ".exit") {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
  }
});
