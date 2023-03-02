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

console.log("started")

let a, b, result;

try {
  a = getval1()
  b = getVal2()
  result = processValues(a, b)

} catch (e) {
  a = 0
}

console.log(result)

console.log("ended")

function getval1() {
  console.log("inside getVal1");
  junk()
  return 12
}

function getVal2() {
  return 22
}

function processValues(a, b) {
  return a + b
}
