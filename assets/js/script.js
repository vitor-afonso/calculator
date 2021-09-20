/* jshint esversion: 6*/

let firstNum = "";
let secondNum = "";
let operator = "";
let display = document.querySelector("#display");
let operIndex;



function displayNum(x) {
    if (operator === "=") {
        display.innerHTML = "";
        operator = "";
    }
    display.innerHTML += x;

    //adds the class to change font-size
    if (display.innerHTML.length > 12) {

        display.classList.add("longNum");
    }
    
    
}

function oper(x) {

    //does not allow to enter more then once an operator
    if (operator !== "") {
        
        //allows us to continue calculating using the result of the latest operation, making it now the value of the variable firstNum
        if (display.innerHTML !== "" && operator === "="){

            firstNum = document.querySelector("#display").innerHTML;
            operator = x;
            display.innerHTML += x;
            operIndex = display.innerHTML.indexOf(x);
        }
        return;
    }

    firstNum = document.querySelector("#display").innerHTML;

    //does not allow to add an operator to the screen without a number before it
    if (firstNum === "" ) {
        return;
    }

    operator = x;
    display.innerHTML += x;
    operIndex = display.innerHTML.indexOf(x);

}

function result() {

    secondNum = display.innerHTML.slice(operIndex + 1);
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    let total;

    switch (operator) {

        

        case "x":

            total = firstNum * secondNum;
            operator = "=";
            break;

        case "+":

            total = firstNum + secondNum;
            operator = "=";
            break;

        case "-":

            total = firstNum - secondNum;
            operator = "=";
            break;

        case "/":

            total = firstNum / secondNum;
            operator = "=";
            break;

        case "%":

            total = firstNum % secondNum;
            operator = "=";
            break;

        default:

        alert('Something went wrong please reload the page.');
        break;
    }    
    
    display.innerHTML = total;

    if (display.innerHTML.length > 12) {

        display.classList.add("longNum");

    } else {

        if (display.classList.contains("longNum")) {

            display.classList.remove("longNum");
        }
    }
    
}

function delAll() {
    
    firstNum = "";
    secondNum = "";
    operator = "";
    display.innerHTML = "";
    display.classList.remove("longNum");
}

function delLast() {

    let displayLength = display.innerHTML.length;
    
    //resets variable operator in case of deletion of caracter thats an operator
    switch (display.innerHTML.charAt(displayLength - 1)) {

        case "*":

            operator = "";
            break;

        case "+":

            res = firstNum + secondNum;
            operator = "=";
            break;

        case "-":

            operator = "";
            break;

        case "/":

            operator = "";
            break;

        case "%":

            operator = "";
            break;
    }
    
    
    display.innerHTML = display.innerHTML.slice(0, displayLength - 1);

    // removes the class to change font-size
    if (display.innerHTML.length <= 12 && display.classList.contains("longNum")) {
        display.classList.remove("longNum");
    }

}

//fix the class with font-size