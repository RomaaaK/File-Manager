import os from "os";

export default {
  name: "--cpus",
  description: "Get information about CPUs",

  async execute() {
    const cpus = os.cpus();
    console.log(`CPU Info:`);
    console.log(`- Total CPUs: ${cpus.length}`);
    cpus.forEach((cpu, index) => {
      console.log(
        `CPU ${index + 1}: Model: ${cpu.model}, Speed: ${(
          cpu.speed / 1000
        ).toFixed(2)} GHz`
      );
    });
  },
};
