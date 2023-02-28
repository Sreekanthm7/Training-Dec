// document.getElementById('button').onclick = myFuncton;

// function myFuncton(arg){
//     console.log(arg);
// }

// myFuncton(10)

// const a = [2, 3, 4, 5, 6, 7, 8];

// a.forEach(function (arg){
//     console.log(arg);
// });

// console.log('Two');

//arrow function

// const fn = (val) => {
//     console.log("Hello Njan = ", val);
// }

// fn(3)

// const obj = {
//     a: 100,
//     b: 200,
//     myFun: function(){
//         return this.a + this.b;
//     }
// }

// console.log(obj.myFun());

//this

// const myObj = {
//     a: 1,
//     b: 2,
//     c: function(){
//         console.log(this);
//     }
// };
// myObj.c = myObj.c.bind(myObj);

// var k = myObj.c;
// k();

// function one (){
//     var a = 100;
//     two(a);
//     console.log('one', a);
// }

// function two(a){
//     a = a + 1;
//     console.log('two', a);
// }

// one();

//closure

// function add(a, b) {
//   const c = a + b
//   return c
// }

// function main() {
//     const res = add(3, 5);
//     console.log(res);
// }

// main()

// function add(a, b) {
//   function myAdd() {
//     const c = a + b;
//     return c;
//   }

//   return myAdd()

// }

// function main() {
//     const res = add(3, 4);
//     console.log(res);
// }

// main()

//  var objs = [
//     {
//         name: 'one',
//         msg: 'Hello I am one'
//     },
//     {
//         name: 'Two',
//         msg: 'Hello I am two'
//     },
//     {
//         name: 'Three',
//         msg: 'Hello I am three'
//     },
//  ];

//     function main(){
//         objs.forEach((item) => {
//             const bt = document.createElement('button');
//             bt.innerHTML = item.name;
//             bt.onclick = getCallBack(item.msg);
//             document.body.appendChild(bt);
//         });
//     }

//     function getCallBack(arg) {
//         return function(){
//             alert(arg)
//         }
//     }

//     main();

// spread operators

// var obj = {
//     a: 1,
//     b: 2,
//     c: 'Hello'
// }

// var obj2 = {
//     ...obj
// }

// console.log(obj);
// console.log(obj2);
// console.log(obj2 == obj)

// var a = [1, 2, 3, 5, 6]

// var b = [...a];

// console.log(b);

// var obj1 = {
//     a: 1,
//     b: 2,
//     c: {
//         name: 'raman',
//         age: 45
//     }
// }

// var obj2 = {...obj1}
// obj1.d = 44
// obj2.c.name = 'krishnan';

// console.log(obj1, obj2);

// var arr = [1, 2, 44, 6, 35, 76, 3];

// var a = Math.max(...arr)

// console.log(a);7

// Destructuring

// const obj1 = {
//     name: 'Hello World',
//     place: 'Kerala',
//     rank: 1000
// };

// function myFuncton(){
//     const {
//         name,
//         place,
//         rank,
//         status = false
//     } = obj1;
//     console.log(name, place, rank);
// }

// myFuncton()

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
    place: "Trissur",
  },
  {
    name: "Daniel",
    mark: 23,
    place: "Kollam",
  },
]

// let sum = 0;
// arr.forEach((item) => {
//   sum = sum + item.mark;
// });

// console.log(sum);

// var found = arr.find((item) => {
//     return item.name === 'Bob'
// });

// console.log(found);

// var found = arr.find ((item) => {
//     return item.mark > 30;
// });

// console.log(found);

// var found = arr.filter((item) => {
//     // return item.mark < 30
//     return item.name === "Bob"
// });

// console.log(found);

// map....................

// var newArr = arr.map((item) => {
//     // return item.name + item.place;
//     return {
//         ...item,
//         country: "India"
//     };
// });

// console.log(newArr);

//reduce...........................

// var value = arr.reduce((total, item) => {
//   return total + item.mark
// }, 0)
// console.log(value)


// Nested destructuring

