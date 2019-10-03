//Currency Converter

function main() {
    //dollars To Euros Converter
    function dollarsToEurosConverter(amount) {
        return amount * 0.91;
    }

    //euros to dollars converter
    function eurosToDollarsConverter(amount) {
        return amount * 1.10;
    }


    console.log('Hello fellow traveler');
    let userInput = prompt('Press D for Dollars to Euros, Press E for Euros to Dollars');

    if (userInput.toUpperCase() === 'd') {
    //if yes
        let amountDollars = prompt('OK, please input your amount of dollars to be converted');
        console.log("You have " + dollarsToEurosConverter(amountDollars) + "Euros");
    } else if (userInput.toUpperCase() === 'e' ) {
        let amountEuros = prompt('Ok, please input your amout of Euros to be converted');
        console.log(eurosToDollarsConverter(amountEuros));
    } else {
        console.log('Your input is invalid')
    }
}

let proc





//if yes, dollars to euros

//if no, euros to dollars