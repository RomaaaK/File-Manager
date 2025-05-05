import fs from 'fs';
import path from 'path';

export default {
  name: 'cat',
  description: 'Read file and print its content to console',

  async execute(args, fileManager) {
    if (args.length !== 1) {
      throw new Error();
    }

    const filePath = path.resolve(fileManager.currentDir, args[0]);

    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(filePath, { encoding: 'utf-8' });

      stream.on('data', chunk => process.stdout.write(chunk));
      stream.on('end', () => resolve());
      stream.on('error', () => reject(new Error()));
    });
  },
};
