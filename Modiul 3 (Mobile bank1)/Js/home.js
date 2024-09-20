//--------------------------- add money to account:-------------------------

// display add money form:
document.getElementById('addmo').addEventListener('click', function () {
    const form = document.getElementById('addform');
    form.removeAttribute('style')

    //hide out form
    const formp = document.getElementById('outform');
    formp.style.display = "none"

    //hide send form:
    const sform = document.getElementById('sendform');
    sform.style.display = 'none'

    //hide recent payments.
    const payHistory = document.getElementById('payhis');
    payHistory.style.display = "none"


})

document.getElementById('addbtn').addEventListener('click', function (event) {
    event.preventDefault();
    const form = document.getElementById('addform');
    // grt money to add,
    const addMonyInput = document.getElementById('inputAmm').value;
    const moneyToAdd = parseFloat(addMonyInput);

    console.log(moneyToAdd)

    //get the pin,
    const pin = document.getElementById('pin').value;

    // verify the pin,(wrong way to verify:  {it is only for lerner.}  )
    if (pin === '2381') {

        // get the current ball:
        const cb = document.getElementById('curbal').innerText;
        const currentBall = parseFloat(cb)

        console.log(currentBall)

        // add total amount:
        const NewBall = currentBall + moneyToAdd
        console.log(NewBall)

        // Update ball:
        document.getElementById('curbal').innerText = NewBall

    }
    else {
        alert('Failed to add money. Pid did not matched.')
    }
})

//--------------------------- cash out money from account:-------------------------

// display out form:
document.getElementById('outmo').addEventListener('click', function () {
    const form = document.getElementById('outform');
    form.removeAttribute('style')

    //hide send form:
    const sform = document.getElementById('sendform');
    sform.style.display = 'none'

    // hide add form;
    const formp = document.getElementById('addform');
    formp.style.display = "none"

    // hide recent payment:
    const payHistory = document.getElementById('payhis');
    payHistory.style.display = "none"

})

document.getElementById('outbtn').addEventListener('click', function (event) {
    event.preventDefault();
    // grt money to add,
    const outMonyInput = document.getElementById('outMoneyInput').value;
    const moneyToOut = parseFloat(outMonyInput);

    //get the pin,
    const pin = document.getElementById('pin1').value;

    // verify the pin,(wrong way to verify:  {it is only for lerner.}  )
    if (pin === '2381') {

        // get the current ball:
        const cb = document.getElementById('curbal').innerText;
        const currentBall = parseFloat(cb)
        if (moneyToOut > currentBall) {
            alert('You do not have enough balance.')
        }
        else {
            // add total amount:
            const NewBall = currentBall - moneyToOut
            console.log(NewBall)
            // Update ball:
            document.getElementById('curbal').innerText = NewBall

        }

    }
    else {
        alert('Failed to add money. Pid did not matched.')
    }
})

//--------------------------- Send money from account:-------------------------

// display send form:
document.getElementById('sendmo').addEventListener('click', function () {
    const sform = document.getElementById('sendform');
    sform.removeAttribute('style')

    // hide add form;
    const form = document.getElementById('addform');
    form.style.display = "none"

    //hide out form
    const formp = document.getElementById('outform');
    formp.style.display = "none"

    // hide recent payment:
    const payHistory = document.getElementById('payhis');
    payHistory.style.display = "none"

})

document.getElementById('sendbtn').addEventListener('click', function (event) {
    event.preventDefault();
    // grt money to add,
    const sendMonyInput = document.getElementById('sendMoneyInput').value;
    const moneyToSend = parseFloat(sendMonyInput);

    //get the pin,
    const pin = document.getElementById('pin2').value;

    // verify the pin,(wrong way to verify:  {it is only for lerner.}  )
    if (pin === '2381') {

        // get the current ball:
        const cb = document.getElementById('curbal').innerText;
        const currentBall = parseFloat(cb)
        if (moneyToSend > currentBall) {
            alert('You do not have enough balance.')
        }
        else {
            // add total amount:
            const NewBall = currentBall - moneyToSend
            console.log(NewBall)
            // Update ball:
            document.getElementById('curbal').innerText = NewBall

        }

    }
    else {
        alert('Failed to add money. Pid did not matched.')
    }
})



// ----------------------------- recent Payments ------------------------

// display recent Payments:
document.getElementById('trans').addEventListener('click', function () {
    const form = document.getElementById('payhis');
    form.removeAttribute('style')

    // hide add form;
    const formp = document.getElementById('addform');
    formp.style.display = "none"

    // hide out form:
    const payHistory = document.getElementById('outform');
    payHistory.style.display = "none"

    //hide send form:
    const sform = document.getElementById('sendform');
    sform.style.display = 'none'

})