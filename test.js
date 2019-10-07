//npm install readline-sync
//https://teamtreehouse.com/community/how-to-get-input-in-the-console-in-nodejs
var readline = require('readline-sync');

var name = readline.question("What is your name?");

console.log("Hi " + name + ", nice to meet you.");







// var sum = 0;
// for (i = 2; i < process.argv.length; i++) {
// 	sum += Number(process.argv[i]);
// }

// console.log(sum);