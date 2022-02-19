import { coinFlip } from "./modules/coin.mjs";
import minimist from "minimist";

// Extract the call argument from the input
const args = minimist(process.argv.slice(2));
// Create a new key in args called 'call'
args['call']
// Flip the coin and see if it matches the user's guess
const guess = args.call
const actual = coinFlip();
var res;

if (actual == guess) {
    res = 'win';
} else {
    res = 'lose';
}
// Output the guess, outcome of the flip, and result
console.log({ call : guess, flip : actual, result : res});


