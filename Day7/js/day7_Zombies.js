/*
Dan Williams
Section 00
7-21-15
Zombie Attack!
 */

//alert("Testing to see if this works!");

//We have 1 zombie here at Full Sail.
//It can bite 4 people a day and turn them into Zombies by the next day.

//The CDC wants to know how many zombies there will be in 8 days.

//Create the givens
//How many zombies we have
var numZombies = 1;

//Number of bites a zombie can make each day
var numBites = 4;

//What is our timeline?
var days = 8;
/*
for(var i=1; i<=days; i++){
    //How many people get infected every day
    var infectedPeople = numZombies*numBites;

    //How many zombies will we have?
    numZombies+=infectedPeople;

    console.log("On Day #"+i+" there will be "+numZombies+" zombies!");
}
*/