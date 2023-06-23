function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(num1, num2, operator){
    if (operator === '+'){
        return add(num1, num2)
    }

    else if (operator === '-'){
        return subtract(num1, num2)
    }

    else if (operator === '*'){
        return multiply(num1, num2)
    }

    else if (operator === '/'){
        return divide(num1, num2)
    }
}

const expression = [0];

let num = "";

let op = "";

let num2 = 0;

let res = 0;

buttons = document.querySelectorAll("button");

const result = document.querySelector("p");

const operators = ['+', '-', '*', '/'];

result.textContent = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        keyPressed = button.id;

        if (operators.includes(keyPressed)){
            if (op === ""){
                num2 = num;
                op = keyPressed;
                num = "";
            }
            else{
                res = operate(parseInt(num2), parseInt(num), op);
                num2 = res;
                op = keyPressed;
                num = "";
                result.textContent = res;
            }
        }
        else if (keyPressed == '='){
            res = operate(parseInt(num2), parseInt(num), op);
            num2 = res;
            result.textContent = res;
        }
        else{
            num += keyPressed;
            result.textContent = num;
        }
    });
});