// var x = 7;
// function getName(){
//     console.log("Namaste Javascript");
// }

// getName();

// console.log(x);

// console.log(getName);

// var x = 1;

// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);

// }

// function b(){
//     var x = 100;
//     console.log(x);
// }

//  function a(){
//     c();
//     function c(){
//         console.log(b);

//     }
//  }

//  var b = 10;
//  a()

// function a() {
//   var b = 10

//   c()
//   function c() {}
// }
// console.log(b)
// a()

// var a = 10;
// function b(){
//   var x = 10;
// }

// console.log(window.a);
// console.log(a);
// console.log(this.x);

// var a;
// console.log(a);
// var a = 10;
// if(a === undefined){
//   console.log("a is undefined");
// }
// else{
//   console.log("a is not undefined");
// }

// {
//   var x = 2
// }

// console.log(x);

// console.log(b);
// let a = 10;
// var b = 100;

// function z(){
//   var b = 900;
//   function x(){
//     var a = 7;
//     function y(){
//       console.log(a);
//     }
//     a= 100;
//     return y;
//   }

// }

// function x(){
//   var i = 1;
//   setTimeout(function() {
//     console.log(i);
//   }, 3000);
//   console.log("namasthe javascript");
// }

// x()

// function x(){
//   for(var i =1; i<=5; i++){
//     function close(x){
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000)
//     }
//     close(i);
//   }
//   console.log("Namasthe Javascript");
// }
// x();

// function init(){
//   var name = "Mozilla";

//   function displayName(){
//     console.log(name);
//   }
//   displayName();
// }

// init();

// function outer(b){
//   function inner(){
//     console.log(a, b);
//   }
//   let a = 30
//   return inner;
// }

// var close = outer("helloworld");
// close();

// function counter(){
//   var count = 0;
//   return function incrementCounter(){
//     count ++;
//     console.log(count);
//   }
// }

// var counter1 = counter()
// counter1();
// counter1();

// function Counter(){
//   var count = 0;
//   this.incrementCounter = function(){
//     count++;
//     console.log(count);
//   }
//   this.decrementCounter = function(){
//     count--;
//     console.log(count);
//   }
// }

// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

// function statement
// function a(){
//   console.log("a is called");
// }

//function expression
// var b =function(   ){
//   console.log("b is called");
// }
// a();
// b();

//anonymous function

// function(){

// }

// call back function

//

// function attachEventListeners(){
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Button Clicked", ++count);
//   })
// }

// attachEventListeners();

// const radius = [3, 1, 2, 4];

// const area = function (radius) {
//   return Math.PI * radius;
// };

// const circumference = function(radius){
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// }

// const calculate = function (radius, logic){
//   const output = [];
//   for(let i = 0; i< radius.length; i++){
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// const arr = [5, 1, 3, 2, 6]

// // function double(x){
// //   return x * 2;
// // }

// // function triple(x){
// //   return x * 3;
// // }

// const output = arr.map((x) => x.toString(2));


// console.log(output)


// const arr = [5, 1, 3, 2, 6];

// // function isEven(x){
// //   return x % 2 === 0;
// // }

// // const output = arr.filter(isEven)

// const output = arr.filter((x)=>{
//   return x > 4;
//   });

// console.log(output);

//reduce

// const output = arr.reduce(function  (acc, curr){
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

// const users = [
//   { firstName: "akshay", lastName: "saini", age: 26},
//   { firstName: "donald", lastName: "trump", age: 75},
//   { firstName: "elon", lastName: "musk", age: 50},
//   { firstName: "deepika", lastName: "padukone", age: 26},
// ];


// const output = users.map((x) => x.firstName + " " + x.lastName);
// console.log(output);

// const output = users.reduce(function (acc, curr){
//   if(acc[curr.age]){
//     acc[curr.age] = ++acc[curr.age];
    
//   }else{
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});


// console.log(output);


var b = 10;
 a()

function a() {
  var b = 10

  c()
  function c() {}
}
console.log(b)
a()