import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";

export default {
  name: "cp",
  description: "Copy file",

  async execute(args, fileManager) {
    if (args.length !== 2) {
      throw new Error();
    }

    const [sourceFile, destinationDir] = args;

    const sourcePath = path.resolve(fileManager.currentDir, sourceFile);
    const destPath = path.resolve(fileManager.currentDir, destinationDir, path.basename(sourcePath));

    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destPath);

    await pipeline(readStream, writeStream);
  },
};
