document.getElementById('input').addEventListener('keyup', function (event) {

    const text = event.target.value;
    const delBtn = document.getElementById('dele');
    if (text === 'DeLEtE') {
        delBtn.removeAttribute('disabled');
    }
    else {
        delBtn.setAttribute('disabled',true);
    }
})


document.getElementById('dele').addEventListener('click',
    function(){
        const elem=document.getElementById('sinfo');
        elem.remove()
    }
)
