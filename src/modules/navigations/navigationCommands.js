import cd from './cd.js';
import ls from './ls.js';
import up from './up.js';

const navigationCommands = {
  [cd.name]: cd,
  [ls.name]: ls,
  [up.name]: up,
};

export default navigationCommands;
