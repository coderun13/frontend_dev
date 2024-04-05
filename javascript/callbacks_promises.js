//Call Stack

function hello() {
    console.log("inside hello func");
    console.log("hello");
}
function demo(){
    console.log("calling hello func");
    hello();
}
demo();
console.log("done");

function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}
three();

//js is single threaded 

//callbacks nesting => callback hell(use promises to avoid hell)

//promises(object)(resolve and reject)

function savetodb(data){
    return new Promise((resolve,reject) =>{
        let internetSpeed = Math.floor(Math.random() * 10)+1;
        if(internetSpeed > 4){
            resolve("data was saved");
        }else{
            reject("weak connection");
        }
    })
}

savetodb("internet");





