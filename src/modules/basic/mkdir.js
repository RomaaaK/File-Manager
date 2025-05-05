import fs from "fs/promises";
import path from "path";

export default {
  name: "mkdir",
  description: "Create new directory in current working directory",

  async execute(args, fileManager) {
    if (args.length !== 1) {
      throw new Error();
    }

    const dirPath = path.resolve(fileManager.currentDir, args[0]);

    await fs.mkdir(dirPath, { recursive: true });
  },
};
