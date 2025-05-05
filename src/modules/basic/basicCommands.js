import add from "./add.js";
import cat from "./cat.js";
import mkdir from "./mkdir.js";
import rn from "./rn.js";
import cp from "./cp.js";
import mv from "./mv.js";
import rm from "./rm.js";

const basicCommands = {
  [cat.name]: cat,
  [add.name]: add,
  [mkdir.name]: mkdir,
  [rn.name]: rn,
  [cp.name]: cp,
  [mv.name]: mv,
  [rm.name]: rm,
};

export default basicCommands;