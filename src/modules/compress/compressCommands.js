import compress from "./compress.js";
import decompress from "./decompress.js";

const compressComamands = {
  [compress.name]: compress,
  [decompress.name]: decompress,
};

export default compressComamands;
