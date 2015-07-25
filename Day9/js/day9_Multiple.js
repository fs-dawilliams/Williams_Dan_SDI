/*
Dan Williams
Section 00
7-25-15
Multiple Functions
 */

//alert("Testing to see if this works!");

//Create variables for height and width
var height=8;
var width = 6;

//create another variable for a base of a triangle
var base = 5;


//Function call to area
var resultsArea = calcArea(height,width);
console.log(resultsArea);

//Create a function to calc the perimeter or a rectangle
var calcPeri = function(h,w){
    var periTotal = 2*h + 2*w;
    return periTotal;
};

//Funtional call must go under function definintion for Anons
var resultsPeri = calcPeri(height,width);

console.log(resultsPeri);

//Create a function to calc the area of a rectangle
function calcArea(h,w){
    var area = w*h;
    return area;
}

//Ask the user if they would like to calc the area of a triangle.
var userPrompt= prompt("Would you like to calc the area of a triangle?\nPlease answer yes or no");
//validate
while(userPrompt.toLowerCase() !="yes" && userPrompt.toLowerCase() !="no"){
    userPrompt=prompt("Please only answer yes or no.\n Would you like to calc the area of a triangle?");
}

//Conditional to see if we should run the anon function
if(userPrompt.toLowerCase()==="yes"){
    //Create a anon function to calc the area of triangle
    var triArea = function(b,h){
        var area = .5*b*h;
        return area;
    };


}

if(userPrompt.toLowerCase()==="yes"){
    //Function call to triangle area
    var triAreaTotal = triArea(base,height);
    console.log(triAreaTotal); 
}




//Create a procedure that will console log the rect peri and area
function printOut(p,a){
    console.log("The perimeter is "+p);
    console.log("The area of the rectangle is "+a);

}

//Function call for out print outs
printOut(resultsPeri,resultsArea);