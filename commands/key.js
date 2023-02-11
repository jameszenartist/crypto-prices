import inquirer from "inquirer";
import chalk from "chalk";
import KeyManager from "../lib/KeyManager.js";
import isRequired from "../utils/validation.js";
const key = {
  async set() {
    // console.log(`Hello from set`);
    let keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message:
          chalk.green("Enter API Key ") + "https://min-api.cryptocompare.com",
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

export default key;
