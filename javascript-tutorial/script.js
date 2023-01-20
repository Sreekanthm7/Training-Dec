// var product = 2.0 * 2.5;
// console.log(product)

// augmented addition

// var a=3;
// var b=17;
// var c=12; 

// a += 12;
// b += 9;
// c += 7;

//  augmented substraction
 
// var a=3;
// var b=17;
// var c=12;

// a -= 12;
// b -= 9;
// c -= 7;

//concatenating string with plus equal operator

// var myStr= "this is the first sentence"
// myStr+= "this is the second sentence"
// console.log(myStr);

// length of the string 

// var firstNameLength = 0;
// var firstName = "LoveLace";
// firstNameLength= firstName.length;
// console.log(firstNameLength);

// modifying array using index values 


// var ourArray = [19,64,99];
// ourArray[1] = 45;
// console.log(ourArray);

// multidimensional array 
// var myArray= [[1,2,3], [4,5,6],[7,8,9],[[10,11,12],13,14]];

// var myData = myArray[3][2];
// console.log(myData);

// push function:- to add an element to the existing array

// var myArray =[["john", 23], ["cat", 2]];
// myArray.push(["dog", 3]);

// console.log(myArray);

// pop function:- it will remove the last element

// var myArray= [["john", 23],["cat", 2]];
// var removedFromMyArray = myArray.pop();
// console.log(myArray);

// array shift:- it will remove the first element

// var myArray= [["John", 23],["dog", 3]];
// var removedFromMyArray = myArray.shift();
// console.log(myArray); 

// unshift:- add one or more element in the begining of an array and returns the new length of the array

// var myArray = [["John", 21], ["dog",3]];
// myArray.shift();
// myArray.unshift(["paul",20]);
// console.log(myArray);

// reusable with functions 
// function ourReusableFunction(){
//     console.log("hello, world");
// }

// ourReusableFunction();
// ourReusableFunction();

//  function with argument 

// function ourFunctionWithArgs(a,b){
//     console.log(a+b);
// }
// ourFunctionWithArgs(4,7);

// global scope and functions

// var myGlobal = 10;
// function fun1(){
//     oopsGlobal= 9;
// }

// function fun2(){
//     var output= "";
//     if(typeof myGlobal != "undefined") {
//         output += "myGlobal: " + myGlobal;
//     }
//     if(typeof oopsGlobal != "undefined"){
//         output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }

// fun1();
// fun2();

// local scope 
    // function myLocalScope(){
    //     var myVar = 5;
    //     console.log(myVar);
    // }
    // myLocalScope();
    
    // console.log(myVar);

    // global vs local scope function 
    // var outerWear = "T-shirt";
    // function myOutfit(){
    //     var outerWear = "sweater";

    //     return outerWear;
    // }
    
    // console.log(myOutfit());
    // console.log(outerWear);

    //   return value from a function with return 

    // function minusSeven(num){
    //     return num -7;
    // }

    // console.log(minusSeven(10));

    // function timesFive(num){
    //     return num * 5;
    // }
    // console.log(timesFive(4));

    // understanding undefined value returned from a function 

    // var sum = 0;
    // function addThree(){
    //     sum += 3
    // }
    // function addFive(){
    //     sum+=5;
    // }
     
    // console.log(sum);

    // assignment with a returned value 

        // var changed = 0;
        // function change(num) {
        //     return (num + 5) / 3;
        // }
        // changed= change(10);

        // console.log(changed);

        // var processed = 0;
        // function processArg(num){
        //     return (num + 3) / 5;
        // }
        // processed = processArg(7);

        // console.log(processed);
        

    // stand in line 

    // function nextInline(arr, item){
    //     arr.push(item);
    //     return arr.shift();
    // }

    // var testArr = [1,2,3,4,5];

    // console.log("before: "+ testArr);
    // console.log(nextInline(testArr, 6));
    // console.log("after: "+ testArr);

    // boolean values 

    // function trueOrFalse(wasThatTrue){
    //     if(wasThatTrue) {
    //         return "Yes, that was true";
    //     }
    //     return "No, that was false"
    // }
    // console.log(trueOrFalse(false));

    // comparison with the equality operator

    // double equal 
    //  function testEqual(val){
    //     if(val == 12){
    //         return "Equal";
    //     }
    //     return "Not Equal";
    //  }

    //  console.log(testEqual(10));

    //  triple equal 

    //  function testStrict(val){
    //     if(val === 7){
    //         return "equal";
    //     }
    //     return "not equal";
    //  }

    //  console.log(testStrict(7));

    // inequality operator

    // function testNotEqual(val) {
    //     if(val != 99){
    //         return "Not Equal";
    //     }
    //     return "Equal";
    // }

    // console.log(testNotEqual(10));
    
    // Logical And Operator 
    //     function testGreaterThan(val){
    //         if(val>100){
    //         return "Over 100";
    //         }
    //     if(val>10){
    //         return "over 10";
    //     }
    //     return "10 or under";
    // }

    // console.log(testGreaterThan(1000));

    // chaining if else statement

    // function testSize(num){
    //     if(num < 5){
    //         return "Tiny"
    //     }else if(num < 10){
    //         return "small"
    //     }else if(num < 15){
    //         return "medium"
    //     }else if(num < 20){
    //         return "Large"
    //     }else{
    //         return "huge"
    //     }
    // }

    // console.log(testSize(6));

    // switch statement 

    // function caseInSwitch(val) {
    //     var answer = "";
    //     switch(val) {
    //         case 1:
    //         answer = "alpha"
    //         break;
    //         case 2:
    //         answer = "beta"
    //         break;
    //         case 3:
    //         answer = "gama"
    //         break;
    //         case 4:
    //         answer = "delta"
    //         break;
    //     }
    //     return answer;
    // }

    // console.log(caseInSwitch(3)); 


    // default in switch statement 

        // function switchOfStuff(val){
        //     var answer = "";
        //     switch (val){
        //         case "a":
        //             answer = "apple";
        //         break;
        //         case "b":
        //             answer = "bird";
        //         break;
        //         case "c":
        //             answer = "cat";
        //         break;
        //         default:
        //             answer = "stuff";
        //             break;
        //     }
        //     return answer;
        // }
        // console.log(switchOfStuff("c"));

        // multiple identical option in switch statement 

        // function sequentialSizes(val){
        //     var answer = "";
        //     switch(val){
        //         case 1:
        //         case 2:
        //         case 3:
        //             answer = "low";
        //             break;
        //         case 4:
        //         case 5:
        //         case 6:
        //             answer = "mid";
        //             break;
        //         case 7:
        //         case 8:
        //         case 9:
        //             answer = "high";
        //             break;
        //     }
        //     return answer;
        // }

        // console.log(sequentialSizes(7));


        // replacing if else chains with switch 

        // function chainToSwitch(val) {
        //     var answer= "";

        //     switch(val){
        //         case "bob":
        //         answer="Marley";
        //         break;
        //         case 42:
        //         answer= "the answer";
        //         break;
        //         case 1:
        //         answer= "there is no #1";
        //         break; 
        //         case 99:
        //         answer= "missed me by this much";
        //         break;
        //         case 7:
        //         answer= "its the seventh digit";
        //         break;
        //     }
        //     return answer;
        // }
        // console.log(chainToSwitch(1));

        // returning boolean values from functions

        // function isLess(a,b){
        //     return a < b;
        // }
        // console.log(isLess(20, 15));  

        // javascript objects 


        // updating object properties

        // var myDog = {
        //     "name": "Camper",
        //     "legs": 4,
        //     "age" : 2,
        //     "friends": ["everything!"]
        // };

        // myDog.name= "happy camper";

        // console.log(myDog);

        // add a new property to object 


        // var myDog = {
        //     "name": "Camper",
        //     "legs": 4,
        //     "age" : 2,
        //     "friends": ["everything!"],
        //     "bark": "bow-bow"

        // };

        // delete myDog.bark;
        // console.log(myDog);

        // itterate with while loop 
        // var myArray = [];

        // var i= 0;
        // while(i < 5) {
        //     myArray.push(i);
        //     i++;
        // }
        // console.log(myArray);

        // itterate with for loop

    //     var ourArray = [];
    //     for(var i=0; i<10; i++){
    //         ourArray.push(i);
    //     }
         
    //    console.log(ourArray);
        

    // var ourArray = [];
    // for(var i = 10; i > 0; i-=2){
    //     ourArray.push(i);
    // }
    // console.log(ourArray);

    
        // do while loops

        // var myArray = [];
        // var i = 10;
        // while (i<5){
        //     myArray.push(i);
        //     i++;
        // }
        // console.log(i, myArray);

        // generate random functions 

        // function randomRange(myMin, myMax) {
        //     return Math.floor(Math.random() * (myMax-myMin + 1)) + myMin;
        // }
        // var myRandom = randomRange(5, 15);
        // console.log(myRandom);

    // ternary operator

    // function checkEqual(a,b){
    //     return a===b?true:false;
    // }

    // console.log(checkEqual(2, 2));

    // multiple ternary operator 

    // function checkSign(num){
    //     return num > 0?"positive" : num<0?"negative" : "zero";
    // }
    // console.log(checkSign(0));

    // difference between var and let keywords

    // let: we can't create  varible with same name more than one time
    //var: we can create varibles with same name 

    

    // factorial

    // function factR(n){
    //     if(n<=0)
    //     return 1;
    //     // console.log(n);
    //     return n*factR(n-1);
    // }

    // console.log(factR(6));




    // new 8 hr challenge



    