/*
Dan Williams
Section 00
7-23-15
Arguments & Parameters
 */

//alert("Testing to see if this works!");

//Arguments - goes in the function call - "Specific values"
//Parameters - goes in the function definition and these catch the arguments - "Generic containers"

//Create variables for width and height
var width = 10;
var height =20;

//Create a function to calculate the area of a rectangle

function calcArea(){

    //Create variables
    //width = 10;
    //height =20;

    //Calculate the area
    var area = width*height;

    //Console log the area
    console.log("The area of a rectangle with a width of "+width+" and a height of "+height+" is "+area);

}

//call the function
calcArea();
//Change the variables
width=50;
height=10;

calcArea();