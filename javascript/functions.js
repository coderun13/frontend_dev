 
 /**
  * Functions == block of code to perform a specific task.
  */


function hello() {          // function definition
    console.log("Hello"); 
    console.log("Snehal"); 
}
  hello();                  // function calling 


// Functions with arguments

function printinfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printinfo("snehal",18);


function sum(a,b){
  return a+b;
}
console.log(sum(sum(1,4),3));
console.log(sum(4,5));
console.log(sum(1,2));


function isAdult(age){
    if(age >= 18){
    console.log( "adult");

    }else{
        console.log( "not adult");
    }
}
isAdult(17);


/** 
 * Scope == determines the accessibility of variables,objects and functions from different parts of the code. 

 * Function scope(specific) == variables defined inside a function are not accessible(visible) from outside the function.

 * Block scope == variables declared inside a {} block cannot be accessed from outside the block.
 
 * Lexical scope == a variable defined outside a function can be accessible inside another function defined after the variable declaration.
 */

//let sum = 54; //global scope

function calsum(a,b){
    let sum = a+b; //function scope
    console.log(sum);
}
calsum(1,2);


for(let i=1; i<=5; i++){
    console.log(i); //block scope
}


function outerfunc() {
    let x=5;
    let y=6;
    function innerfunc() { //function scope
        console.log(x);
    }
     innerfunc();
}


 // function expressions(functions stored as variables)

let hii = function() {
    console.log("hello");
}
hii();


/**
 * Higher Order Functions
 (a function that does one or both)
 * takes one or multiple functions as arguments
 * returns a function
 */

function multipleGreet(func,n){  //higher order function
    for(let i=1; i<=n; i++){
        func();
    }
}
    let greet = function(){
        console.log("hello");
    }
multipleGreet(greet,4);


function oddevenfactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
          return odd;
    } else if (request == "even") {
        return function(n){
            console.log(n%2 == 0);
        }
         return even;
    } else {
        console.log("wrong request");
    }
}
let request = "odd";
let func = oddevenfactory(request);
func(0) //false
func(3) //true


/**
 * methods(actions that can be performed on an object.)
 */

const calculator = {
     num: 55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};
console.log(calculator);
console.log(calculator.add(1,9));
console.log(calculator.mul(1,9));

