import fs from "fs/promises";

export default {
  name: "ls",
  description: "List files and folders in current directory",

  async execute(args, fileManager) {
    try {
      const dirContent = await fs.readdir(fileManager.currentDir, {
        withFileTypes: true,
      });

      const folders = dirContent
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => ({ name: dirent.name, type: "directory" }))
        .sort((a, b) => a.name.localeCompare(b.name));

      const files = dirContent
        .filter((dirent) => dirent.isFile())
        .map((dirent) => ({ name: dirent.name, type: "file" }))
        .sort((a, b) => a.name.localeCompare(b.name));

      const allItems = [...folders, ...files];

      const maxNameLength = Math.max(
        ...allItems.map((item) => item.name.length),
        4
      );

      console.log(
        `\n${"Index".padEnd(7)}${"Name".padEnd(maxNameLength + 2)}Type`
      );
      console.log("-".repeat(7 + maxNameLength + 2 + 10));

      allItems.forEach((item, index) => {
        console.log(
          `${String(index + 1).padEnd(7)}${item.name.padEnd(
            maxNameLength + 2
          )}${item.type}`
        );
      });
      console.log();
    } catch {
      console.log("Operation failed");
    }
  },
};
