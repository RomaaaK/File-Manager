import fs from "fs/promises";
import path from "path";

export default {
  name: "rn",
  description: "Rename file",

  async execute(args, fileManager) {
    if (args.length !== 2) {
      throw new Error();
    }

    const [oldFilePath, newFileName] = args;
    const currentPath = path.resolve(fileManager.currentDir, oldFilePath);
    const newFilePath = path.resolve(fileManager.currentDir, newFileName);

    await fs.rename(currentPath, newFilePath);
  },
};
