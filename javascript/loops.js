
// loops- used to iterate a piece of code

/**
 * for loop
 */

// for(initialisation;condition;updation){
// do something
//}

console.log("nos. from 1-5");
for(let i=1; i<=5; i++){
console.log(i);
}

console.log("nos. from 5-1");
for(let i=5; i>=1; i--){
    console.log(i);
    }

console.log("odd nos. from 1-15");    
    for(let i=1; i<=15; i+=2){
        console.log(i);
        }    


 console.log("even nos. from 2-10");    
    for(let i=2; i<=10; i+=2){
        console.log(i);
        }   

 console.log("table of 5");    
    for(let i=5; i<=50; i+=5){
        console.log(i);
        }  
 
/**
 * Nested for loop
 */

for(let i=1; i<=2; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}


/**
 * While loop
 */

//while(condition){
//do something
//}

console.log("num from 1-5");
let i = 1;
while(i<=5){
    console.log(i);
 i++;
}

//favourite movie guessing game

/*const favMovie = "avatar";

let guess = prompt("guess my favorite movie");

while(guess != favMovie && (guess != "quit")){
    console.log("wrong guess");
    guess = prompt("guess my favorite movie");
}

if(guess == favMovie) {
    console.lof("congrats!!");

} else {
    console.log("you quit")
 }*/

// break keyword

let j=1;

while(j<=5) {
    if(j == 3) {
        break;
    }
    console.log(j);
    j++;
}
console.log("we used break at 3");

//loops with arrays

let fruits = ["mango","apple","orange","litchi","banana"]
fruits.push("pineapple");   
for(let i=0; i<fruits.length; i++){
    console.log(i,fruits[i]);
}

//nested loops with nested arrays

let heroes = [
    ["ironman","spiderman","thor"],
    ["superman","wonder women","flash"]
]

for(let i=0; i<heroes.length; i++){
    console.log(`list #${i}`);
    for(let j=0; j<heroes[i].length; j++){
            console.log(heroes[i][j]);
        }
    }



    