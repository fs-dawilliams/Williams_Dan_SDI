
 /*
Dan Williams
Section 00
7-16-15
Conditionals For Steak
 */

//alert("Testing to see if this works!");

//Test a steak temperature to see if it is done

/*
 Extra-rare or Blue (bleu)	115–120 °F
 Rare (saignant)	120–130 °F
 Medium rare 130–140 °F
 Medium 140–150 °F
 Medium well 150–160 °F
 Well done 160 °F+	160
 */

 //Create a variable for steak Temp
 var steakTemp =prompt("What is the temperature in F of your steak?");
/*
 //Validate to test for blank input
 if(steakTemp===""){
  //Code will run if the user leaves the prompt blank
  //Reprompt the user
  steakTemp=prompt("Please do not leave blank.\nWhat is the temperature of your steak?");
 }


 //Validate the user prompt
console.log(isNaN(7));
console.log(isNaN("car"));

 if(isNaN(steakTemp)){
  //Code will run if steakTemp is not a number
  //Re-prompt using the same variable for the user
  steakTemp=prompt("Please only type in numbers.\nWhat is the temperature in F of your steak?");
 }

*/
 // Combine both validation quetions
 if(isNaN(steakTemp) || steakTemp===""){
  //reprompt the user
  if(isNaN(steakTemp)){
   steakTemp=prompt("Please only use numbers.\nEnter steak temp in F:");
  } else{
   steakTemp=prompt("Please do not leave blank.\nEnter steak temp in F:");
  }

 }



 if(steakTemp<=115){
  console.log("This steak is raw, do not eat it!");
 } else if(steakTemp<=120){
  console.log("This steak is Extra-Rare!");
 } else if(steakTemp<=130){
  console.log("This steak is Rare!");
 }else if(steakTemp<=140){
  console.log("This steak is Medium Rare!");
 }else if(steakTemp<=150){
  console.log("This steak is Medium.");
 } else if(steakTemp<=160){
  console.log("This steak is Medium Well.");
 }else {
  console.log("This steak is Well Done.");
 }

