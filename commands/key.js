const inquirer = require("inquirer");
const chalk = require("chalk");

const KeyManager = require("../lib/KeyManager");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    // console.log(`Hello from set`);
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key ".green + "https://min-api.cryptocompare.com",
        validate: isRequired,
      },
    ]);
    const key = keyManager.setkey(input.key);
    if (key) {
      console.log(chalk.blue(`API Key set`));
    }
  },
  show() {
    // console.log(`Hello from show`);
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log("Current API Key: ", chalk.yellow(key));

      return key;
    } catch (err) {
      console.error(chalk.red(err.message));
    }
  },
  remove() {
    // console.log(`Hello from remove`);
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();

      console.log(chalk.blue("Key Removed"));

      return;
    } catch (err) {
      console.error(chalk.red(err.message));
    }
  },
};

module.exports = key;
