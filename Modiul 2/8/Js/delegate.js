// const items = document.getElementsByClassName('item');
// for (const item of items) {
//     item.addEventListener('click', function (event) {
//         // console.log(item);
//         // console.log(event.target);
//         // console.log(event.target.parentNode);
//         event.target.parentNode.removeChild(event.target)
//     })
// }  


document.getElementById('ListCon').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target)
})


document.getElementById('add').addEventListener('click', function () {
    const listCon=document.getElementById('ListCon');
    const li = document.createElement('li');
    li.innerText='Brand new item added'
    li.classList.add('item');
    listCon.appendChild(li)
})