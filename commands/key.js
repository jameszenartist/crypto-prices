const inquirer = require("inquirer");
const colors = require("colors");
colors.enable();
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
      console.log(`API Key set`.blue);
    }
  },
  show() {
    // console.log(`Hello from show`);
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log("Current API Key: ", key.yellow);

      return key;
    } catch (err) {
      console.error(err.message.red);
    }
  },
  remove() {
    // console.log(`Hello from remove`);
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();

      console.log("Key Removed".blue);

      return;
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = key;
