import inquirer from "inquirer";
import chalk from "chalk";
import CryptoAPI from "../lib/CryptoAPI.js";

const list = {
  async show() {
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "guess",
        message: chalk.green(
          "Please enter a crypto currency you're looking for: "
        ),
      },
    ]);

    try {
      const api = new CryptoAPI();
      await api.getCoinList(input.guess);
    } catch (err) {
      console.error(chalk.red(err.message));
    }
  },
};

export default list;
