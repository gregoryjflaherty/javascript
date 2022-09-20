const btn = document.querySelector('button')
btn.addEventListener('mouseover', function() {
    console.log("Mouse is over")
    const height = Math.floor(Math.random() * window.innerHeight)
    const width = Math.floor(Math.random() * window.innerWidth)
    btn.style.left = `${height}px`;
    btn.style.top = `${width}px`;
})

btn.addEventListener('click', function() {
    btn.innerText = "YOU GOT ME!";
    document.body.style.backgroundColor = 'green';
})