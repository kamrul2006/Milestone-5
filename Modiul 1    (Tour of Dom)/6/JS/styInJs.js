const sections = document.querySelectorAll('section')
// console.log(section)

for (const section of sections) {
    // console.log(section)

    section.style.border = '2px solid blue'
    section.style.borderRadius = '20px '
    section.style.marginTop = '10px'
    section.style.padding = '10px'
    section.style.backgroundColor = 'lightblue'
}



// const liitem = document.querySelectorAll('.liitem')
// // console.info(liitem)

// for(const li of liitem){
//     // console.log(li)

//     li.style.marginTop='10px'
//     li.style.textAlign='center'
//     li.style.fontSize='30px'
// }



const ulitem = document.getElementById('ful')
// console.log(ulitem)

ulitem.style.backgroundColor = 'yellow'
ulitem.style.textAlign = 'justify'


/** --------------------------- ------------- Add class ------------------ ------------------*/

ulitem.classList.add('border')

// ----------------------------------------  remove class ---------------------------------

ulitem.classList.remove('fontS')
