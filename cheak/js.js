document.getElementById('pbtn').addEventListener('click', function () {
    const text = document.getElementById('com').value;

    if (text == '') {
        alert('Pleas input anything !')
    }
    else {
        const com = document.createElement('div')
        com.innerHTML = `
    
        <div style="display: flex; align-items: center; justify-items: center; justify-content: space-between; border: 2px solid red; padding: 10px; margin: 10px; border-radius: 30px;">
            <div>
                <h1>${text}</h1>
                <p>Today, 10:15 pm</p>
            </div>
            <img width="20px" src="vm.png" alt="">

        </div>
    `
        document.getElementById('ccc').appendChild(com)
    }

})