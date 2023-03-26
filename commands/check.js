import KeyManager from "../lib/KeyManager.js";
import CryptoAPI from "../lib/CryptoAPI.js";
import chalk from "chalk";
let keyManager;
const check = {
  async price(cmd) {
    // console.log(cmd.coin, cmd.cur);
    try {
      keyManager = new KeyManager();
      const key = keyManager.getKey();
      const api = new CryptoAPI(key);

      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);
      if (priceOutputData) console.log(priceOutputData);
    } catch (err) {
      console.error(chalk.red(err.message));
    }
  },
};

export default check;
