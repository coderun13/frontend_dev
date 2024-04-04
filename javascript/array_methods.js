//Higher order function

//forEach(arr.forEach)(some function definition or name)

let arr = [1,2,3,4,5];

function print(el) {
    console.log(el);
}
arr.forEach(print);



//Map(make new array to store the values)

let num = [2,3,4,5];
let double = num.map(function(el){
    return el*2;
});
console.log(double);

let students = [
    {
        name: "snehal",
        marks: 95,
    },
    {
        name: "aryan",
        marks: "92",
    },
];

let gpa = students.map((el) => {
    return el.marks / 10;
});
console.log(gpa);

//filter function

let nums = [1,2,3,4,5,6,7,8,9,10,12,11];

let ans = nums.filter((el) => {
    return el%2 == 0; //even -> true
});

let an = nums.filter((el) => {
    return el%2 != 0; // odd -> true
});

console.log(ans);

console.log(an);

//every function(returns true if every function is true)

console.log([2,6,4].every((el) => el%2 == 0));

console.log([2,6,4].every((el) => el%2 != 0));

console.log([1,3,5].every((el) => el%2 != 0));

//Some function(returns true if some elements of array give true)

console.log([1,3,5].some((el) => el%2 != 0));

console.log([2,6,4].some((el) => el%2 != 0));

console.log([2,6,4].some((el) => el%2 == 0));

//Reduce function(reduces the array to single value)

console.log([1,2,3,4].reduce((res,el) => (res+el))); //(10)

//maximum in an array

let numb = [2,3,4,5,3,4,7,8,1,12];

let result = numb.reduce( (max,el) => {
    if(el>max){
        return el;
    } else {
        return max;
    }
});
console.log(result);


