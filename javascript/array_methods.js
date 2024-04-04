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
























