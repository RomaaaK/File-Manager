import fs from "fs/promises";
import path from "path";

export default {
  name: "add",
  description: "Create empty file in current working directory",

  async execute(args, fileManager) {
    if (args.length !== 1) {
      throw new Error();
    }

    const fileName = args[0];
    const filePath = path.resolve(fileManager.currentDir, fileName);

    await fs.writeFile(filePath, "", { flag: "wx" });
  },
};
