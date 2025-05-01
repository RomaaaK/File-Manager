import cd from "../commands/cd.js";
import osCommands from "../commands/os/index.js";

const commands = new Map();

commands.set(cd.name, cd);

commands.set(osCommands.name, osCommands);

export default commands;
