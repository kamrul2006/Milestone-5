
//Option:2
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

//Option:3.1
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
const make_Blue = document.getElementById('MakeBlue')
make_Blue.onclick = makeBlue  //এই ক্ষেত্রে কল করা () যাবে না।

//Option:3.2
const make_p = document.getElementById('Makep')
make_p.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'purple'
}

//Option:4.1
function makePink() {
    document.body.style.backgroundColor = 'pink'
}
const make_Pink = document.getElementById('MakePink')
make_Pink.addEventListener('click', makePink)

//Option:4.2
const make_Green = document.getElementById('MakeGreen')
make_Green.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
})

//Option:4.3      (Will use Mostly)
document.getElementById('MakeTomato').addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'tomato'
})



