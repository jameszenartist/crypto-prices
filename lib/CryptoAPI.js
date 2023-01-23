const axios = require("axios");
const { handleAPIError } = require("../utils/handleError");
const chalk = require("chalk");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = `https://min-api.cryptocompare.com/data/pricemultifull`;
  }

  async getPriceData(coinOption, curOption) {
    try {
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
    } catch (err) {
      console.error(err);
      // handleAPIError(err);
    }
  }
}

module.exports = CryptoAPI;
