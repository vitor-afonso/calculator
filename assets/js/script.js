/* jshint esversion: 6*/

let firstNum = "";
let secondNum = "";
let operator = "";
let display = document.querySelector("#display");
let operIndex;

function displayNum(x) {
    //to add the class and change font-size
    if (display.innerHTML.length > 3) {

        //console.log(display.innerHTML.length);
        display.classList.add("longNum");
    }
    if (display.innerHTML.length <= 13 && display.classList.contains("longNum")) {
        display.classList.remove("longNum");
    }
    display.innerHTML += x;
    
}

function oper(x) {

    //does not allow to enter more then once an operator
    if (operator !== "") {
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
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    let res = ""; 

    switch (operator) {

        

        case "*":

            console.log(operator);
            res = firstNum * secondNum;
            break;

        case "+":

            res = firstNum + secondNum;
            break;

        case "-":

            res = firstNum - secondNum;
            break;

        case "/":

            res = firstNum / secondNum;
            break;

        case "%":

            res = firstNum % secondNum;
            break;

    }

    display.innerHTML = res;
    operator = "";
}

//add class with font-size