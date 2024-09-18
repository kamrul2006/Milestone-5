//  Where to add:
const li = document.getElementById('ful')
// console.log(li)

//What To add:
const l = document.createElement('li')
l.innerText = 'jamyet sibir'

// Adding the child:
li.appendChild(l)


//--------------------------------------------- adding a Section: -----------------------------------------------------

//    1.
const main = document.getElementById('main')


//    2.
const sec = document.createElement('section')

const h2 = document.createElement('h1' )
h2.innerText='My food List: '
sec.appendChild(h2)

const ul= document.createElement('ul')



const lis = document.createElement('li')
lis.innerText='Vat'
ul.appendChild(lis);

const list = document.createElement('li')
list.innerText='Biriyani'
ul.appendChild(list);

const lt = document.createElement('li')
lt.innerText="Gorur gostow"
ul.appendChild(lt);

const ltt = document.createElement('li')
ltt.innerText="Doy"
ul.appendChild(ltt)

sec.appendChild(ul)


main.appendChild(sec)


// ------------------------------------------- adding a section 2. ----------------------------------------

const sect= document.createElement('section')
sect.innerHTML=`
<h1  class="hh">My favorite flower: </h1>
        <ul>
            <li>Flower 1</li>
            <li>Flower 2</li>
            <li>Flower 3</li>
            <li>Flower 4</li>
            <li>Flower 5</li>
        </ul>
`


main.appendChild(sect)