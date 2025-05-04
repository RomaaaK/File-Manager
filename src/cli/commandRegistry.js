import basicCommands from "../commands/basic/basicCommands.js";
import compressComamands from "../commands/compress/compressCommands.js";
import hashCommand from "../commands/hash/hash.js";
import navigationCommands from "../commands/navigations/navigationCommands.js";
import osCommands from "../commands/os/index.js";

const commands = new Map();

for (const [name, command] of Object.entries(navigationCommands)) {
  commands.set(name, command);
}

for (const [name, command] of Object.entries(compressComamands)) {
  commands.set(name, command);
}

for (const [name, command] of Object.entries(basicCommands)) {
  commands.set(name, command);
}


commands.set(osCommands.name, osCommands);

commands.set(hashCommand.name, hashCommand);

export default commands;
