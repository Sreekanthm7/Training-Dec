// concat()

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"]
// const children = arr1.concat(arr2, arr3);

// console.log(children);

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = [1, 2, 3];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// const arr1  = [1, 2, [3, 4]];
// const arr2 = [[5, 6], 7, 8];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// constructor
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.constructors;

// copyWithin()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(3,0);

// console.log(fruits);

//  const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
//  fruits.copyWithin(2, 0, 2);

//  console.log(fruits);

// entries()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const f = fruits.entries();

// for(let x of f){
//     document.getElementById("demo").innerHTML += x;
// }

// every()

// const ages = [32, 33, 16, 40];

// ages.every(checkAge)

// function checkAge(age) {
//   return age > 18;
// }

// fill()..........................................

//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  fruits.fill("Kiwi");

//  console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"]

// fruits.fill("Kiwi", 2, 4)

// console.log(fruits)

// filter().........................................

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }
// console.log(result)

// const num = [12, 23, 11, 32];

// const result = num.filter(greaterNum);

// function greaterNum(numbers) {
//     return numbers > 15;
// }

// console.log(result);

// find()........................................

// const ages = [3, 10, 18, 49, 20];

// function checkAge(age) {
//     return age > 18;
// }

// result = ages.find(checkAge);
// console.log(result);

// findIndex().........................................

// const ages = [3, 50, 12, 43]

// function checkAge (age) {
//     return age > 18;
// }
// result = ages.findIndex(checkAge);
// console.log(result);

//forEach()............................................

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item){
// sum += item;
// }

// console.log(sum);

// const numbers = [63, 23, 25, 23]
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10
//   console.log(arr[index]);
// }

//includes()...........................................

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = fruits.includes("Mango")

// console.log(result);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = fruits.includes("Banana", 1)
// console.log(result);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = fruits.includes("Mango")

// console.log(result);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = fruits.includes("Banana", 1)
// console.log(result);

// index().........................................

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");

// console.log(index);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple", 4)

// console.log(index);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];

// let index = fruits.indexOf("Apple", -1)

// console.log(index);

// Map()....................................

// const numbers = [4, 9, 16];
// const newArr = numbers.map(Math.sqrt)

// console.log(newArr);

// const numbers = [12, 3, 42, 5];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//     return num * 10;
// }

// console.log(newArr);


// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
// ]

// const fullName = persons.map(getFullName);

// function getFullName(item) {Java Syntax
//     return [item.firstname, item.lastname].join(" ");
// }

// console.log(fullName);


// reduce ...............................................


// const numbers = [175, 50, 23];

// result = numbers.reduce(myFunc);

// function myFunc(total, num) {
//     return total - num;
// }

// console.log(result);

// const numbers = [129, 50, 23];

// result = numbers.reduce(myFunc);

// function myFunc(total, num) {
//     return total - num;
// }

// console.log(result);




const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
]

const fullName = persons.map(getFullName);

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}

console.log(fullName);

