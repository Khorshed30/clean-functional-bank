
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const filedTagTexValue = fieldTag.innerText;
    const value = parseFloat(filedTagTexValue);
    return value;
}

function updateTotal(fieldId, amount) {
    /* const totalTag = document.getElementById(fieldId);
    const previousTotalText = totalTag.innerHTML;
    const previousTotal = parseFloat(previousTotalText); */
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}

function updateBalance(amount, isAdding) {
    /* const balanceTag = document.getElementById('balance-total');
    const balanceText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceText); */
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;

}

document.getElementById('deposite-btn').addEventListener('click', function () {
    const amount = getInputValue('deposite-input')
    if (amount > 0) {
        updateTotal('deposite-total', amount);
        updateBalance(amount, true);
    }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount<=balance) {
        updateTotal('withdraw-amount', amount)
        updateBalance(amount, false);
    }
})