import path from "path";
import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream/promises";

export default {
  name: "compress",
  description: "Compress file using Brotli",

  async execute(args, fileManager) {
    if (args.length !== 2) {
      throw new Error();
    }

    const [source, destination] = args;
    const sourcePath = path.resolve(fileManager.currentDir, source);
    const destPath = path.resolve(fileManager.currentDir, destination);

    const readStream = fs.createReadStream(sourcePath);
    const brotli = zlib.createBrotliCompress();
    const writeStream = fs.createWriteStream(destPath);

    await pipeline(readStream, brotli, writeStream);

    console.log("File compressed successfully");
  },
};
