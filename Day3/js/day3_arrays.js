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


