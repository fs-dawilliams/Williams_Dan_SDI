/*
Dan Williams
Section 00
7-18-15
For Loops
 */

//alert("Testing to see if this works!");

//Basic for loop
//for(intilize counter; condition; increment of change){}

for(var i=10; i>0; i--){
    console.log("The value of i is "+i);
}


//Breaks - if this command is run, your loop will stop
for(var j=-10; j<5; j--){
    console.log("The value of j is "+j);

    //If the value of j is 3 stop my loop
    if(j<-10000){
        break;
    }
}

