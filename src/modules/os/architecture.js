import os from "os";

export default {
  name: "--architecture",
  description: "Get the CPU architecture for which Node.js binary is compiled",

  execute() {
    console.log(`Node.js binary architecture: ${os.arch()}`);
  },
};
