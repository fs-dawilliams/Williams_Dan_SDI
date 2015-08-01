/*
Dan Williams
Section 00
7-21-15
Beer!
 */

//alert("Testing to see if this works!");

//Create a loop that will write out the lyrics for the 99 bottles of beer song.

var numBeers= prompt("How many beers are on your wall?");
//Validate user prompts
while(isNaN(numBeers) || numBeers===""){
    if(isNaN(numBeers)){
        numBeers=prompt("Please only type in numbers.\nHow many beers are on your wall?");
    }else{
        numBeers=prompt("Please do not leave blank.\nHow many beers are on your wall?");
    }
}


//Cast the variable as a number
numBeers=Number(numBeers);

//for(initialization; condition; increment of change){}
for(var i=numBeers; i>0; i--){
    //Verify that the loop works
    //console.log(i);
    if(i===2) {
        console.log(i + " bottles of beer on the wall. " + i + " bottles of beer. You take one down and pass it around. " + (i - 1) + " bottle of beer on the wall.");
    } else if(i===1){
        console.log(i + " bottle of beer on the wall. " + i + " bottle of beer. You take one down and pass it around. No more bottles of beer on the wall.\nThe End!");

    } else{
        console.log(i + " bottles of beer on the wall. " + i + " bottles of beer. You take one down and pass it around. " + (i - 1) + " bottles of beer on the wall.");
    }
}