class ArgParser {
  constructor(args = process.argv.slice(2)) {
    this.args = args;
  }

  getArg(key) {
    const prefix = `--${key}=`;
    const match = this.args.find((arg) => arg.startsWith(prefix));
    return match ? match.slice(prefix.length) : null;
  }
}

export default ArgParser;