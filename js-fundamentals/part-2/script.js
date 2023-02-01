// functions

// function logger(){
//     console.log('my name is sreekanth');
// }

// logger();

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// funtion declaration
// function calcAge1(birthYear){
//     return 2023 - birthYear
// }

// const age1= calcAge1(2002);
// console.log(age1);

// // function expression
// const calcAge2 = function(birthYear){
//     return 2023 - birthYear
// }

// const age2 = calcAge2(2002);
// console.log(age2);

// arrow function

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023-birthYear;
//     const retirement = 65 - age
//      return `${firstName} retires in ${retirement} years`;

// }

// console.log(yearsUntilRetirement(2002, 'Sreekanth'));

// function calling another function

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces= cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple  and ${orangesPieces} piece of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

// array

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 2001, 1993, 2004, 2023);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length-1]);

// console.log(years.length);

// friends[2]='Aneesh'
// console.log(friends);

// basic array operations

// const friends = ['Michael','Franklin','Peter']
// // add elements
// friends.push('Jay');
// friends.unshift('Rock');

// console.log(friends);

// // remove elements

// friends.pop();
// const popped = friends.pop();

// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Franklin'));

// objects

// const joansArray = [
//     'Joans',
//     'James',
//     2023-2002,
//     'Developer',
//     ['Michael','Charles','Peter']
// ];

// const joans = {
//     firstName: 'Joans',
//     lastName: 'James',
//     age: 2023 - 2002,
//     job: 'developer',
//     friends: ['Michael','Charles','Peter']
// };

// console.log(joans);

// console.log(joans.lastName);
// console.log(joans['job']);

// const interestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(interestedIn);

// const joans = [
//     "Joans",
//     "James",
//     2023-2002,
//     'developer'
// ]

// for(i=0;i<4;i++){
//     console.log(joans[i], typeof joans[i]);
// }

// while

// let rep = 1
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`)
//   rep++
// }
