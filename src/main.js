import FileManager from "./cli/fileManager.js";
import ArgParser from "./helpers/args.js";

const parser = new ArgParser();
const userName = parser.getArg('username') || 'Anonimus';

const manager = new FileManager(userName);
manager.start();