import os from "os";

export default {
  name: "--homedir",
  description: "Get the home directory of the current user",

  execute() {
    console.log(`Home directory: ${os.homedir()}`);
  },
};
