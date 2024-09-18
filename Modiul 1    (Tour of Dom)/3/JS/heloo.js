// console.log('Hello, friends!. I am forme JavaScript.')
// console.log(document)

const places = document.getElementById('Places').innerText             //Element
console.log(places)



const liitens = document.getElementsByClassName("liitem")  //Elements------>s
for (const liitem of liitens) {
    console.log(liitem.innerText)
}