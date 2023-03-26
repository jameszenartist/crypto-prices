import axios from "axios";
import handleAPIError from "../utils/handleError.js";
import chalk from "chalk";
import validateCurrencyCode from "validate-currency-code";

import CryptoList from "../assets/exampleCrypto.json" assert { type: "json" };

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = `https://min-api.cryptocompare.com/data/pricemultifull`;
  }

  async getPriceData(coinOption, curOption) {
    try {
      let coins = coinOption.split(",");
      let cryptoCoinResults = coins.every((c) => {
        for (const key in CryptoList[0]) {
          if (c.toUpperCase() === key) return true;
        }
      });

      if (validateCurrencyCode(curOption) && cryptoCoinResults) {
        // should run when the currency is valid

        // Formatter for currency
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: curOption,
        });

        const res = await axios.get(
          `${this.baseUrl}?api_key=${this.apiKey}&fsyms=${coinOption}&tsyms=${curOption}`
        );

        let output = "";

        const { RAW } = res.data;
        for (const coin in RAW) {
          output += `Coin: ${chalk.yellow(coin)} | Price: ${chalk.green(
            formatter.format(RAW[coin][curOption].PRICE)
          )}\n`;
        }
        return output;
      } else {
        throw new Error("Correct currency code required.");
      }
    } catch (err) {
      console.log(chalk.red(`${err}`));
    }
  }
  async getCoinList(cryptoType) {
    try {
      let obj = {};
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      if (cryptoType) {
        const val = cryptoType.toLowerCase();

        for (const key in CryptoList[0]) {
          if (CryptoList[0][key].toLowerCase().includes(val))
            obj[key] = CryptoList[0][key];
        }

        console.log(
          chalk.green(
            "Here is a list of coins you might be searching for: \n\n"
          )
        );
        for (const key in obj) {
          await delay(400);
          console.log(chalk.green(`${obj[key]}, and its symbol is: ${key}\n`));
        }
      } else {
        console.log(chalk.yellow("Next time please enter a currency!\n"));
      }
    } catch (err) {
      console.error(err.message);
    }
  }
}

export default CryptoAPI;
