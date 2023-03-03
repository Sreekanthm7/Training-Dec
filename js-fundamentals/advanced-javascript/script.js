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

// const arr = [
//   {
//     name: "Alice",
//     mark: 35,
//     place: "Kannur",
//   },
//   {
//     name: "Bob",
//     mark: 28,
//     place: "Palakad",
//   },
//   {
//     name: "Catherine",
//     mark: 44,
//     place: "Trissur",
//   },
//   {
//     name: "Daniel",
//     mark: 23,
//     place: "Kollam",
//   },
// ]

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

//inheritance

// class Button {
//   constructor(name) {
//     this.button = document.createElement("button")
//     this.button.innerHTML = name
//     this.name = name

//     document.body.appendChild(this.button)
//   }

//   onClick(fn) {
//     this.button.onclick = fn
//   }
// }

// class GreenButton extends Button {
//   onClick(fn) {
//     this.button.onclick = function () {
//       this.button.style.background = "green"
//       fn()
//     }.bind(this)
//   }
// }

// let b1 = new GreenButton("GButton")
// b1.onClick(function () {
//   console.log("clicked")
// })

// let payButton = new Button("paynow")

// console.log(payButton)
//prototype

// function myButton(name) {
//   this.button = document.createElement('button');
//   this.button.innerHTML = name;

//   document.body.appendChild(this.button);
// }

// myButton.prototype.onClick = function (fn) {
//   this.button.onClick = fn;
// }

// var b2 = new myButton('Yo!')
// b2.onClick(function () {
//   console.log('clicked');
// });
// console.log(b2);

// console.log(typeof myButton);

// almost all events are asynchronous

// asynchronous callback

// var button = document.getElementById('mybutton');

// button.onclick = () => {
//   console.log('started click event');

//   var arr = [];
// $.ajax({
//   url:'https://jsonplaceholder.typicode.com/todos/1',
//   success: (data) => {
//     console.log("ajax1 started");
//     arr.push(data.title);
//     console.log("ajax1 ended");
//   },
//   async: false
// });

// $.ajax({
//   url:'https://jsonplaceholder.typicode.com/todos/2',
//   success: (data) => {
//     console.log("ajax2 started");
//     arr.push(data.title);
//     console.log("ajax2 ended");
//   },
//   async: false
// });

// document.getElementById('mytext').value = arr.join['\n'];
// console.log('ended click event');
// }

// promise

// console.log("started")

// $.ajax({
//   type: "GET",
//   url: "https://jsonplaceholder.typicode.com/todos/1",
//   success: function (msg) {
//     console.log(msg)
//   },
//   error: function (xhr, statusText) {
//     console.log(statusText)
//   },
// })

// const pr = myFetch("https://jsonplaceholder.typicode.com/todos/1")

// function buttonClick() {
//   console.log("clicked")
//   pr.then(
//     (data) => {
//       console.log(data)
//     },
//     (err) => {
//       console.log(err)
//     }
//   );
// }
// console.log("ended")

// function myFetch(url) {
//   return new Promise((res, rej) => {
//     $.ajax({
//       type: "GET",
//       url: url,
//       success: function (msg) {
//         res(msg)
//       },

//       error: function (xhr, statusText) {The then() method of a Promise object takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise . It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.20-Feb-2023

//         rej(statusText)
//       },
//     })
//   })
// }

// console.log("Requesting 1")
//  fetch("https://jsonplaceholder.typadsfwficode.com/todos/1")
//   .then((data) => {
//     console.log(data)
//     console.log("Requesting 2")
//     return fetch("https://jsonplaceholder.typicode.com/todos/2")
//   })
//   .then((data) => {
//     console.log(data)
//     console.log("Requesting 3")
//     return fetch("https://jsonplaceholder.typicode.com/todos/3")
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log('ERROR: ', err);
//   })

// Util function

// const cache = {
//   name: 'Code Malayalam'
// };

// function getJson(url) {
//   if(cache) {
//     return convertToPromise(cache);
//   }

//   return fetch(url)
//     .then((data) => {
//       return data.json();
//     })

// }
// function convertToPromise(data) {
//   return new Promise((res, rej) => {
//     res(data);
//   })
// }

// const cache = {
//   name: 'Code Malayalam'
// };

// function getJson(url){
//   if(cache) {
//     return Promise.resolve(cache);
//   }

//   return fetch(url)
//     .then((data) => {
//       return data.json();
//     })
// }

// function convertToPromise(data) {
//   return new Promise((res, rej) => {
//     res(data);
//   });
// }

// getJson('https://jsonplaceholder.typadsfwficode.com/todos/1')
//     .then((data) => {
//       console.log(data);
//     })

// getJson('https://jsonplaceholder.typicode.com/todos/1')
//   .then((data) => {
//     console.log(data);
//   })

//   .catch((data) => {
//     console.log(data);
//   })

// Promise.all([
//   getJson('https://jsonplaceholder.typicode.com/todos/1'),
//   getJson('https://jsonplaceholder.typicode.com/todos/2'),
//   getJson('https://jsonplaceholder.typicode.com/todos/3')

// ])

// .then((data) => {
//   console.log(data);
// })

// try catch finally throw

// console.log("started")

// let a, b, result;

// try {
//   a = getval1()
//   b = getVal2()
//   result = processValues(a, b)

// } catch(e) {
//   result = 0;
// }
// // finally{
// //   console.log("In finally");
// // }

// console.log(result)

// console.log("ended")

// function getval1() {
//   return 12
// }

// function getVal2() {

//   throw 'ente swantham error'
//   return 22
// }

// function processValues(a, b) {
//   return a + b
// }

// aync and await

// async function getValue() {
//     return 12;
// }

// let result = getValue();
//   result.then((data) => {
//       console.log(data);
//   })

// console.log("Started")
// var ee = getValue().then((data) => {
//   console.log(data)
// })
// console.log("Ended")

// async function getValue() {
//   // fetch('https://jsonplaceholder.typicode.com/todos/1')
//   //   .then((data) => {
//   //     console.log(data);
//   //   })
//   try{
//   const data = await "https://jsonplaceholder.typicode.com/todos/1"
//   const jsonData = await data.json()
//   return jsonData
//   } catch(e) {
//     console.log('handled');
//     return {};
//   }

// }

// self invoking

// scope
// const number1 = 23;

// function fn1() {
//   let number = 12
//   console.log(number);
// }

// function fn2(){
//   console.log(number1);
// }

// fn1();
// fn2();

// console.log(number1);

// (function(a, b) {
//   console.log(a, b);
// })(28, 34)

// import and export

// console.log('Script1');

// export function addArray(arr) {
//     return arr.reduce((total, item) => total + item, 0)
// }

// const name = "My Array Library"

// const option = {
//   version: "1.1",
//   author: "Code Malayalam",
// }

// function addAll(arr = []) {
//   console.log("addAll")
//   return arr.reduce((total, item) => total + item, 0)
// }

// export default function findMax(arr = []) {
//   console.log("findMax")
//   return Math.max(...arr)
// }

// function log(val) {
//   console.log("INSIDE", val)
// }

// export { name, option, findMax, addAll }

// dynamic import

// export function createButton (name, fn) {
//     const btn = document.createElement('button');
//     btn.innerText = name;
//     btn.onclick = fn;
//     btn.style.margin = '5px';
//     document.body.appendChild(btn);
// }

// const var1 = "Code Malayalam It's wonderful"
// const var2 = 'Code Malayalam It\'s wonderful';
// const var3 = `Code Malayalam It's wonderful`

// console.log(var1);
// console.log(var2);

// template literals

// multiline string

//  document.body.innerHTML = `
// <div className="item">
//         <h4>Product Name</h4>
//         <div>Price: 001</div>
//     </div>
//  `;

// const productName = "Pen";
// const Price = "12 Rs";

// const value = `The  ${productName}  is  + ${Price}`;
// const msg = `The product is ${Price > 10 ? 'Costly' : 'Cheap'}`
// console.log(value)
// console.log(msg);

// default parameter

// function average(a = 0, b = 0) {
//     console.log(a, b);
//     const avg = (a + b) / 2;
//     return avg
// }

// const avg = average(4);
// console.log(avg)

// rest parameter
// function test() {
//     const arr = [11, 33, 43, 22];
//     const [a, ...rest] = arr;

//     console.log(a, rest);
// }

// test();

// function test (...total) {

//     const a = total.reduce((sum, current) => sum + current)
//     console.log(a);
// }

// // test(11, 44, 64, 22, 66, 3)

// const a = [11, 44, 64, 22, 66, 3, 234];
// test(...a);

//parameter destructuring

// const obj = {
//     name: 'hello world',
//     age: 1
// }

// function test({name, age}) {
//     console.log(name, age);
// }

// test(obj);

// var, let, const

// let a = "hello";

// function test() {
//     console.log(testVar);
//     let testVar = 12;

// }

// test()

// function test() {
//     let a = 20;

//     if(true) {
//         let a = 100;

//         console.log(a);
//     }

//     console.log(a);
// }

// test();

// const .................................

// function test() {
//     const a = [];
// a.push(12)
// console.log(a);

// a = [23, 32]
// }

// test();

// JSON ...................................
// let a = 10
// let b = false
// var c = "Code Malayalam"
// var d = ["Code", "Malayalam"]
// let e = {
//   name: "Code Malayalam",
//   age: 1,
//   topic: ["JavaScript", "React", "SCSS", "git", "aws"],
//   caption: "Keep calm and JS",
// }

// let jsonE = JSON.stringify(e)

// // console.log(jsonE);

// let obj = JSON.parse(jsonE)
// console.log(obj)

//Equality

// const val1 = 5
// const val2 = 5
// console.log("Integer", val1 === val2)

// const val3 = "Code Malayalam"
// const val4 = "Code Malayalam"
// console.log("String", val3 === val4)

// const val5 = ["Code", "Malayalam"]
// const val6 = ["Code", "Malayalam"]

// console.log("Array", val5 === val6)

// const val7 = { name: "Code Malayalam" }
// const val8 = { name: "Code Malayalam" }
// console.log("Object", val7 === val8)

//mutable

// var a = {
//     name: 'Code Malayalam'
// };

// var b = a;

// b.name = 'Code Malayalam 2.0';

// console.log('a= ', a);
// console.log('b= ', b);

// function junk(obj) {
//   obj.test = "Test"
//   return obj
// }

// const myObj = {
//   name: "Code Malayalam",
// }

// var ret = junk(myObj)

// console.log(ret === myObj)

// console.log(ret === myObj)
