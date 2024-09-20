// display add money form:
document.getElementById('addmo').addEventListener('click', function () {
    const form = document.getElementById('addform');
    form.removeAttribute('style')

    // hide pay bill:
    const bform = document.getElementById('billform');
    bform.style.display = 'none'

    //hide out form
    const formp = document.getElementById('outform');
    formp.style.display = "none"

    //hide send form:
    const sform = document.getElementById('sendform');
    sform.style.display = 'none'

    //hide recent payments.
    const payHistory = document.getElementById('payhis');
    payHistory.style.display = "none"

    // hide Bonus form
    const buform = document.getElementById('Bonusform');
    buform.style.display = 'none'


})

// display out form:
document.getElementById('outmo').addEventListener('click', function () {
    const form = document.getElementById('outform');
    form.removeAttribute('style')

    // hide pay bill:
    const bform = document.getElementById('billform');
    bform.style.display = 'none'

    //hide send form:
    const sform = document.getElementById('sendform');
    sform.style.display = 'none'

    // hide add form;
    const formp = document.getElementById('addform');
    formp.style.display = "none"

    // hide recent payment:
    const payHistory = document.getElementById('payhis');
    payHistory.style.display = "none"

    // hide Bonus form
    const buform = document.getElementById('Bonusform');
    buform.style.display = 'none'



})

// display send form:
document.getElementById('sendmo').addEventListener('click', function () {
    const sform = document.getElementById('sendform');
    sform.removeAttribute('style')

    // hide pay bill:
    const bform = document.getElementById('billform');
    bform.style.display = 'none'

    // hide add form;
    const form = document.getElementById('addform');
    form.style.display = "none"

    //hide out form
    const formp = document.getElementById('outform');
    formp.style.display = "none"

    // hide recent payment:
    const payHistory = document.getElementById('payhis');
    payHistory.style.display = "none"

    // hide Bonus form
    const buform = document.getElementById('Bonusform');
    buform.style.display = 'none'


})

// display Bill form:
document.getElementById('billBtn').addEventListener('click', function () {
    const bform = document.getElementById('billform');
    bform.removeAttribute('style')

    //hide send form:
    const sform = document.getElementById('sendform');
    sform.style.display = 'none'

    // hide add form;
    const form = document.getElementById('addform');
    form.style.display = "none"

    //hide out form
    const formp = document.getElementById('outform');
    formp.style.display = "none"

    // hide recent payment:
    const payHistory = document.getElementById('payhis');
    payHistory.style.display = "none"

    // hide Bonus form
    const buform = document.getElementById('Bonusform');
    buform.style.display = 'none'


})

// display Bonus form:
document.getElementById('BonusBtn').addEventListener('click', function () {
    const buform = document.getElementById('Bonusform');
    buform.removeAttribute('style')

    //hide send form:
    const sform = document.getElementById('sendform');
    sform.style.display = 'none'

    // hide add form;
    const form = document.getElementById('addform');
    form.style.display = "none"

    //hide out form
    const formp = document.getElementById('outform');
    formp.style.display = "none"

    // hide recent payment:
    const payHistory = document.getElementById('payhis');
    payHistory.style.display = "none"

    // hide pay bill:
    const bform = document.getElementById('billform');
    bform.style.display = 'none'

})

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

    // hide pay bill:
    const bform = document.getElementById('billform');
    bform.style.display = 'none'

    // hide Bonus form
    const buform = document.getElementById('Bonusform');
    buform.style.display = 'none'


})
