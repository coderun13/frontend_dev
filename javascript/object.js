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
