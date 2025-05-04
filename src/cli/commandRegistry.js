import basicCommands from "../modules/basic/basicCommands.js";
import compressComamands from "../modules/compress/compressCommands.js";
import hashCommands from "../modules/hash/hashCommands.js";
import navigationCommands from "../modules/navigations/navigationCommands.js";
import osCommands from "../modules/os/osCommands.js";

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
