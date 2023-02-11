import Configstore from "configstore";
import pkg from "../package.json" assert { type: "json" };

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setkey(key) {
    this.conf.set("apiKey", key);
    return key;
  }
  getKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error(
        "No API Key found - Get a key at https://min-api.cryptocompare.com"
      );
    }
    return key;
  }
  deleteKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error(
        "No API Key found - Get a key at https://min-api.cryptocompare.com"
      );
    }

    this.conf.delete("apiKey");
    return;
  }
}

export default KeyManager;
