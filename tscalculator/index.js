var input;
var operation = "";
var input1;
window.addEventListener("load", reset);
function reset() {
    input = 0;
    operation = "";
    input1 = 0;
    var greeter = document.getElementById("val1");
    greeter.value = "";
    var greeter2 = document.getElementById("inputdata");
    greeter2.innerHTML = "";
}
function passnumber(no) {
    input = +document.getElementById('val1').value;
    document.getElementById('val1').value = (input.toString() + no);
}
function passoperand(operand) {
    input1 = +document.getElementById('val1').value;
    try {
        if (input1.toString() == " ")
            throw "Enter Input Values";
        var greeter = document.getElementById("inputdata");
        greeter.innerHTML = input1 + operand;
        operation = operand;
        document.getElementById('val1').value = '';
    }
    catch (err) {
        alert(err);
    }
}
function insertpi() {
    displayanswer((22 / 7).toString());
}
function erase() {
    var input3 = document.getElementById('val1').value.toString();
    document.getElementById('val1').value = input3.substring(0, input3.length - 1);
}
function Factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * Factorial(n - 1);
    }
}
function getanswer() {
    try {
        input = getinput();
        input = (input);
        input1 = (input1);
        var greeter3 = document.getElementById("inputdata");
        greeter3.innerHTML = input1 + operation + input;
        if (input1.toString() == '')
            throw "Enter Input Values";
        if (input.toString() == '')
            throw "Enter Input Values";
        switch (operation) {
            case "+":
                displayanswer((input1 + input).toString());
                break;
            case "-":
                displayanswer((input1 - input).toString());
                break;
            case "*":
                displayanswer((input1 * input).toString());
                break;
            case "/":
                displayanswer((input1 / input).toString());
                break;
            case "mod":
                displayanswer((input1 % input).toString());
                break;
            case "exp":
                displayanswer((input1 + input).toString());
                break;
            case "x^y":
                displayanswer((Math.pow(input1, input)).toString());
                break;
            case "log":
                displayanswer((Math.log(input) / Math.log(input1)).toString());
                break;
        }
    }
    catch (err) {
        alert(err);
    }
}
function getinput() {
    return +document.getElementById('val1').value;
}
function displayhistory(data) {
    document.getElementById('inputdata').innerHTML = data;
}
function displayanswer(answer) {
    document.getElementById('val1').value = answer;
}
function singleinputoperation(operation) {
    try {
        input = +document.getElementById('val1').value;
        if (input.toString() == '')
            throw "Enter Input Values";
        switch (operation) {
            case "10raisex":
                input = getinput();
                displayanswer((Math.pow(10, input)).toString());
                displayhistory("10<sup>" + input + "</sup>");
                break;
            case "deg":
                input = getinput();
                displayanswer((input * 22 / 7 / 180).toString());
                displayhistory(input + " * &pi; / 180");
                break;
            case "xraise2":
                input = getinput();
                displayanswer((Math.pow(input, 2)).toString());
                displayhistory(input + "<sup>2</sup>");
                break;
            case "onebyx":
                input = getinput();
                displayanswer((1 / input).toString());
                displayhistory("1 / " + input);
                break;
            case "tworootx":
                input = getinput();
                displayanswer((Math.sqrt(input)).toString());
                displayhistory("2&#8730;" + input);
                break;
            case "acos":
                input = getinput();
                displayanswer((Math.acos(input)).toString());
                displayhistory("cos(" + input + ")");
                break;
            case "acosh":
                input = getinput();
                displayanswer((Math.acosh(input)).toString());
                displayhistory("acosh(" + input + ")");
                break;
            case "asin":
                input = getinput();
                displayanswer((Math.asin(input)).toString());
                displayhistory("asin(" + input + ")");
                break;
            case "asinh":
                input = getinput();
                displayanswer((Math.asinh(input)).toString());
                displayhistory("asinh(" + input + ")");
                break;
            case "atan":
                input = getinput();
                displayanswer((Math.atan(input)).toString());
                displayhistory("atan(" + input + ")");
                break;
            case "atanh":
                input = getinput();
                displayanswer((Math.atanh(input)).toString());
                displayhistory("atanh(" + input + ")");
                break;
            case "cos":
                input = getinput();
                displayanswer((Math.cos(input)).toString());
                displayhistory("cos(" + input + ")");
                break;
            case "cosh":
                input = getinput();
                displayanswer((Math.cosh(input)).toString());
                displayhistory("cosh(" + input + ")");
                break;
            case "sin":
                input = getinput();
                displayanswer((Math.sin(input)).toString());
                displayhistory("sin(" + input + ")");
                break;
            case "sinh":
                input = getinput();
                displayanswer((Math.sinh(input)).toString());
                displayhistory("sinh(" + input + ")");
                break;
            case "tan":
                input = getinput();
                displayanswer((Math.tan(input)).toString());
                displayhistory("tan(" + input + ")");
                break;
            case "tanh":
                input = getinput();
                displayanswer((Math.tanh(input)).toString());
                displayhistory("tanh(" + input + ")");
                break;
            case "factorial":
                input = getinput();
                displayanswer(Factorial(input).toString());
                displayhistory("n!(" + input + ")");
                break;
        }
    }
    catch (err) {
        alert(err);
    }
}
