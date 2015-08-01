/*
Dan Williams
Section 00
7-11-15
Arrays
 */

//alert("Blah blah blah");

//Create a basic array
//Picking Oranges
var orangeBins = [30,500,10002];

//How many oranges did we pick?
var totalOranges = orangeBins[0] + orangeBins[1]+ orangeBins[2];
console.log(totalOranges+" oranges were picked in 3 days.");

//Average number of oranges picked
var averageOranges = totalOranges/orangeBins.length;

//Length property of arrays
console.log(orangeBins.length);

console.log("The average number of oranges picked is "+averageOranges);


//Create an array of Avengers
var avengerNames = ["Iron-man", "Captain America","Hawkeye", "Hulk"];

//Print out whole array
console.log(avengerNames);

//Access a specific item in the array
console.log(avengerNames[1]);

//Use a variable as an index number
var num = 2;
console.log(avengerNames[num]);

//Set a specific item
avengerNames[3]= "Thor";
console.log(avengerNames);

//Add a new item in our array
avengerNames[4] = "Falcon";

console.log(avengerNames);

console.log(avengerNames.length);
///Add a new item
avengerNames[avengerNames.length] = "Black Widow";
console.log(avengerNames);

//Create new array for fruits
var fruitArray = ["banana", "pear","peach","strawberry"];
console.log(fruitArray);

//push - method or a function of arrays
// Adds it to the end of the array
fruitArray.push("pineapple");
console.log(fruitArray);
console.log(fruitArray[4]);

fruitArray.push("date");
console.log(fruitArray);

//pop method - removes the last item in the array AND returns it
var caught = fruitArray.pop();
console.log(fruitArray);
console.log(caught);

//splice - used for adding and removing items in an array
//splice(position, # of items to remove, items to put in )
fruitArray.splice(0,0,"lemon","cherry");
console.log(fruitArray);