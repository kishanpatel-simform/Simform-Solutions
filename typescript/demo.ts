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

console.log(output1);
console.log(output2);


// TypeScript Objects

let data = {
    name:"Kishan Patel",
    age:21,
    carname:"Rolls Royce"
}
console.log(data)
