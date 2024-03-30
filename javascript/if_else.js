/**
  if-else statement
  */

console.log("message before if statement");

let age = 27;

if (age >= 18){
  console.log("You can vote");
}

if (age <= 18){
    console.log("You cannot vote");
}

console.log("message after if statement");

if (age >= 20){
    console.log("You are in your 20s");
}


/**
 * else-if statement
 */

let marks = 75;

if(marks >= 80){
    console.log("A+");
    
} else if (marks >= 60) {
    console.log("A");

} else if (marks >= 33) {
    console.log("B");

} else if (marks < 33) {
    console.log("F");    
}


/**
 * Nested if-else statement
 */

let percentage = 75;

if(percentage >= 80) {
    console.log("0");
    if(percentage >= 80) {
        console.log("grade: O");    
} else {
    console.log("A");
}

} else {
    console.log("Better Luck Next Time!");
}


/**
 * Traffic light system practice
 */

let color = "yellow";

if(color === "red"){
    console.log("Stop!");
}

if(color === "yellow"){
    console.log("Slow down");
}

if(color === "green"){
    console.log("Go");
}


/**
 * First name printing
 */
let firstName = "snehal";
if(firstName == "snehal"){
    console.log(`Welcome ${firstName}`)
}






