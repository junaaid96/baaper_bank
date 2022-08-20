// dashboard

const deposit = document.getElementById('deposit-amount');
const withdraw = document.getElementById('withdraw-amount');
const balance = document.getElementById('balance-amount');

const depositField = document.getElementById('deposit-area');
const withdrawField = document.getElementById('withdraw-area');


document.getElementById('deposit-btn').addEventListener('click', function make_deposit() {
    let initDepo = parseInt(depositField.value);
    let lastDepo = parseInt(deposit.innerText) + initDepo;
    deposit.innerText = lastDepo;
    let initBal = parseInt(depositField.value);
    let lastBal = parseInt(balance.innerText) + initBal;
    balance.innerText = lastBal;
})

document.getElementById('withdraw-btn').addEventListener('click', function make_withdraw() {
    let initWithd = parseInt(withdrawField.value);
    withdraw.innerText = initWithd;
    let lastBal = parseInt(balance.innerText) - initWithd;
    if (lastBal < 0) {
        alert('Insufficient Balance!');
    } else {
        balance.innerText = lastBal;
    }
})