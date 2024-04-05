//arrow functions (not a stand alone function)(used as callbacks)

const sum = (a,b) => {
    console.log(a+b);
}
console.log(sum(2,5));

const cube = (n) => {
    return n*n*n;
};
console.log(cube(2));

//Implicit return(syntax become small)(already understood that something is returned)

const mul = (a,b) => a*b;
console.log(mul(2,3));

// this keyword(refers to an object that is executing the current piece of code)

const student = {
    name: "snehal",
    age: 19,
    eng: 95,
    maths: 92,
    phy: 98,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.maths + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
console.log(student.getAvg());

//try statement(allows to define a block of code to be tested for errors while it is being executed)
//catch statement(allows to defin a block of code to be executed,if an error occurs in the try block) 

console.log("hello1");
console.log("hello1");
try{
    console.log(a);
} catch(err) {
 console.log("caught an erroe.. a is not defined");
}
console.log("hello2");
console.log("hello2");

//Set Timeout(after 4 secs the message will be printed once)

console.log("hi there!");

setTimeout( () => {
   console.log("Javascript");
}, 4000 );

console.log("welcome to");

//Set Interval(after every 2 sec the message will be printed)

let id = setInterval( () => {
    console.log("hello welcome");
  }, 2000);

  clearInterval(id);//stop setinterval

//this with arrow function

const students = {
    name: "snehal",
    age: 19,
    marks: 95,
    prop: this, //global scope
    getname: function() {
        console.log(this);
       return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    },
};
console.log(students.getname());
console.log(students.getMarks());//can't print because window is the scope


