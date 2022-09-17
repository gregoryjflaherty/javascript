// 2 Manipulate DOM 
const h1 = document.querySelector('h1')
h1.innerText //=> "Bears" 

// nested info 
const ul = document.querySelector('ul')
ul.innerText

h1.textContent //=> "Bears" 
// grabs formatting and any other text such as console.log
// is faster b/c it doesnt have to parse

console.log(h1.innerHTML)
// use innerHTML if you wanna use HTML tags 


// get user inputs 
let allInputs = document.querySelectorAll('input')
// allInputs[0].value
// 'taco'
// allInputs[2].value
// 'on'
// allInputs[3].value
// '351'

let a = document.querySelector('a')
// a.href
// 'http://www.dogsrule.com/retrievers'

let picture = document.querySelector('img')
// picture.src
// 'https://images.unsplash.com/photo-1595173425119-1c54835c1874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'

// can change these by doing 
// picture.src = https://image.here

let range = document.querySelector('input[type="range"]')
let maxRange = range.getAttribute('max')
//500
let minRange = range.getAttribute('min')
//100
let type = range.getAttribute('type')
//'range'

//SETTING ATTR
// let newMinRange = range.setAttribute('min', '-500')
// range.setAttribute('type', 'radio')


// Parent elements 
let firstLi = document.querySelector('li')

let firstParent = firstLi.parentElement
//  < ul >​…​</ul >
let secondParent = firstLi.parentElement.parentElement
// < body >​…​</body >
let thirdParent = firstLi.parentElement.parentElement.parentElement
// < html lang = "en" >​<head>​…​</head>​<body>​…​</body>​</html >​
let firstSibling = firstLi.nextElementSibling
let thirdLi = firstLi.nextElementSibling.nextElementSibling

let firstUl = document.querySelector('ul')
let allChildren = ul.children
// HTMLCollection(3)
// [li.special, li, li.special]0: li.special1: li2: li.speciallength: 3[[Prototype]]
// : HTMLCollection
let firstChild = ul.children[0]
let firstChildText = ul.children[0].innerText
//'First item'

// reading them 
const allLis = document.querySelectorAll('li')
for(let i = 0; i < allLis.length; i++) {
    console.log(allLis[i].innerText)
}

//changing them 
// for(let i = 0; i < allLis.length; i++) {
//     allLis[i].innerText = 'Jackson is the best dog!!!'
// }

// for (let li of allLis) {
//     li.innerHTML = 'JACKSON IS THE BEST DOG!</b>'
// }


//STYLES 
// good way to set but not a good way to check current styles unless 
// done in line 
// h1.style.color = "red"
let p1 = document.querySelector('p')
p1.style.color = 'purple'
p1.style.backgroundColor = 'yellow'
p1.style.fontSize = '20px'


// const colors = ['red', 'orange', 'green', 'yellow', 'blue', 'purple']
// allLis.forEach((li, idx) => {
//     const color = colors[idx]
//     li.style.color = color
// })


//getComputedStyle
firstLi.style.color 
// ""
// does not show any styles from a stylesheet 
let styles = getComputedStyle(firstLi)
styles.color
// 'rgb(255, 0, 0)'

const firstTodo = document.querySelector('#todos .todo')

// long way 
// firstTodo.style.color = 'black'
// firstTodo.style.textDecoration = 'line-through'
// firstTodo.style.opacity = "50%"

//Using a class
firstTodo.getAttribute('class')
// 'todo'
firstTodo.setAttribute('class', 'done')
//changes it to done style 

firstTodo.classList.remove('done')
// makes it basic text - no styles
firstTodo.classList.add('done')
// add it back 
firstTodo.classList.toggle('done')
//false
firstTodo.classList.toggle('done')
//true
firstTodo.classList.toggle('done')
//false
firstTodo.classList.toggle('done')
//true
firstTodo.classList.toggle('done')
//false
firstTodo.classList.toggle('done')
//true

let newh2 = document.createElement('h2')
// creates an object
// console.dir(newh2)
newh2.innerText = "JACKIE"
newh2.classList.add('special')

// how to get it into the DOM ??? 
const section = document.querySelector('section')
section.appendChild(newh2)
// will do to end of children 

const newImg = document.createElement('img')
newImg.src = "https://images.unsplash.com/photo-1602241628512-459cdd3234fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
newImg.style.width = "300px"
document.body.appendChild(newImg)

const newLink = document.createElement("a")
// anchor tag 
newLink.innerText = "FASTIFY"
newLink.href = "https://www.youtube.com/watch?v=xdzqcG5dS7Q"
p1.appendChild(newLink)