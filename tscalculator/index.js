var input = "";
var operation = "";
var input1 = "";

window.onload = (event) => {
    reset();
};

function reset() {
    input = "";
    operation = "";
    input1 = "";
    document.getElementById('val1').value = '';
    document.getElementById('inputdata').innerHTML = '';
}

function passnumber(no) {
    input = document.getElementById('val1').value;
    document.getElementById('val1').value = input + no;
}

function passoperand(operand) {

    input1 = document.getElementById('val1').value;
    try {

        if (input1 == '') throw "Enter Input Values";
        document.getElementById('inputdata').innerHTML = input1 + operand;
        operation = operand;
        document.getElementById('val1').value = '';
    } catch (err) {
        alert(err);
    }

}

function insertpi() {
    document.getElementById('val1').value = 22 / 7;
}

function erase() {
    input = document.getElementById('val1').value;
    input = input.substring(0, input.length - 1);
    document.getElementById('val1').value = input;

}

function singleinputoperation(operation) {
    try {
        input = document.getElementById('val1').value;
        if (input == '') throw "Enter Input Values";

        switch (operation) {
            case "10raisex":
                input = Number(input);
                document.getElementById('val1').value = 10 ** input;
                document.getElementById('inputdata').innerHTML = "10<sup>" + input + "</sup>";
                break;

            case "deg":
                input = Number(input);
                document.getElementById('val1').value = input * 22 / 7 / 180;
                document.getElementById('inputdata').innerHTML = input + " * &pi; / 180";
                break;

            case "xraise2":
                input = Number(input);
                document.getElementById('val1').value = input ** 2;
                document.getElementById('inputdata').innerHTML = input + "<sup>2</sup>";
                break;

            case "onebyx":
                input = Number(input);
                document.getElementById('val1').value = 1 / input;
                document.getElementById('inputdata').innerHTML = "1 / " + input;
                break;

            case "tworootx":
                input = Number(input);
                document.getElementById('val1').value = Math.sqrt(input);
                document.getElementById('inputdata').innerHTML = "2&#8730;" + input;
                break;

            case "acos":
                input = Number(input);
                document.getElementById('val1').value = Math.acos(input);
                document.getElementById('inputdata').innerHTML = "cos(" + input + ")";
                break;

            case "acosh":
                input = Number(input);
                document.getElementById('val1').value = Math.acosh(input);
                document.getElementById('inputdata').innerHTML = "acosh(" + input + ")";
                break;

            case "asin":
                input = Number(input);
                document.getElementById('val1').value = Math.asin(input);
                document.getElementById('inputdata').innerHTML = "asin(" + input + ")";
                break;

            case "asinh":
                input = Number(input);
                document.getElementById('val1').value = Math.asinh(input);
                document.getElementById('inputdata').innerHTML = "asinh(" + input + ")";
                break;

            case "atan":
                input = Number(input);
                document.getElementById('val1').value = Math.atan(input);
                document.getElementById('inputdata').innerHTML = "atan(" + input + ")";
                break;

            case "atanh":
                input = Number(input);
                document.getElementById('val1').value = Math.atanh(input);
                document.getElementById('inputdata').innerHTML = "atanh(" + input + ")";
                break;

            case "cos":
                input = Number(input);
                document.getElementById('val1').value = Math.cos(input);
                document.getElementById('inputdata').innerHTML = "cos(" + input + ")";
                break;

            case "cosh":
                input = Number(input);
                document.getElementById('val1').value = Math.cosh(input);
                document.getElementById('inputdata').innerHTML = "cosh(" + input + ")";
                break;

            case "sin":
                input = Number(input);
                document.getElementById('val1').value = Math.sin(input);
                document.getElementById('inputdata').innerHTML = "sin(" + input + ")";
                break;

            case "sinh":
                input = Number(input);
                document.getElementById('val1').value = Math.sinh(input);
                document.getElementById('inputdata').innerHTML = "sinh(" + input + ")";
                break;

            case "tan":
                input = Number(input);
                document.getElementById('val1').value = Math.tan(input);
                document.getElementById('inputdata').innerHTML = "tan(" + input + ")";
                break;

            case "tanh":
                input = Number(input);
                document.getElementById('val1').value = Math.tanh(input);
                document.getElementById('inputdata').innerHTML = "tanh(" + input + ")";
                break;

            case "factorial":
                input = Number(input);
                document.getElementById('val1').value = Factorial(input);
                document.getElementById('inputdata').innerHTML = "n!(" + input + ")";
                break;
        }
    } catch (err) {
        alert(err);
    }

}

function Factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * Factorial(n - 1);
    }
}

function getanswer() {
    try {
        input = document.getElementById('val1').value;
        input = Number(input);
        input1 = Number(input1);
        if (input1 == '') throw "Enter Input Values";
        if (input == '') throw "Enter Input Values";
        document.getElementById('inputdata').innerHTML = input1 + operation + input;
        switch (operation) {
            case "+":
                document.getElementById('val1').value = input1 + input;
                break;
            case "-":
                document.getElementById('val1').value = input1 - input;
                break;
            case "*":
                document.getElementById('val1').value = input1 * input;
                break;
            case "/":
                document.getElementById('val1').value = input1 / input;
                break;
            case "mod":
                document.getElementById('val1').value = input1 % input;
                break;
            case "exp":
                document.getElementById('val1').value = input1 ** input;
                break;
            case "x^y":
                document.getElementById('val1').value = input1 ** input;
                break;
            case "log":
                document.getElementById('val1').value = Math.log(input) / Math.log(input1);
                break;
        }

    } catch (err) {
        alert(err);
    }


}