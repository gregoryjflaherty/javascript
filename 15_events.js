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