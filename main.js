let tip = 0;
function pegarValor(num) {
    tip = parseFloat(num);
}

function valorCustom() {
    var custom = parseFloat(document.getElementById('input-custom').value);
    tip = custom / 100;
}

function mostrarValor() {
    const bill = parseFloat(document.getElementById('input-bill').value);
    const people = parseFloat(document.getElementById('input-people').value);
    const tipAmount = bill * tip;
    const tipResult = tipAmount / people;
    const totalResult = (bill + tipAmount) / people;
    const inputPeople = document.getElementById('input-people');
    const erro = document.getElementById('errorMessage');
    if (isNaN(people) || people == 0) {
        erro.style.visibility = "visible";
        inputPeople.style.border = "2px solid rgb(232, 11, 11)"
    } else {
        document.getElementById('tip-result').innerHTML = ('$' + tipResult.toFixed(2));
        document.getElementById('total-result').innerHTML = ('$' + totalResult.toFixed(2));
        erro.style.visibility = "hidden";
        inputPeople.style.border = "none"
    }
    if(isNaN(totalResult)) {
        document.getElementById('total-result').innerHTML = "$0.00";
        document.getElementById('tip-result').innerHTML = "$0.00";
    }
}

function reset() {
    document.getElementById('input-bill').value = '';
    document.getElementById('input-people').value = '';
    document.getElementById('input-custom').value = '';
    document.getElementById('errorMessage').style.visibility = "hidden";
    document.getElementById('input-people').style.border = "none";
    document.getElementById('tip-result').innerHTML = '$0.00';
    document.getElementById('total-result').innerHTML = '$0.00';
}