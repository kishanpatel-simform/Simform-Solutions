var message = "Hello World";
console.log(message);
// Function 
function displaydata(name, carname) {
    console.log("My name is ", name, ". I am having ", carname);
}
displaydata("Kishan Patel", "Rolls Royce");
// Anonymous Function
var sum = function (a, b) {
    return a + b;
};
console.log(sum(10, 2));
//Lambda Expression
var mul = function (x) { return 10 * x; };
console.log(mul(5));
// TypeScript Numbers
console.log("Max Value of Number is ", Number.MAX_VALUE);
// TypeScript Numbers
var myname = new String("Kishan Patel");
console.log("My name is ", myname, ". Length is ", myname.length);
// TypeScript Array
var myarray;
myarray = ["Kishan Patel", "Jaymin Prajapati", "Yash Patel"];
for (var x1 in myarray) {
    console.log(myarray[x1]);
}
// TypeScript Tuples
var myTuples = [21, "Kishan Patel", "Rolls Royce"];
for (var x2 in myTuples) {
    console.log(myTuples[x2]);
}
// TypeScript Unions
var mydata;
mydata = 21;
console.log("My age is ", mydata);
mydata = "Kishan Patel";
console.log("My Name is ", mydata);
var displaydata1 = {
    name: "Kishan Patel",
    carname: "Rolls Royce",
    age: 21,
    getName: function () {
        return this.name;
    }
};
console.log("This is Interface ", displaydata1);
console.log("This is Interface Function ", displaydata1.getName());
// TypeScript Class
var personaldata = /** @class */ (function () {
    function personaldata(fullname, carname) {
        this.fullname = fullname;
        this.carname = carname;
    }
    personaldata.prototype.display = function () {
        console.log("My Name is ", this.fullname, ".I am having ", this.carname);
    };
    return personaldata;
}());
var object = new personaldata("Kishan Patel", "Rolls Royce");
object.display();
// TypeScript Generics
function displaymydata(arg) {
    return arg;
}
var output1 = displaymydata("Kishan Patel");
var output2 = displaymydata(21);
var output3 = displaymydata({ name: "Kishan Patel", age: 21 });
console.log("This is String Output :- ", output1);
console.log("This is Number Output :- ", output2);
console.log("This is Object Output :- ", output3);
// TypeScript Objects
var data = {
    name: "Kishan Patel",
    age: 21,
    carname: "Rolls Royce"
};
console.log(data);
// TypeScript Enum
var Days;
(function (Days) {
    Days["mon"] = "Monday";
    Days["tue"] = "Tuesday";
    Days["wed"] = "Wednesday";
    Days["thu"] = "Thursday";
    Days["fri"] = "Friday";
    Days["sat"] = "Saturday";
    Days["sun"] = "Sunday";
})(Days || (Days = {}));
var days;
console.log("Value of mon : ", Days.mon);
console.log("Value of tue : ", Days.tue);
console.log("Value of wed : ", Days.wed);
console.log("Value of thu : ", Days.thu);
console.log("Value of fri : ", Days.fri);
console.log("Value of sat : ", Days.sat);
console.log("Value of sun : ", Days.sun);
// TypeScript Enum Functions
function enumfunction(day) {
    return day;
}
console.log("Function Value of mon : ", enumfunction(Days.mon));
console.log("Function Value of tue : ", enumfunction(Days.tue));
// TypeScript Symbol
var s1 = Symbol("d1");
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype[s1] = function () {
        return "This is Symbol Example";
    };
    return Demo;
}());
var obj1 = new Demo();
console.log(obj1[s1]());
