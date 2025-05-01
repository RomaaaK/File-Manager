import os from 'os';

export default {
  name: '--username',
  description: 'Get current system user name',

  execute() {
    console.log(`Current system user: ${os.userInfo().username}`);
  }
};
