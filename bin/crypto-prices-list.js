import { program } from "commander";
import list from "../commands/list.js";

program
  .command("list")
  .description("Show complete list of coins")
  .action(list.show)
  .parse(process.argv);
