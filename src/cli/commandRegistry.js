import basicCommands from "../commands/basic/basicCommands.js";
import compressComamands from "../commands/compress/compressCommands.js";
import hashCommands from "../commands/hash/hashCommands.js";
import navigationCommands from "../commands/navigations/navigationCommands.js";
import osCommands from "../commands/os/osCommands.js";

const commands = new Map();

const allCommandGroups = [
  navigationCommands,
  compressComamands,
  basicCommands,
  osCommands,
  hashCommands,
];

for (const group of allCommandGroups) {
  for (const [name, command] of Object.entries(group)) {
    commands.set(name, command);
  }
}

export default commands;
