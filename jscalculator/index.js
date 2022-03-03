var input = "";
var operation = "";
var input1 = "";

function reset() {
    input = "";
    operation = "";
    input1 = "";
    document.getElementById('val1').value = '';
    document.getElementById('inputdata').innerHTML = '';

}

function passnumber(no) {
    // alert(no);
    input = document.getElementById('val1').value;
    document.getElementById('val1').value = input + no;
}

function passoperand(operand) {

    input1 = document.getElementById('val1').value;
    document.getElementById('inputdata').innerHTML = input1 + operand;
    operation = operand;
    document.getElementById('val1').value = '';

    // alert(input);
    // alert(operand);


}

function get10raisex() {
    input = document.getElementById('val1').value;
    input = Number(input);
    document.getElementById('val1').value = 10 ** input;
}


function getanswer() {
    input = document.getElementById('val1').value;

    //alert(input1);
    //alert(operation);
    //alert(input);
    input = Number(input);
    input1 = Number(input1);
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
}