// done in browser console 

// console.dir(document)
// see document object 

//document.images
// all images 

//document.all 
// all html tags 

//1 - select
    // document.getElementById('bear-photo')
    // returns one
    // => <img id="bear-photo" src="https://images.unsplash.com/photo-1595173425119-1c54835c1874?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60" alt="">
    // save to variable
    // const img = document.getElementById('bear-photo')
    // console.dir(img)  => return document object

    //document.getElementsByTagName()
    // returns one or more
    // document.getElementsByTagName('input') => HTMLCollection(3) [input, input, input]
    // not an array but can do array-ish things- HTML collection
    // can access elements and iterate thats it

    // document.getElementsByClassName()
    // const ul = document.getElementsByClassName('ul')
    // ul.getElementsByClassName('special')
    // narrowed down search

    //document.querySelector();
    // selected by css styled selector - returns first element
    //document.querySelector('#bear-photo')
    //document.querySelector('.special')
    //document.querySelector('h1')
    // select polar list item
    // document.querySelector('body section ul li.special')
    // get password
    // document.querySelector('input[type="password"]')

    //document.querySelectorAll()
    // document.querySelectorAll('input')
    
// 2 - manipulate 
