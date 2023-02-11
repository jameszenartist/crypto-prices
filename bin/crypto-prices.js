#!/usr/bin/env node

import { program } from "commander";
import pkg from "../package.json" assert { type: "json" };
program
  .version(pkg.version)
  .command("key", "Manage API Key -- https://min-api.cryptocompare.com")
  .command("check", "Check Coin Price Info")
  .parse(process.argv);

// console.log(`Hello from crypto-prices!`);
// console.log(process.argv);
