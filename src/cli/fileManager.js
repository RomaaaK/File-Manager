import os from "os";
import readline from "readline";
import commands from "./commandRegistry.js";

class FileManager {
  constructor(username) {
    this.username = username;
    this.currentDir = os.homedir();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> ",
    });
  }

  start() {
    console.log(`Welcome to the File Manager, ${this.username}!`);
    this.printCurrentDir();
    this.rl.prompt();

    this.rl.on("line", (line) => {
      const input = line.trim();
      this.handleCommand(input);
    });

    this.rl.on("close", () => {
      console.log(
        `Thank you for using File Manager, ${this.username}, goodbye!`
      );
      process.exit(0);
    });
  }

  printCurrentDir() {
    console.log(`You are currently in ${this.currentDir}`);
  }

  async handleCommand(input) {
    const [commandName, ...args] = input.trim().split(" ");
    const command = commands.get(commandName);

    if (commandName === ".exit") {
      this.rl.close();
      return;
    }

    try {
      if (command) {
        await command.execute(args, this);
      } else {
        console.log("Invalid command");
      }
    } catch {
      console.log("Operation failed");
    }

    this.printCurrentDir();
    this.rl.prompt();
  }
}

export default FileManager;
