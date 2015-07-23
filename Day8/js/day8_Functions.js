/*
Dan Williams
Section 00
7-23-15
Functions
 */

calcArea();

//alert("Testing to see if this works!");

//Basic Function Structure
// function functionName(){//Code to run goes here}

printHello();

//Create a function that will console log something
function printHello(){
    //This code will run when the function runs
    console.log("This function is working!");

}

//Create a function call that will start our printHello function
//Go Button to the factory
printHello();
printMore();
printHello();


//Create a function that console logs a different string
function printMore(){
    console.log("This is different text!");
}

//Function call printMore
printMore();


//Create a function that calculates the area of a rectangle
function calcArea(){
    //Create variables for width, height and area
    var width= 20;
    var height = 30;
    var area = width*height;

    //console log the answer
    console.log("The area of the rectangle is "+area);

}

//Create the function call
calcArea();