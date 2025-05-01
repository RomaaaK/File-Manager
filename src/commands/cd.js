// src/commands/cd.js
import path from "path";
import fs from "fs/promises";
import { constants } from "fs";

export default {
  name: "cd",
  description: "Change directory",

  async execute(args, state) {
    if (!args || args.length === 0 || typeof args[0] !== "string") {
      throw new Error();
    }

    const targetPath = path.resolve(state.currentDir, args[0]);

    try {
      await fs.access(targetPath, constants.R_OK);

      const stat = await fs.stat(targetPath);
      if (!stat.isDirectory()) {
        throw new Error();
      }

      process.chdir(targetPath);
      state.currentDir = process.cwd();
    } catch {
      throw new Error();
    }
  },
};
