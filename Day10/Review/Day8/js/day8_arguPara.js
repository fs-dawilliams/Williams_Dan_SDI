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

function calcArea(w,h){

    //Create variables
    //width = 10;
    //height =20;

    //Calculate the area
    var area = w*h;

    //Console log the area
    console.log("The area of a rectangle with a width of "+w+" and a height of "+h+" is "+area);

}

//call the function
calcArea(width,height);

//Find the area width = 6 height = 7
calcArea(6,7);

//Ask the user
var userWidth = prompt("Let's calculate the area of rectangle.\nPlease enter a width:");

//Validate & number cast the input
var userHeight = prompt("Please enter a height:");

//How would i get the area?
calcArea(userWidth,userHeight);


//Create a function that will calculate dog years

function dogYears(humanAge){
    //Input a human year and spit out a dog year
    //humanAge*7 = dog age
    var dogAge = humanAge*7;

    //Print out the results
    console.log("A dog who is "+humanAge+" is "+dogAge+" in dog years.");

}

//Calculate how old a 4 year old dog is in dog years
dogYears(4);

//calculate a 7 year old dog
dogYears(7);

//Prompt the user for their dog age
var yourDogAge =prompt("Let's figure out how old your dog is in dog years.\nPlease enter your dog's human age.");
//Validate and cast if needed

dogYears(yourDogAge);
