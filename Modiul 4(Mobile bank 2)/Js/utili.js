

function GetValue(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;

}

function GetPFValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputgValue = parseFloat(inputValue);
    return inputgValue;

}


function GetText(id) {
    const Text = document.getElementById(id).innerText
    return Text

}

function GetPFText(id) {
    const Text = document.getElementById(id).innerText
    const pftext = parseFloat(Text);
    return pftext;

}