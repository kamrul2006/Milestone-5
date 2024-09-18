const fontS = document.getElementById('ful')
fontS.childNodes
console.log(fontS.childNodes[6])
console.log(fontS.childNodes[7])
console.log(fontS.childNodes[8])


const li = document.createElement('li')
li.innerText = 'Jamayet'
fontS.appendChild(li)

const li1 = document.createElement('li')
li1.innerText = 'Shibir'
fontS.appendChild(li1)