//callback
// document.getElementById('button').onclick = myFunction;

// function myFunction(arg) {
//         console.log(arg);
// }

// myFunction(10)

// console.log("One")
// const a = [2, 3, 7, 6, 4, 5]

// function myFunction(arg) {
//   console.log(arg)
// }

// a.forEach(myFunction)

// console.log("two")

// arrowfunction

// const fn2 = (val) => {
//     console.log("hello world = ", val);
//     return 19;
// }

// fn2(2);

// const fn2 = (a, b) => a + b;

// const add = fn2(3, 5);

// console.log(add);

// const fn2 = () => ({
//   a: 1,
//   b: 2,
// });

// const val = fn2()
// console.log(val);

// const obj = {
//     a: 100,
//     b: 200,

//     myFun: function() {
//         return this.a + this.b;
//     }
// }

// console.log(obj.myFun());

// const myObj = {
//     a: 1,
//     b: 2,
//     c: function() {
//         console.log(this);
//     }
// }

// class MyClass{
//     myFunction(){
//         console.log(this);
//     }
// }

// var obj = new MyClass();
// var a = obj.myFunction;
// // obj.myFunction()
// a();

// call by value & call by refenrence

// function one(){
//     var a = 100;
//     two(a);
//     console.log(a);
// }

// function two(a) {
//     a = a + 1;
//     console.log(a);
// }

// one();

// function add(a, b) {
//     function myAdd() {
//     const c = a + b;
//     return c;
// }
//     return myAdd;
// }

// function main() {
//     const res = add(3, 4);
//     const val = res();
//     console.log(val);
// }

// main();

// spread operator

// var obj = {
//   a: 1,
//   b: 2,
//   c: "Hello",
// }
// var obj2 = {
//   ...obj
// }

// console.log(obj)
// console.log(obj2);

// var a = [1, 2, 3, 4]
// var b = [...a]

// console.log(a)
// console.log(b)

// var obj = {
//     a: 1,
//     b: 2,
//     c: "Hello"
// }

// // var obj2 = obj;

// var obj2 = {
//     ...obj
// }

// console.log(obj2 === obj);

// var objA = {
//     a: 1,
//     b: 2,
//     c: 'hello'
// }

// var objB = {
//     a1: 1,
//     b1: 2,
//     c: 'hello 2'
// }

// var obj2 = {
//     ...objA,
//     ...objB,
// };

// console.log(obj2);

// var a = [1, 2, 3, 4]
// var b = [...a]

// console.log(b === a)

// var obj1 = {
//     a: 1,
//     b: 2,
//     c: {
//         name: 'raman',
//         age: 45
//     }
// }

// var obj2 = {...obj1};
// obj1.d = 44;
// obj1.c.name = 'krishnan'

// console.log(obj1, obj2);

// destructuring

// let obj1 = {
//     name: 'Vonnue',
//     place: 'Sulthan Bathery',
//     rank: 1
// };

// function myFunction(){
//     // let name = obj1.name;
//     // let place = obj1.place;
//     // let rank = obj1.rank;

//     const {
//         name,
//         place,
//         rank
//     } = obj1;

//     console.log(name, place, rank);
// }

// myFunction();

// let marks = p=[1, 2, 4, 5, 6];

// let [a, b] = marks;
// console.log(a, b);

// const obj1 = {
//     name: "code malayalam",
//     place: "Kerala",
//     rank: 100,
// };

// const marks = [1, 3, 4, 6, 7];

// function myFunction() {
//     const {
//         name,
//         place,
//         rank,
//         status = false
//     } = obj1;

//     console.log(name, place, rank, status);
// }

// myFunction();

// arrayfunctions

const arr = [
  {
    name: "Alice",
    mark: 35,
    place: "Kannur",
  },
  {
    name: "Bob",
    mark: 28,
    place: "Palakad",
  },
  {
    name: "Catherine",
    mark: 44,
    place: "Thrissur",
  },
  {
    name: "Daniel",
    mark: 23,
    place: "Kollam",
  },
]

// arr.forEach((item) => {
//     console.log(item);
// })

// var found = arr.find((item) => {
//     return item.name == 'Bob';
// });

// console.log(found);

var found = arr.filter((item) => {
    return item.mark < 30;
});

console.log(found);