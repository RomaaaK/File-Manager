import navigationCommands from "../commands/navigations/navigationCommands.js";
import osCommands from "../commands/os/index.js";

const commands = new Map();

for (const [name, command] of Object.entries(navigationCommands)) {
  commands.set(name, command);
}

commands.set(osCommands.name, osCommands);

export default commands;
