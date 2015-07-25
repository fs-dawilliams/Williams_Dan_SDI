/*
Dan Williams
Section 00
7-25-15
Random Number Generator
 */

//alert("Testing to see if this works!");

//Create a function that will take in a user prompted max and min value and return a random number between them.

//Create a variable for the min value
var min = prompt("We are going to find a random number between 2 values.\nWhat is the min value?");
//Validate that prompt
while(isNaN(min) || min===""){
    if(isNaN(min)){
        min=prompt("Please only type in numbers.\nWhat is the min value?");
    }else{
        min=prompt("Please do not leave blank.\nWhat is the min value?");
    }
}

//Number cast or parseInt
min=Number(min);

