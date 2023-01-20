//document.getElementById("count").innerText = 5

// let count = 0
// console.log(count)

// let myAge = 35
// console.log(myAge);

// let firstBatch = 5
// let secondBatch = 4

// let count = firstBatch + secondBatch

// console.log(count);

// let bonusPoint = 50;
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 100
// console.log(bonusPoint);

// bonusPoint= bonusPoint - 25
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 70
// console.log(bonusPoint);

// function increment(){
//     console.log("The button was clicked");
// }


//  function countDown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
//  }

//  countDown()

// function myLogger(){
//     console.log(42);
// }

// myLogger()
// let lap1= 34
// let lap2 = 43
// let lap3= 34


// function logLapTime(){
// let totalTime = lap1 + lap2 + lap3

// console.log(totalTime);
// }

// logLapTime()

//function that increments

//  let lapCompleted = 0

//  function incrementLap(){
//     lapCompleted+=1
//  }

//  incrementLap()
//  incrementLap()
//  console.log(lapCompleted);

// increment onclicks

// let countVal = document.getElementById("count")


// let count = 0
//  function increment(){
//     count= count+1
//     countVal.innerText = count
//  }

// create the save btn 


// let countEl = document.getElementById("count-el");


// let count = 0
//  function increment(){
//     count= count+1
//     countEl.innerText = count
//  }

// function save(){
//     console.log(count)
// }

// save()

// what is string 

// let username = "per"

// let message = " you have three new notifications"

// let messageTouser = message + ", " + username  

// console.log(messageTouser);
// console.log(message + ", " + username + "!");

// log greeting to console
// let name = "petter"
// let greeting = " nee ,shooperada "  
// let myGreeting = greeting + name

// console.log(myGreeting);

// string vs number 

// let name = 42
// let greeting = "hi my name is "
// let myGreeting= greeting + name
// console.log(myGreeting);


// render a welcome msg 

// let welcomeEl= document.getElementById("welcome-el")

// let name = "Per Harald Borgen"
// let greeting= "Welcome back"

// welcomeEl.innerText = greeting + name
 

// let saveEl = document.getElementById("save-el")     

// let countEl = document.getElementById("count-el")
// let count = 0
// function increment(){
//     count += 1
//     countEl.innerText= count
// }

// function save(){

//     let countStr = count + " - "
//     saveEl.innerText+= countStr
//     countEl.textContent = 0;
//     count= 0
// } 


// variable practice 

// let firstName="petter"
// let lastName="griffin"

// let fullName = firstName+" "+lastName

// console.log(fullName); 

// concatenate two string in a function 
    // let name = "Linda"
    // let greeting = "Hi there"

    // function greetLinda(){
    //     console.log(greeting+ " " + name);
    // }

    // greetLinda()

    // incrementing and decrementing

    // let myPoints = 3

    // function add3points(){
    //     myPoints += 3
    // }

    // function remove1point(){
    //     myPoints -=1

    // }

    // add3points()
    // add3points()
    // remove1point()

    // console.log(myPoints);

    // strings and numbers 

    // console.log("2"+2);  //22
    // console.log(11+7);  //18  
    // console.log(6+"5"); //65
    // console.log("My points: "+5 + 9); //My points: 59
    
    // rendoring an error msg 
    // let errorParagraph = document.getElementById("error")
    // console.log(errorParagraph );
    // function purchase(){
    //     console.log("button clicked");
    //     errorParagraph.textContent= "something went wrong, please try again later"
    // }

    //calculator

    // let num1= 8
    // let num2= 2
    // document.getElementById("num1-el").textContent= num1
    // document.getElementById("num2-el").textContent = num2

    // let sumEl = document.getElementById("sum-el")

    // function add(){

    //     let result = num1 + num2 
    //     sumEl.textContent = "Sum: " + result
    // } 

    // function divide(){

    // let result = num1 / num2
    // sumEl.textContent = "Sum: " + result
    // }


    // function substract(){

    //     let result = num1 - num2
    //     sumEl.textContent = "Sum: " + result
    //     }
    
    // function multiply(){

    //     let result = num1 * num2
    //     sumEl.textContent = "Sum: " + result
    // }

    // blackjack  

    // let firstCard = 11
    // let secondCard= 10
    // let sum = firstCard + secondCard
    
    // if(sum < 21){
    //     console.log("do you want to draw a new card?");
    // }else if(sum === 21){
    //     console.log("woho! you've got blackjack");
    // }else{
    //     console.log("you've out of the game");
    // }

    // if else statement 

    // let age = 20

    // if(age < 21){
    //     console.log("You can not enter the club");

    // }else{
    //     console.log("welcome...");
    // }

    // ....................

// let  age= 101

// if (age < 100){
//     console.log("not eligible");
// }else if(age === 100) {
//     console.log("here is your birthday card from the king!");
// }else{
//     console.log("Not elible, already gotten one");
// }

// if else in our game 


// let firstCard = 10
// let secondCard = 11
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true 
// let message = "" 
// let  messageEl=document.getElementById("message-el")
// let cardsEl = document.getElementById("cards-el")
// let sumEl = document.getElementById("sum-el")

// function startGame(){
//     renderGame()
// }

// function renderGame(){
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
//     sumEl.textContent = "sum: " + sum
//  if(sum<=20){
//     message= "Do you want to draw a new card?"
//  }else if(sum === 21){
//     message="wohoo! you've got blackjack"
//     hasBlackJack = true
//  }else{
//     message="You're out of the game"
//     isAlive = false
//  }

// messageEl.textContent = message
// }

// function newCard(){
//     console.log("drawing a new card from deck!");

//     let card = 7

//     sum += card
//     startGame()
// }

// ......................


// let featuredPosts= [
//     "check out my Netflix clone",
//     "here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter at Norst."] 

// console.log(featuredPosts.length);


// adding and removing items from the array 

// let messages= [
//     "hey, how's it going ?",
//     "I'm great , thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages);


// messages.pop()
// console.log(messages);

// counting in js 
// for (let count=10; count<21; count+=1){
//     console.log(count);
// }

// for(let count=10; count<101; count+=10){
//     console.log(count);
// }

// let messages= [
//     "hey, how's it going ?",
//     "I'm great , thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "that's cool"
// ]

// for (let i = 0; i < messages.length; i++) {
//    console.log(messages);
// }

//  for loops array and dom 

// let player1Time = 102
// let player2Time = 107

// function getFasterRaceTime(){
//     if(player1Time < player2Time){
//         return player1Time
//     }else if (player2Time < player1Time) {
//         return player2Time
//     }else{
//         return player1Time
//     }
// }
// console.log(getFasterRaceTime());
// function getTotalRaceTime(){
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()
// console.log(totalTime);

// generating random Number 

// let randomNumber = Math.random() * 6
// console.log(randomNumber)


// math.floor

// let flooredNumber = Math.floor(123.234234242)
// console.log(flooredNumber);

// creating a dice using Math.random and Math.floor

// let randomNumber = Math.floor(Math.random()*6) +1
// console.log(randomNumber);

// using function 

// function rollDice(){
//     let randomNumber = Math.floor(Math.random() *6)+1
//     return randomNumber
// }
// console.log(rollDice());

// let firstCard = getRandomcard()
// let secondCard = getRandomcard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true 
// let message = "" 
// let  messageEl=document.getElementById("message-el")
// let cardsEl = document.getElementById("cards-el")
// let sumEl = document.getElementById("sum-el")

// function getRandomcard(){
//    let randomNumber= Math.floor(Math.random()*13)+1
// }

// function startGame(){
//     renderGame()
// }

// function renderGame(){
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
//     sumEl.textContent = "sum: " + sum
//  if(sum<=20){
//     message= "Do you want to draw a new card?"
//  }else if(sum === 21){
//     message="wohoo! you've got blackjack"
//     hasBlackJack = true
//  }else{
//     message="You're out of the game"
//     isAlive = false
//  }

// messageEl.textContent = message
// }

// function newCard(){
//     if (isAlive === true && hasBlackJack === false) {

//     let card = getRandomcard()

//     sum += card
//     cards.push(card)
//     renderGame()
//     }
// }

// logical and operator 


// let hasCompletedCourse = true
// let givesCertificate = true

// if(hasCompletedCourse=== true && givesCertificate === true){
//     generateCertificate()
// }

// function generateCertificate(){
//     console.log("Generating certificate....");
// }


// let hasSolvedChallenge= false
// let hasHintsLeft = false

// if(hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }

// function showSolution(){
//     console.log("Showing the solution....");
// }

// intro to objects 


// let person  ={
//     name: "peter",
//     age: 35,
//     country: "Norway"

// }
  
// function logData(){
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
// }

// logData()

// let hands = ["rock", "paper","scissor"]

// function getHand(){
//     let randomIndex = Math.floor(Math.random()*3 )
//     return hands[randomIndex]

// }
// console.log(getHand());


// function saveLead(){
//     console.log("button clicked");
// }

let inputbtn = document.getElementById("input-btn")

inputbtn.addEventListener("click", function(){
    console.log("Button clicked from the addEventlistner "); 
})