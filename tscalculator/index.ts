var input:number;
var operation = "";
var input1:number;

window.addEventListener("load",reset);
function reset() {
    input = 0;
    operation = "";
    input1 = 0;
    let greeter:HTMLInputElement = document.getElementById("val1") as HTMLInputElement;
    greeter.value = "";
    let greeter2:HTMLParagraphElement = document.getElementById("inputdata") as HTMLParagraphElement;
    greeter2.innerHTML = "";    

}
function passnumber(no:number) {

    input = +(<HTMLInputElement>document.getElementById('val1')).value;
    (<HTMLInputElement>document.getElementById('val1')).value = (input.toString() + no);
}
function passoperand(operand) {

    input1 = +(<HTMLInputElement>document.getElementById('val1')).value;
    try {

        if (input1.toString() == " ") throw "Enter Input Values";

        let greeter:HTMLInputElement = document.getElementById("inputdata") as HTMLInputElement;
        greeter.innerHTML = input1 + operand;
        operation = operand;
        (<HTMLInputElement>document.getElementById('val1')).value= '';
    } catch (err) {
        alert(err);
    }

}
function insertpi() {
   
    (<HTMLInputElement>document.getElementById('val1')).value = (22/7).toString();
   
}
function erase() {
    /*input = +(<HTMLInputElement>document.getElementById('val1')).value
    input = input.substring(0, input.length - 1);
    (<HTMLInputElement>document.getElementById('val1')).value = input;
*/
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
        input =  +(<HTMLInputElement>document.getElementById('val1')).value;
        input = (input);
        input1 = (input1);

        let greeter3:HTMLParagraphElement = document.getElementById("inputdata") as HTMLParagraphElement;
        greeter3.innerHTML = input1 + operation + input;
    
        if (input1.toString() == '') throw "Enter Input Values";
        if (input.toString() == '') throw "Enter Input Values";
      
        switch (operation) {
            case "+":
                (<HTMLInputElement>document.getElementById('val1')).value = (input1 + input).toString();
                break;
            case "-":
                (<HTMLInputElement>document.getElementById('val1')).value = (input1 - input).toString();
                break;
            case "*":
                (<HTMLInputElement>document.getElementById('val1')).value = (input1 * input).toString();
                break;
            case "/":
                (<HTMLInputElement>document.getElementById('val1')).value = (input1 / input).toString();
                break;
            case "mod":
                (<HTMLInputElement>document.getElementById('val1')).value = (input1 % input).toString();
                break;
            case "exp":
                (<HTMLInputElement>document.getElementById('val1')).value = (input1 ** input).toString();
                break;
            case "x^y":
                (<HTMLInputElement>document.getElementById('val1')).value = (input1 ** input).toString();
                break;
            case "log":
                (<HTMLInputElement>document.getElementById('val1')).value = (Math.log(input) / Math.log(input1)).toString();
                break;
        }
    } catch (err) {
        alert(err);
    }
}

/*

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

*/