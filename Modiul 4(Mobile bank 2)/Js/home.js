//--------------------------- add money to account:-------------------------

document.getElementById('addbtn').addEventListener('click', function (event) {

    //    prevent default behavior; 
    event.preventDefault();

    // get money to add,
    const addMonyInput = GetValue('inputAmm')
    const moneyToAdd = parseFloat(addMonyInput);


    //get the pin,
    const pin = GetValue('pin')

    // verify the pin,(wrong way to verify:  {it is only for lerner.}  )
    if (pin === '2381') {

        // get the current ball:
        const cb = GetText('curbal')
        const currentBall = parseFloat(cb)
        console.log(currentBall)


        // add total amount:
        const NewBall = currentBall + moneyToAdd

        // Update ball:
        document.getElementById('curbal').innerText = NewBall


    }
    else {
        alert('Failed to add money. Pid did not matched.')
    }
})

//--------------------------- cash out money from account:-------------------------

document.getElementById('outbtn').addEventListener('click', function (event) {

    //    prevent default behavior; 
    event.preventDefault();

    // get money to out,
    const outMonyInput = GetValue('outMoneyInput')
    const moneyToOut = parseFloat(outMonyInput);

    //get the pin,
    const pin = GetValue('pin1')

    // verify the pin,(wrong way to verify:  {it is only for lerner.}  )
    if (pin === '2381') {

        // get the current ball:
        const cb = GetText('curbal')
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

document.getElementById('sendbtn').addEventListener('click', function (event) {
    event.preventDefault();
    // grt money to add,
    const sendMonyInput = GetValue('sendMoneyInput');
    const moneyToSend = parseFloat(sendMonyInput);

    //get the pin,
    const pin = GetValue('pin2');

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

//--------------------------- Pay bill from account:-------------------------

document.getElementById('payBtn').addEventListener('click', function (event) {
    event.preventDefault();
    // grt money to Pay,
    const moneyToPay = GetPFValue('PayInput')

    //get the pin,
    const pin = GetValue('pin3');

    // verify the pin,(wrong way to verify:  {it is only for lerner.}  )
    if (pin === '2381') {

        // get the current ball:
        // const cb = document.getElementById('curbal').innerText;
        const currentBall = GetPFText('curbal')

        if (moneyToPay > currentBall) {
            alert('You do not have enough balance.')
        }
        else {
            // add total amount:
            const NewBall = currentBall - moneyToPay
            console.log(NewBall)
            // Update ball:
            document.getElementById('curbal').innerText = NewBall

        }

    }
    else {
        alert('Failed to add money. Pid did not matched.')
    }
})

//--------------------------- Get Bonus to account:-------------------------

document.getElementById('BonusAddBtn').addEventListener('click', function (event) {
    event.preventDefault();
    // grt money to Pay,
    const moneyToGet = GetPFValue('CouponInput')

    //get the pin,
    const pin = GetValue('pin5');

    // verify the pin,(wrong way to verify:  {it is only for lerner.}  )
    if (pin === '2381') {

        // get the current ball:
        // const cb = document.getElementById('curbal').innerText;
        const currentBall = GetPFText('curbal')

        if (typeof moneyToGet !== 'number' ) {
            alert('Your Coupon number is not correct.')
        }
        else {
            // add total amount:
            const NewBall = currentBall + 100
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




