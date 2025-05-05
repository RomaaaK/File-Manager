import os from "./os.js";

const osCommands = {
  [os.name]: os,
};

export default osCommands;
