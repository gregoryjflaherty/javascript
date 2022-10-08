// mdn to full list of events

//  the thing        event type      code to run 
//  ---------        ----------       ----------   
//   button            click          change color
//   input          hit return key     get search results
//   image            mouseover       display img caption

const btn = document.querySelector('button')

// btn.onclick = function(){
//     console.log("You clicked me")
// }

btn.addEventListener('click', function(){
    alert("Clicked you did")
})

btn.addEventListener('click', function(){
    console.log("Second thing")
})

btn.addEventListener('mouseover', function(){
    btn.innerText = "YEAH here"
})

btn.addEventListener('mouseout', function(){
    btn.innerText = "Click me"
})

window.addEventListener('scroll', function(){
    console.log('STOP SCROLLING')
})

const colors = [
    'red',
    'orange',
    'green',
    'yellow',
    'blue',
    'purple',
    'indigo',
    'violet'
]

const h1 = document.querySelector('h1')
h1.addEventListener('mouseover', function(evt){
    console.log(evt)
}) // event object 


const changeColor = function(){
    const h1 = document.querySelector('h1')
    h1.style.color = this.style.backgroundColor
}
const container = document.querySelector('#boxes')
for(let color of colors){
    const box = document.createElement('div')
    box.style.backgroundColor = color;
    box.classList.add('box')
    container.appendChild(box)
    box.addEventListener('click', changeColor)
}

document.body.addEventListener('keypress', function(e){
    console.log(e)
})

const input = document.querySelector('#username')
input.addEventListener('keydown', function(e) {console.log("Keydown!")})
input.addEventListener('keyup', function(e) {console.log("Keyup!")})
input.addEventListener('keypress', function(e) {console.log("Keypress!")})

const addItemInput = document.querySelector('#addItem')
const itemsUL = document.querySelector('#items')

addItemInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        if(!this.value) return;
        //add new item to list
        const newItemText = this.value
        const newItem = document.createElement('li')
        newItem.innerText = newItemText
        itemsUL.appendChild(newItem)
        this.value = '';
    }
})

const creditCardInput = document.querySelector('#cc')
const termsCheckBox = document.querySelector('#terms')
const veggieSelect = document.querySelector('#veggie')
const form = document.querySelector('#signup-form')
form.addEventListener('submit', function (e) {
    // e.preventDefault(); // prevents reloading
    // alert("SUBMITTED THE FORM")
    // console.log('cc', creditCardInput.value)
    // console.log('terms', termsCheckBox.checked)
    // console.log('veggies', veggieSelect.value)
    //send form to database
    // append something to page using form data
})

const formData = {}


// HARDCODED
// creditCardInput.addEventListener('input', e => {
//     console.log('Credit card changed', e)
//     formData['cc'] = e.target.value;
// })

// veggieSelect.addEventListener('input', e => {
//     console.log('Veggie changed', e)
//     formData['veggie'] = e.target.value;
// })

// termsCheckBox.addEventListener('input', e => {
//     console.log('Checkbox changed', e)
//     formData['agreedToTerms'] = e.target.checked;
// })

for(let input of [creditCardInput, termsCheckBox, veggieSelect]){
    input.addEventListener('input', ({target}) => {
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value
        console.log(formData)
    })
}