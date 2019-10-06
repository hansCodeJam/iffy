console.log('Hello fellow traveler');
const readline = require('readline-sync');
let userCurrency = readline.question('What currency do you currently have? Type "USD", "EUR", "JPY", "GPB", "AUD"\n');
let currency = readline.question('What currency would like to convert? Type "USD" , "EUR", "JPY", "GDP", "AUD" \n');
let userValue = readline.question(`Your converting (${userCurrency.toUpperCase()}) -> (${currency.toUpperCase()}). What is your current value of your currency (${userCurrency.toUpperCase()})?\n`);
let result;
let message = "You currently have ";


if (userCurrency.toUpperCase() === "USD" && currency.toUpperCase() === "USD") {
    result = userValue * 1;
    console.log(message + result.toFixed(2) + " USD")
} else if (userCurrency.toUpperCase() === "USD" && currency.toUpperCase() === "EUR") {
    result = userValue * 0.88;
    console.log(message + result.toFixed(2) + " EUR")
} else if (userCurrency.toUpperCase() === "USD" && currency.toUpperCase() === "AUD") {
    result = userValue * 1.37;
    console.log(message + result.toFixed(2) + " AUD")
} else if (userCurrency.toUpperCase() === "USD" && currency.toUpperCase() === "GBP") {
    result = userValue * 0.69;
    console.log(message + result.toFixed(2) + " GBP")
} else if (userCurrency.toUpperCase() === "USD" && currency.toUpperCase() === "JPY") {
    result = userValue * 108.96;
    console.log(message + result.toFixed(2) + " JPY")
} else if (userCurrency.toUpperCase() === "EUR" && currency.toUpperCase() === "EUR") {
    result = userValue * 1;
    console.log(message + result.toFixed(2) + " EUD")
} else if (userCurrency.toUpperCase() === "EUR" && currency.toUpperCase() === "USD") {
    result = userValue * 1.13;
    console.log(message + result.toFixed(2) + " USD")
} else if (userCurrency.toUpperCase() === "EUR" && currency.toUpperCase() === "AUD") {
      result = userValue * 1.55;
    console.log(message + result.toFixed(2) + " AUD")
} else if (userCurrency.toUpperCase() === "EUR" && currency.toUpperCase() === "GBP") {
      result = userValue * 0.70;
    console.log(message + result.toFixed(2) + " GBP")
} else if (userCurrency.toUpperCase() === "EUR" && currency.toUpperCase() === "JPY")  {
      result = userValue * 123.47;
    console.log(message + result.toFixed(2) + " JPY")
} else if ((userCurrency.toUpperCase() === "EUR") && (currency.toUpperCase() === "EUR"))  {
      result = userValue * 1;
    console.log(message + result.toFixed(2) + " EUD")
} else if ((userCurrency.toUpperCase() === "EUR") && (currency.toUpperCase() === "USD"))  {
      result = userValue * 1;
    console.log(message + result.toFixed(2) + " USD")
} else if (userCurrency.toUpperCase() === "EUR" && currency.toUpperCase() === "AUD")  {
      result = userValue * 1.55;
    console.log(message + result.toFixed(2) + " AUD")
} else if (userCurrency.toUpperCase() === "EUR" && currency.toUpperCase() === "GBP")  {
      result = userValue * 0.79;
    console.log(message + result.toFixed(2) + " GBP")
} else if (userCurrency.toUpperCase() === "EUR" && currency.toUpperCase() === "JPY")  {
      result = userValue * 123.47;
    console.log(message + result.toFixed(2) + " JPY")
} else if (userCurrency.toUpperCase() === "GPB" && currency.toUpperCase() === "EUR")  {
      result = userValue * 1.27;
    console.log(message + result.toFixed(2) + " EUR")
} else if (userCurrency.toUpperCase() === "GPB" && currency.toUpperCase() === "USD")  {
      result = userValue * 1.44;
    console.log(message + result.toFixed(2) + " USD")
} else if (userCurrency.toUpperCase() === "GPB" && currency.toUpperCase() === "AUD")  {
      result = userValue * 1.98;
    console.log(message + result.toFixed(2) + " AUD")
} else if (userCurrency.toUpperCase() === "GPB" && currency.toUpperCase() === "GBP")  {
      result = userValue * 1;
    console.log(message + result.toFixed(2) + " GBP")
} else if (userCurrency.toUpperCase() === "GPB" && currency.toUpperCase() === "JPY")  {
      result = userValue * 157.08;
    console.log(message + result.toFixed(2) + " JPY")
} else if (userCurrency.toUpperCase() === "AUD" && currency.toUpperCase() === "EUR")  {
      result = userValue * 0.64;
    console.log(message + result.toFixed(2) + " EUR")
} else if (userCurrency.toUpperCase() === "AUD" && currency.toUpperCase() === "USD")  {
      result = userValue * 0.73;
    console.log(message + result.toFixed(2) + " USD")
} else if (userCurrency.toUpperCase() === "AUD" && currency.toUpperCase() === "AUD")  {
      result = userValue * 1;
    console.log(message + result.toFixed(2) + " AUD")
} else if (userCurrency.toUpperCase() === "AUD" && currency.toUpperCase() === "GBP")  {
      result = userValue * 0.51;
    console.log(message + result.toFixed(2) + " GBP")
} else if (userCurrency.toUpperCase() === "AUD" && currency.toUpperCase() === "JPY")  {
      result = userValue * 1;
    console.log(message + result.toFixed(2) + " JPY")
} else if (userCurrency.toUpperCase() === "JPY" && currency.toUpperCase() === "EUR")  {
      result = userValue * .0081;
    console.log(message + result.toFixed(2) + " EUR")
} else if (userCurrency.toUpperCase() === "JPY" && currency.toUpperCase() === "USD")  {
      result = userValue * 0.0092;
    console.log(message + result.toFixed(2) + " USD")
} else if (userCurrency.toUpperCase() === "JPY" && currency.toUpperCase() === "AUD")  {
      result = userValue * 0.013;
    console.log(message + result.toFixed(2) + " AUD")
} else if (userCurrency.toUpperCase() === "JPY" && currency.toUpperCase() === "GBP")  {
      result = userValue * 0.0064;
    console.log(message + result.toFixed(2) + " GBP")
} else if (userCurrency.toUpperCase() === "JPY" && currency.toUpperCase() === "JPY")  {
      result = userValue * 1;
    console.log(message + result.toFixed(2) + " JPY")
}

// if (userInput.toLowerCase() === 'd') {
//     let amountDollars = readline.question('Please input your amount of dollars to be converted\n $');
//     let conversionEuro = dollarsToEurosConverter(amountDollars);
//     console.log("You have " + "€" + conversionEuro.toFixed(2) + " Euros");
// } else if (userInput.toLowerCase() === 'e' ) {
//     let amountEuros = readline.question('Please input your amount of Euros to be converted\n €');
//     let conversionDollar = eurosToDollarsConverter(amountEuros);
//     console.log("You have " + "$" + conversionDollar.toFixed(2) + " Dollars");
// } else {
//     console.log('Your input is invalid')
// }






//if yes, dollars to euros

//if no, euros to dollars