//step1: add event handler:
document.getElementById('btn').addEventListener('click', function (event) {

    //setp 2: prevent default behaviour; 
    event.preventDefault();

    //step 3: get the phone number;
    const number = document.getElementById('phone-num').value;

    //step 4: get the pin code;
    const pin = document.getElementById('pin').value;

    // THIS IS A TEMPORARY WAY TO ACCES.(no one should do this.)

    // step 5: allow user to log in;
    if (number === '01865628444' && pin === '2381') {
        window.location.href = '/home.html'

    }
    else if (number === '01616210277' && pin === '2006') {
        window.location.href = '/home.html'
    }
    else {
        alert('Please input the correct Number or pin.')
    }

})