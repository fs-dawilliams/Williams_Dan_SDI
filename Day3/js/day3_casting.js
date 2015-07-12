/*
Dan Williams
Section 00
7-11-15
Casting Variables
 */

//alert("Testing to see if this works!");

//Casting variables means treating one variable like another
var stringVar = "6";
var results = 7 + stringVar;
console.log(results);

//Number() - treats what is inside of () like a number, if possible!
var castingResults = 7 + Number(stringVar);
console.log(castingResults);

//Cast Numbers as Strings
//String()
var areaCode = 407;
var prefix = 555;
var lineNumber = 1234;

var phoneNumber = String(areaCode)+String(prefix)+String(lineNumber);
var phoneNumber2 = "("+areaCode+")"+prefix+"-"+lineNumber;
console.log(phoneNumber);
console.log(phoneNumber2);


//all prompt() returns text strings!!!
var videoGamesCurrent =Number(prompt("How many video games do you currently own?"));

var gamesBought = prompt("How many games did you buy today?");

var totalGames = Number(videoGamesCurrent) + Number(gamesBought) ;
console.log(totalGames);

//Parsing Integers
// looks through text string and returns the first integer
//The first character in the text string MUST be the number
//Spaces arent counted
//If it can not convert it, it returns NaN - Not A  Number

var a = parseInt("40 years old");
console.log(a);

var b = parseInt("He is 40 years old.");
console.log(b);

var c = Number("40 years");
console.log(c);

// parseFloat allows for decimal places INT does not!
var d = parseFloat("40.67 years old");
console.log(d);