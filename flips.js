import { coinFlips, countFlips } from "./modules/coin.mjs"
import minimist from "minimist";

// Get argument from command line
const args = minimist(process.argv.slice(2));
// Create a new entry in args with key 'number' and define a comstant with its value
args['number']
const number = args.number || process.env.NUMBER || 1;
// Pass number as an argument to coinFlips and save in var res
var res = coinFlips(number);
// Output the array of flips and its count summary
console.log(res)
console.log(countFlips(res));




