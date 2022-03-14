var message:string = "Hello World";
 console.log(message);


 // Function 

function displaydata(name:string,carname:string)
{
    console.log("My name is ",name,". I am having ",carname);
}
displaydata("Kishan Patel", "Rolls Royce");

// Anonymous Function

var sum = function(a:number,b:number){
    return a+b;
}
console.log(sum(10,2));

//Lambda Expression

var mul = (x:number)=>10*x;
console.log(mul(5));

// TypeScript Numbers

console.log("Max Value of Number is ",Number.MAX_VALUE)

// TypeScript Numbers

var myname = new String("Kishan Patel");
console.log("My name is ",myname,". Length is ",myname.length);

// TypeScript Array

var myarray:string[];
myarray = ["Kishan Patel","Jaymin Prajapati","Yash Patel"];
for(var x1 in myarray)
{
    console.log(myarray[x1]);
}

// TypeScript Tuples

var myTuples = [21,"Kishan Patel", "Rolls Royce"];
for(var x2 in myTuples)
{
    console.log(myTuples[x2]);
}

// TypeScript Unions

var mydata:string|number;
mydata = 21;
console.log("My age is ",mydata);
mydata = "Kishan Patel";
console.log("My Name is ",mydata);

// TypeScript Unions

interface userdata{
    name:string,
    carname:string,
    age:number,
    getName:()=>string
}
let displaydata1:userdata = {
    name:"Kishan Patel",
    carname:"Rolls Royce",
    age:21,
    getName:function()
    {
        return this.name;
    }
}
console.log("This is Interface ",displaydata1)
console.log("This is Interface Function ",displaydata1.getName())

// TypeScript Class

class personaldata
{
    fullname:string;
    carname:string;

    constructor(fullname,carname)
    {
        this.fullname = fullname;
        this.carname = carname;
    }
    display():void
    {
        console.log(
            "My Name is ",this.fullname,
            ".I am having ",this.carname
        );
    }
}
var object = new personaldata("Kishan Patel","Rolls Royce");
object.display();

// TypeScript Generics

function displaymydata<T>(arg:T):T{
    return arg;
}
let output1 = displaymydata<string>("Kishan Patel");
let output2 = displaymydata<number>(21);
let output3 = displaymydata<object>({name:"Kishan Patel",age:21});

console.log("This is String Output :- ",output1);
console.log("This is Number Output :- ",output2);
console.log("This is Object Output :- ",output3);


// TypeScript Objects

let data = {
    name:"Kishan Patel",
    age:21,
    carname:"Rolls Royce"
}
console.log(data)

// TypeScript Enum

enum Days
{
    mon="Monday",
    tue="Tuesday",
    wed="Wednesday",
    thu="Thursday",
    fri="Friday",
    sat="Saturday",
    sun="Sunday"

}

let days:Days
console.log("Value of mon : ",Days.mon)
console.log("Value of tue : ",Days.tue)
console.log("Value of wed : ",Days.wed)
console.log("Value of thu : ",Days.thu)
console.log("Value of fri : ",Days.fri)
console.log("Value of sat : ",Days.sat)
console.log("Value of sun : ",Days.sun)

// TypeScript Enum Functions

function enumfunction(day:Days){
    return day
}
console.log("Function Value of mon : ",enumfunction(Days.mon))
console.log("Function Value of tue : ",enumfunction(Days.tue))

// TypeScript Symbol

let s1=Symbol("d1");

class Demo{
    [s1]()
    {
        return "This is Symbol Example"
    }
}
let obj1 = new Demo()
console.log(obj1[s1]())

let obj2 = new Demo()
console.log(obj2[s1]())


