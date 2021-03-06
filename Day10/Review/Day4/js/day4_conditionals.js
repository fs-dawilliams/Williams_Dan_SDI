/*
Dan Williams
Section 00
7-14-15
Conditionals
 */

//alert("Testing to see if this works!");

//Basic Conditional IF Statement
// if(condition to test){ Code to run if true. }

// Create a boolean variable
var oldEnough = true;

//if the child is old enough, tell him he can ride the coaster
// else{} - this will run if the IF statement does not run!
//"Catch all"

if(oldEnough){
  //Code inside of the {} will run if oldEnough is a boolean of true
 console.log("You can ride the coaster!!!");
} else {
 // This code will run IF the if block does not run!
 //if oldEnough evaluates to a boolean of false
 console.log("Sorry, you are too young to ride.");
}


//Relational Expressions - Operators

//Test the kids height to see if he can ride the ride

var kidHeight = prompt("How tall are you in inches?");

var sneakerLift = 2;
var minHeight=48;


//if the child is 48 or taller they can ride the ride
if(kidHeight>=minHeight){
 //Code inside of here will run if child is 48 or taller
 console.log("Congrats, you are tall enough to ride the coaster!");
} else if(Number(kidHeight)+sneakerLift >=minHeight){
 //This code will run if the child is tall enough while wearing sneakers
 console.log("You are tall enough to ride the coaster, if you wear your sneakers!\nCheater, cheater!");

} else {
 console.log("Sorry you are too short to ride the roller coaster!");
}


console.log("This text is after the code block.");


