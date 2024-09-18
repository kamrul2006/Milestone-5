// console.log('Hello, friends!. I am forme JavaScript.')
// console.log(document)



/**--- 1. --------------------   getElementByTagName  -------------------------*/
const tagName = document.getElementsByTagName('h1')
// console.log(tagName)



/**----- 2. ------------------   getElementById -------------------------*/
const places = document.getElementById('Places').innerText             //Element
// console.log(places)



/**------- 3. ----------------   getElementsByClassName-------------------------*/
const liitens = document.getElementsByClassName("liitem")  //Elements ------> s
// for (const liitem of liitens) {
//     console.log(liitem.innerText)
// }


/**------ 4. -----------------   QuerySelector -------------------------*/
const SomeLi = document.querySelector('.FevPlace li')   // শুধু ১ম টাঃ, 
// console.log(SomeLi)


/**-------- 5. ---------------   QuerySelectorAll -------------------------*/

const someLi = document.querySelectorAll('.FevPlace li') // সব গুলি, 
// console.log(someLi)
// for (const li of someLi) {
//     console.log(li.innerText)
// }