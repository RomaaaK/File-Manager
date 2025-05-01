import path from 'path';
import os from 'os';

export default {
  name: 'up',
  description: 'Go one level up in current directory',

  async execute(args, fileManager) {
    const homeDir = os.homedir();
    const parentDir = path.resolve(fileManager.currentDir, '..');

    if (parentDir.startsWith(homeDir)) {
      fileManager.currentDir = parentDir;
    }
  }
};
