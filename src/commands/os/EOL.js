export default {
  name: "--EOL",
  description: "Get system End-Of-Line character",

  async execute(fileManager) {
    const eol = fileManager.getEOL();
    const visibleEOL = JSON.stringify(eol);
    console.log(`End-Of-Line character: ${visibleEOL}`);
  },
};
