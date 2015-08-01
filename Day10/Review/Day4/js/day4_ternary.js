
 /*
Dan Williams
Section 00
7-14-15
Ternary
 */

//alert("Testing to see if this works!");

 //See if your gpa is high enough to graduate!

 var gpa = 1.9;

 //if your gpa is over 2.0 then you can graduate
 if(gpa>2){
  console.log("Congrats you can graduate!");
 } else{
  console.log("Sorry your GPA is too low.");
 }

 // Convert this to a ternary
 //(condition to test)? true code : false code;
 (gpa>2)? console.log("GPA is great!"):console.log("GPA is too low.");


// Test kids age verse what book they should read
 //if the kid is under 10 then they can read Green Eggs & Ham, other wise they read the Time Machine.

 var age = 6;
 var book;

 book = (age>10)? "The Time Machine" : "Green Eggs & Ham";
 var book2 = (age<=10)? "Green Eggs & Ham" : "The Time Machine";
 console.log("Your kid should read "+book);
console.log(book2);

