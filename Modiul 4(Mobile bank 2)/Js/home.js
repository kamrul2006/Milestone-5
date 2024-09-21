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

    const div = document.createElement('div');
    div.innerHTML = `
                <div class=" flex  mt-4 px-2 py-2 bg-gray-100 rounded-2xl">
                <div class="flex-none">
                    <button class="btn btn-circle btn-ghost">
                        <img class="w-12 border border-gray-400 p-2 rounded-[50%]" src="img/ico/paid.png" alt="">
                    </button>
                </div>

                <div class="flex-1 ml-2">
                    <a class="font-semibold text-stone-400 text-xl">${addMonyInput} ${'৳ Added'}</a>
                    <p class="text-xs">Today 01:44 AM</p>
                </div>
                
                <div class="flex-none">
                    <button class="btn btn-circle btn-ghost">
                        <img class="w-4" src="img/ico/vm.png" alt="">
                    </button>
                </div>
            </div>
    `;

    document.getElementById('payhis').appendChild(div)
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


    const div = document.createElement('div');
    div.innerHTML = `
                <div class=" flex  mt-4 px-2 py-2 bg-gray-100 rounded-2xl">
                <div class="flex-none">
                    <button class="btn btn-circle btn-ghost">
                        <img class="w-12 border border-gray-400 p-2 rounded-[50%]" src="img/ico/paid.png" alt="">
                    </button>
                </div>

                <div class="flex-1 ml-2">
                    <a class="font-semibold text-stone-400 text-xl">${outMonyInput} ${'৳ Withdrew.'}</a>
                    <p class="text-xs">Today 01:44 AM</p>
                </div>
                
                <div class="flex-none">
                    <button class="btn btn-circle btn-ghost">
                        <img class="w-4" src="img/ico/vm.png" alt="">
                    </button>
                </div>
            </div>
    `;

    document.getElementById('payhis').appendChild(div)

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


    const div = document.createElement('div');
    div.innerHTML = `
            <div class=" flex  mt-4 px-2 py-2 bg-gray-100 rounded-2xl">
            <div class="flex-none">
                <button class="btn btn-circle btn-ghost">
                    <img class="w-12 border border-gray-400 p-2 rounded-[50%]" src="img/ico/paid.png" alt="">
                </button>
            </div>

            <div class="flex-1 ml-2">
                <a class="font-semibold text-stone-400 text-xl">${sendMonyInput} ${'৳ Sent.'}</a>
                <p class="text-xs">Today 01:44 AM</p>
            </div>
            
            <div class="flex-none">
                <button class="btn btn-circle btn-ghost">
                    <img class="w-4" src="img/ico/vm.png" alt="">
                </button>
            </div>
        </div>
`;

    document.getElementById('payhis').appendChild(div)

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


    const div = document.createElement('div');
    div.innerHTML = `
                <div class=" flex  mt-4 px-2 py-2 bg-gray-100 rounded-2xl">
                <div class="flex-none">
                    <button class="btn btn-circle btn-ghost">
                        <img class="w-12 border border-gray-400 p-2 rounded-[50%]" src="img/ico/paid.png" alt="">
                    </button>
                </div>

                <div class="flex-1 ml-2">
                    <a class="font-semibold text-stone-600 text-xl">${moneyToPay} ${'৳ Bill Paid.'}</a>
                    <p class="text-xs">Today 01:44 AM</p>
                </div>
                
                <div class="flex-none">
                    <button class="btn btn-circle btn-ghost">
                        <img class="w-4" src="img/ico/vm.png" alt="">
                    </button>
                </div>
            </div>
    `;

    document.getElementById('payhis').appendChild(div)

})

//--------------------------- Get Bonus to account:-------------------------

document.getElementById('BonusAddBtn').addEventListener('click', function (event) {
    event.preventDefault();
    // grt money to Pay,
    const moneyToGet = GetValue('CouponInput')

    //get the pin,
    const pin = GetValue('pin5');

    // verify the pin,(wrong way to verify:  {it is only for lerner.}  )
    if (pin === '2381') {

        // get the current ball:
        // const cb = document.getElementById('curbal').innerText;
        const currentBall = GetPFText('curbal')

        if (moneyToGet.includes('@')) {

            // add total amount:
            const NewBall = currentBall + 100
            console.log(NewBall)
            // Update ball:
            document.getElementById('curbal').innerText = NewBall



        }
        else {
            alert('Your Coupon number is not correct.')

        }

    }
    else {
        alert('Failed to add money. Pid did not matched.')
    }


    const div = document.createElement('div');
    div.innerHTML = `
                <div class=" flex  mt-4 px-2 py-2 bg-gray-100 rounded-2xl">
                <div class="flex-none">
                    <button class="btn btn-circle btn-ghost">
                        <img class="w-12 border border-gray-400 p-2 rounded-[50%]" src="img/ico/paid.png" alt="">
                    </button>
                </div>

                <div class="flex-1 ml-2">
                    <a class="font-semibold text-stone-400 text-xl">${'100'} ${'৳ From Coupon.'}</a>
                    <p class="text-xs">Today 01:44 AM</p>
                </div>
                
                <div class="flex-none">
                    <button class="btn btn-circle btn-ghost">
                        <img class="w-4" src="img/ico/vm.png" alt="">
                    </button>
                </div>
            </div>
    `;

    document.getElementById('payhis').appendChild(div)

})

// ----------------------------- recent Payments ------------------------




