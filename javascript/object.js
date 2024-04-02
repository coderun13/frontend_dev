/**
 * js Objects Literals = used to store keyed collection & complex entities.
 * property => (key,values) pair
 * objects are a collection of properties
 */


// creating objects(object doesn't have any specific order)

let student = {
    name: "snehal",
    age: 18,
    marks:95,
    city:"Delhi"
};

console.log(student);


// creating a twitter post

const post = {
    username: "snehal singh",
    content: "this is my #firstpost",
    likes: 100,
    reposts: 5, 
};
console.log(post);


//get values

console.log(post.username);
console.log(post.likes);


//add_update values 

student.city = "mumbai";  //value update from delhi to mumbai
student.gender = "female"; // new value added
console.log(student);


//nested objects
//object of objects
//storing information of multiple students

const classInfo = {
    snehal : {
        grade: "A+",
        city: "delhi"
    },
    aryan : {
        grade: "A",
        city: "bokaro"
    },
};
console.log(classInfo.snehal);
console.log(classInfo.aryan.grade);


//Array of Objects

const classinfo = [
    {
        name: "snehal", 
        grade: "A+",
        city: "delhi"
    },
    {
        name: "aryan",
        grade: "A",
        city: "bokaro"
    },
];
console.log(classinfo);
console.log(classinfo[1]);
console.log(classinfo[1].name);


//math object

console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-12.5));
console.log(Math.pow(2,4)); //a**b
console.log(Math.floor(5.6)); //round off(nearest smallest number)
console.log(Math.ceil(5.6)); //round off(nearest largest number)
console.log(Math.random()); // any number range from 0 to 1(1 excluded)


//random integers
//(from 1 to 10)

let num = Math.random(); // step 1
num = num*10; // step 2
num = Math.floor(num); // step 3
num = num + 1; // step 4
console.log(num); //print
