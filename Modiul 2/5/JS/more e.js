document.getElementById('more').addEventListener('click', function () {
    console.log('on click')
})

document.getElementById('more1').addEventListener('mouseenter', function () {
    console.log('On mouse Enter')
})

document.getElementById('more2').addEventListener('mousemove', function () {
    console.log('on mouse move')
})

document.getElementById('more3').addEventListener('focus', function () {
    console.log('on Focus1')
})

document.getElementById('more4').addEventListener('blur', function () {
    console.log('on Blur!')
})

document.getElementById('more5').addEventListener('keyup', function (event) {
    console.log(event.target.value)
})


