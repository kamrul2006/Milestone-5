//  option:1
function Hand() {
    console.log('button clicked')
    const Hns = document.getElementById('ii');
    Hns.innerText = 'Handled by Function.'
}


//option:2
document.getElementById('jj').addEventListener('click', function () {
    const hs = document.getElementById('ii')
    hs.innerText = 'Text updated by  addEvenListener'
})

// option:2           recap:
document.getElementById('up').addEventListener('click', function () {
    const inpt = document.getElementById('inp')
    const InpT = inpt.value;

    const pt = document.getElementById('inputTextDisplay')
    pt.innerText = InpT;
    inpt.value = ''
})

