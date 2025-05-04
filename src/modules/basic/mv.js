import fs from "fs/promises";
import path from "path";

export default {
  name: "mv",
  description: "Move file",

  async execute(args, fileManager) {
    if (args.length !== 2) {
      throw new Error();
    }

    const [sourcePath, destinationPath] = args;
    const srcPath = path.resolve(fileManager.currentDir, sourcePath);
    const destPath = path.resolve(fileManager.currentDir, destinationPath, path.basename(srcPath));

    await fs.copyFile(srcPath, destPath);
    await fs.unlink(srcPath);
  },
};
