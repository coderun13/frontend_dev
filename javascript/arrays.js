
/**
 * array - linear collection of things 
 * arrays are mutable (values can be changes)
 */

let students = ["snehal", "aryan", "aman", "rohan"];
console.log(students);


let marks = [20,30,89,97,100,42];
console.log(marks);


let info = ["snehal",18,"js"];

console.log(students);

console.log(info.length);  //array length//

console.log(info[0]);  //string at index 0//

console.log(info[0][0]); //string's 0 index character//

console.log(info[0].length); //0 index string's length//

let emparr = []; //empty array//
console.log(emparr.length);


let fruits = ["mango","apple","litchi"];

fruits[0] = "grapes"; //mango is changed to grapes//

console.log(fruits);

console.log(fruits.length);

fruits[10] = "papaya"; //elements can be added to any index//

console.log(fruits.length);


/*
 * Array methods(push,pop,shift,unshift)
*/
 
/* push==(add to end)
 * pop==(delete from end &returns it)
 * shift==(delete from start & return it)
 * unshift==(add to start)
 */

let cars= ["audi","bmw","maruti","xuv"];

cars.push("toyota");

cars.push("ferrari");

console.log(cars);

cars.pop();

console.log(cars);

cars.unshift("ferrari");

console.log(cars);

cars.shift();

console.log(cars);


/*
 * return index of something
 * search for a value
*/

console.log(cars.indexOf("xuv"));
console.log(cars.includes("xuv"));


/**
 * concat == merge 2 arrays
 * reverse == reverse an array
 */

let primary = ["red","yellow","blue"];

let secondary = ["orange","green","violet"];

console.log(primary.concat(secondary));

console.log(primary.reverse());


/**
 * slice: copes a portion of an array
 */

let colors = ["red","blue","pink","white","orange"];

console.log(colors.slice(2)); //(2 is index)//

console.log(colors.slice(2,3)); //slice(start,end)//

console.log(colors.slice(-2));


/**
 * splice: removes/replaces/add elements in place
 * splice: start,deleteCount,item0...itemN 
 */

console.log(colors.splice(4));

console.log(colors.splice(0,1));

console.log(colors.splice(0,1,"black","grey"));

console.log(colors);

console.log(colors.splice(0,3));


/**
 * sort: sorts an array
 */

let days = ["monday","tuesday","wednesday","thursday","friday"]
console.log(days.sort());


/**
 * array references (address in memory)
 */
//[1] ===[1] (false)
//[] == [] (false)

let arr = ["a","b"];
let arrcopy = arr;
console.log(arr == arrcopy); // true
arr.push("d");
console.log(arrcopy); // [a,b,d]


// Const Array //
//elements can be changed,added or removed 
//But new array can't be assigned.
// address is constant


/**
 * Nested Arrays(multi dimensional arrays)
 */

let nums = [ [2,4],[3,6],[4,8,12] ];
console.log(nums.length);

console.log(nums);

console.log(nums[2]);

console.log(nums[2].length);

console.log(nums[2][2]);


