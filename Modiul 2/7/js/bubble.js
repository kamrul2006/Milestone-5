document.getElementById('i2').addEventListener('click', function (Event) {
    console.log('item 2 clicked')
    Event.stopPropagation();    //bubble will stop in the same digit ia all,
})

document.getElementById('i2').addEventListener('click', function (Event) {
    console.log('item 2 2nd clicked')
    Event.stopImmediatePropagation();    //bubblle will stop immediately,
})

document.getElementById('i2').addEventListener('click', function (Event) {
    console.log('item 2 3rd clicked')
})

document.getElementById('i2').addEventListener('click', function (Event) {
    console.log('item 2 4rt clicked')
})


document.getElementById('lc').addEventListener('click', function () {
    console.log('List conteiner clicked')
})

document.getElementById('lul').addEventListener('click', function () {
    console.log('UL clicked')
})

document.getElementById('body').addEventListener('click', function () {
    console.log('HTML body clicked')
})
