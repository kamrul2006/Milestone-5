

/**----- 2. ------------------   getElementById -------------------------*/

const title = document.getElementById('Places')
// console.log(title)


//              INNERTEXT -----------> শুধু ভিতরের লেখা দেখাবে(কমেন্ট করা থাকলে দেখাবে না)
const text = document.getElementById('Places').innerText
// console.log(text)


//            INNERHTML  ----------------->  ভিতরের HTML ট্যাগ গুলি দেখাবে কমেন্ট সহ।
const html = document.getElementsByClassName('FevPlace').innerHTML
// console.log(html)