//runs readline on npm
const readline = require('readline-sync');

//main function
function main() {
  
  console.log('Hello fellow traveler');
  //let
  let userCurrency = readline.question('What is your current currency? Type "USD", "EUR", "JPY", "GBP", "AUD"\n');
  let currency = readline.question('What currency would like to convert to? Type "USD" , "EUR", "JPY", "GBP", "AUD" \n');
  let userValue = readline.question(`Your converting (${userCurrencyUpperCase}) -> (${currencyUpperCase}). What is your current value of your currency (${userCurrencyUpperCase})?\n`);
  let result;
  //const
  const message = "You currently have ";
  const userCurrencyUpperCase = userCurrency.toUpperCase();
  const currencyUpperCase = currency.toUpperCase();
  const resultFixedTwo = result.toFixed(2);

  //if function
  function ifFunc(){
    if (userCurrencyUpperCase === "USD" && currencyUpperCase === "USD") {
        result = userValue * 1;
        console.log(message + resultFixedTwo + " USD")
    } else if (userCurrencyUpperCase === "USD" && currencyUpperCase === "EUR") {
        result = userValue * 0.88;
        console.log(message + resultFixedTwo + " EUR")
    } else if (userCurrencyUpperCase === "USD" && currencyUpperCase === "AUD") {
        result = userValue * 1.37;
        console.log(message + resultFixedTwo + " AUD")
    } else if (userCurrencyUpperCase === "USD" && currencyUpperCase === "GBP") {
        result = userValue * 0.69;
        console.log(message + resultFixedTwo + " GBP")
    } else if (userCurrencyUpperCase === "USD" && currencyUpperCase === "JPY") {
        result = userValue * 108.96;
        console.log(message + resultFixedTwo + " JPY")
    } else if (userCurrencyUpperCase === "EUR" && currencyUpperCase === "EUR") {
        result = userValue * 1;
        console.log(message + resultFixedTwo + " EUD")
    } else if (userCurrencyUpperCase === "EUR" && currencyUpperCase === "USD") {
        result = userValue * 1.13;
        console.log(message + resultFixedTwo + " USD")
    } else if (userCurrencyUpperCase === "EUR" && currencyUpperCase === "AUD") {
        result = userValue * 1.55;
        console.log(message + resultFixedTwo + " AUD")
    } else if (userCurrencyUpperCase === "EUR" && currencyUpperCase === "GBP") {
        result = userValue * 0.70;
        console.log(message + resultFixedTwo + " GBP")
    } else if (userCurrencyUpperCase === "EUR" && currencyUpperCase === "JPY")  {
        result = userValue * 123.47;
        console.log(message + resultFixedTwo + " JPY")
    } else if ((userCurrencyUpperCase === "EUR") && (currencyUpperCase === "EUR"))  {
        result = userValue * 1;
        console.log(message + resultFixedTwo + " EUD")
    } else if ((userCurrencyUpperCase === "EUR") && (currencyUpperCase === "USD"))  {
        result = userValue * 1;
        console.log(message + resultFixedTwo + " USD")
    } else if (userCurrencyUpperCase === "EUR" && currencyUpperCase === "AUD")  {
        result = userValue * 1.55;
        console.log(message + resultFixedTwo + " AUD")
    } else if (userCurrencyUpperCase === "EUR" && currencyUpperCase === "GBP")  {
        result = userValue * 0.79;
        console.log(message + resultFixedTwo + " GBP")
    } else if (userCurrencyUpperCase === "EUR" && currencyUpperCase === "JPY")  {
        result = userValue * 123.47;
        console.log(message + resultFixedTwo + " JPY")
    } else if (userCurrencyUpperCase === "GPB" && currencyUpperCase === "EUR")  {
        result = userValue * 1.27;
        console.log(message + resultFixedTwo + " EUR")
    } else if (userCurrencyUpperCase === "GPB" && currencyUpperCase === "USD")  {
        result = userValue * 1.44;
        console.log(message + resultFixedTwo + " USD")
    } else if (userCurrencyUpperCase === "GPB" && currencyUpperCase === "AUD")  {
        result = userValue * 1.98;
        console.log(message + resultFixedTwo + " AUD")
    } else if (userCurrencyUpperCase === "GPB" && currencyUpperCase === "GBP")  {
        result = userValue * 1;
        console.log(message + resultFixedTwo + " GBP")
    } else if (userCurrencyUpperCase === "GPB" && currencyUpperCase === "JPY")  {
        result = userValue * 157.08;
        console.log(message + resultFixedTwo + " JPY")
    } else if (userCurrencyUpperCase === "AUD" && currencyUpperCase === "EUR")  {
        result = userValue * 0.64;
        console.log(message + resultFixedTwo + " EUR")
    } else if (userCurrencyUpperCase === "AUD" && currencyUpperCase === "USD")  {
        result = userValue * 0.73;
        console.log(message + resultFixedTwo + " USD")
    } else if (userCurrencyUpperCase === "AUD" && currencyUpperCase === "AUD")  {
        result = userValue * 1;
        console.log(message + resultFixedTwo + " AUD")
    } else if (userCurrencyUpperCase === "AUD" && currencyUpperCase === "GBP")  {
        result = userValue * 0.51;
        console.log(message + resultFixedTwo + " GBP")
    } else if (userCurrencyUpperCase === "AUD" && currencyUpperCase === "JPY")  {
        result = userValue * 1;
        console.log(message + resultFixedTwo + " JPY")
    } else if (userCurrencyUpperCase === "JPY" && currencyUpperCase === "EUR")  {
        result = userValue * .0081;
        console.log(message + resultFixedTwo + " EUR")
    } else if (userCurrencyUpperCase === "JPY" && currencyUpperCase === "USD")  {
        result = userValue * 0.0092;
        console.log(message + resultFixedTwo + " USD")
    } else if (userCurrencyUpperCase === "JPY" && currencyUpperCase === "AUD")  {
        result = userValue * 0.013;
        console.log(message + resultFixedTwo + " AUD")
    } else if (userCurrencyUpperCase === "JPY" && currencyUpperCase === "GBP")  {
        result = userValue * 0.0064;
        console.log(message + resultFixedTwo + " GBP")
    } else if (userCurrencyUpperCase === "JPY" && currencyUpperCase === "JPY")  {
        result = userValue * 1;
        console.log(message + resultFixedTwo + " JPY")
    }
  }
  //runs if function
  ifFunc();
}

//runs program
main();

//input
// Hello fellow traveler
// What is your current currency? Type "USD", "EUR", "JPY", "GPB", "AUD"
// usd
// What currency would like to convert to? Type "USD" , "EUR", "JPY", "GDB", "AUD" 
// aud
// Your converting (USD) -> (AUD). What is your current value of your currency (USD)?
// 2003
// You currently have 2744.11 AUD

// Hello fellow traveler
// What is your current currency? Type "USD", "EUR", "JPY", "GPB", "AUD"
// JPY
// What currency would like to convert to? Type "USD" , "EUR", "JPY", "GDB", "AUD" 
// USD
// Your converting (JPY) -> (USD). What is your current value of your currency (JPY)?
// 3329.20
// You currently have 30.63 USD

// Hello fellow traveler
// What is your current currency? Type "USD", "EUR", "JPY", "GBP", "AUD"
// eur
// What currency would like to convert to? Type "USD" , "EUR", "JPY", "GBP", "AUD" 
// gbp
// Your converting (EUR) -> (GBP). What is your current value of your currency (EUR)?
// 2019
// You currently have 1413.30 GBP








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