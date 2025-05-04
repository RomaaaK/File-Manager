import osEOL from './EOL.js';
import osCpus from './cpus.js';
import osHomedir from './homedir.js';
import osUsername from './username.js';
import osArchitecture from './architecture.js';

const osCommands = {
  [osEOL.name]: osEOL,
  [osCpus.name]: osCpus,
  [osHomedir.name]: osHomedir,
  [osUsername.name]: osUsername,
  [osArchitecture.name]: osArchitecture,
};

export default {
  name: 'os',
  description: 'Operating system info',

  async execute(args, fileManager) {
    if (args.length === 0 || !osCommands[args[0]]) {
      throw new Error();
    }

    const command = osCommands[args[0]];
    await command.execute(fileManager);
  }
};
