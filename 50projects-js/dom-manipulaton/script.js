// //GetElementById()

// const title=  document.getElementById('main-heading')

// console.log(title);

// //GetElementByClassName

//  const list = document.getElementsByClassName('list-items')

//  console.log(list);

// GetElementByTagName()

// const listItems = document.getElementsByTagName('li')

// console.log('listItems');

//querySelector()

//  const container = document.querySelector('div');
//  console.log(container);

//  querySelectorAll()

// const container = document.querySelectorAll('div');
// console.log(container);

// const title = document.querySelector('#main-heading');

// title.style.color = 'red';
// console.log(title);

// const ul = document.querySelector("ul")
// const li = document.createElement("li")

// ul.appendChild(li)

// const firstListItem = document.querySelector(`.list-items`)

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// li.innerText = 'X-men';

// li.classList.add('list-items');

// const buttonTwo = document.querySelector(".btn-2")

// function alertBtn() {
//   alert("I also love JavaScript")
// }

// buttonTwo.addEventListener("click", alertBtn)

// function changeBgColor() {
//   newBackgroundColor.style.newBackgroundColor = "blue"
// };

// newBackgroundColor.addEventListener("mouseover", changeBgColor)


// const revealBtn = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content');

// function revealcontent(){
//     if(hiddenContent.classList.contains('reveal-btn')){
//         hiddenContent.classList.remove('reveal-btn')

//     }else{
//         hiddenContent.classList.add('reveal-btn')
//     }
// }

// revealBtn.addEventListener('click', revealcontent);


// window.addEventListener("click", function(){
//     console.log('Window');
// },true);

// document.addEventListener('click', function(){
//     console.log('Document');
// },true);

// document.querySelector('.div2').addEventListener('click', function(){
//     console.log('DIV 2');
// },true);

// document.querySelector('button').addEventListener("click", function(e){
//     console.log(e.target.innerText = 'clicked!');
// },false)


// document.querySelector('#basketball').addEventListener('click', function(e) {
//     console.log('football is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#basketball').addEventListener('click', function(e) {
//     console.log('basketball is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#boxing').addEventListener('click', function(e) {
//     console.log('boxing is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#tennis').addEventListener('click', function(e) {
//     console.log('tennis is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#golf').addEventListener('click', function(e) {
//     console.log('golf is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#sports').addEventListener('click', function(e){
//     console.log(e.target.getAttribute('id')+ ' is clicked');

//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// })

let btn = document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person:  ` Albert Einstein`
}, {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person: ` Aristotle`
},{
    quote: `"Yout time is limited, so don't waste it living someone else's life."`,
    person: ` Steve Jobs`
},{
    quote: `"The Journey of a thousand miles begins with one step"`,
    person:`Lao Tzu`
},{
    quote: `"The Journey of a thousand miles begins with one step"`,
    person:`Lao Tzu`
}
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

