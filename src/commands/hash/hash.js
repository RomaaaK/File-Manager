import { createHash } from "crypto";
import { pipeline } from "stream/promises";
import { createReadStream } from "fs";
import path  from "path";

const hashCommand = {
  name: "hash",
  description: "Calculate hash for file and print it into console",

  async execute(args, fileManager) {
    if (args.length !== 1) {
      throw new Error();
    }

    const hash = createHash("sha256");
    const filePath = path.resolve(fileManager.currentDir, args[0]);

    await pipeline(createReadStream(filePath), hash);
    const digest = hash.digest("hex");
    console.log(digest);
  },
};

export default hashCommand;
