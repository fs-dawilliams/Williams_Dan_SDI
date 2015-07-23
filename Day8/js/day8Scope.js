/*
Dan Williams
Section 00
7-23-15
Function Scope
 */

//alert("Testing to see if this works!");

//Variable Scope
//Variables that are inside and outside of a function


//Create a variable called width in our Main Code!
//This variable is scoped outisde of the function
//Scoped to the Main Code
var width = 5;
//Console log it
console.log("Starting width is "+width);

//Create a variable called changeMe
//Scoped to the Main Code
var changeMe=7;
console.log("The starting value of changeMe is "+changeMe);


//Create a function that calculates the perimeter of a rectangle
function calcPeri(){

    //Create variables for width and height and perimeter
    //Try not to reuse variables names
    //BUT this is going to be impossible for larger files

    //This variable is scoped to the function calcPeri
    var width = 10;
    console.log("Width inside of function is "+width);
    var height = 20;
    var perimeter = width*2 + height*2;

    //Change the value of changeMe
    changeMe=15;
    console.log("Inside of the function changeMe is "+changeMe);


    //Console.log the perimeter
    console.log("The perimeter is "+perimeter);


}

console.log("Before the function call, width is "+width);
console.log("Before the function call changeMe is "+changeMe);
//function call for calcPeri
calcPeri();

console.log("After the function call, width is "+width);
console.log("After the function call changeMe is "+changeMe);


//This will not work
//Main code can NOT see inside of a function
//console.log("The value of perimeter is "+perimeter);