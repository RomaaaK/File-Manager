import fs from "fs/promises";
import path from "path";

export default {
  name: "rm",
  description: "Delete file",

  async execute(args, fileManager) {
    if (args.length !== 1) {
      throw new Error();
    }

    const filePath = path.resolve(fileManager.currentDir, args[0]);
    await fs.unlink(filePath);
  },
};
