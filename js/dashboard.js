// dashboard

const deposit = document.getElementById('deposit-amount');
const withdraw = document.getElementById('withdraw-amount');
const balance = document.getElementById('balance-amount');

const depositField = document.getElementById('deposit-area');
const withdrawField = document.getElementById('withdraw-area');


document.getElementById('deposit-btn').addEventListener('click', function make_deposit() {
    let initDepo = parseInt(depositField.value);
    let lastDepo = parseInt(deposit.innerText) + initDepo;
    
    let initBal = parseInt(depositField.value);
    let lastBal = parseInt(balance.innerText) + initBal;
    
    depositField.value = '';

    if (initDepo < 0) {
        alert('Enter a positive Number!');
        return; //stop function
    }

    if(isNaN(lastBal)){
        alert('Enter a valid number');
        return;
    }
    deposit.innerText = lastDepo;
    balance.innerText = lastBal;
})

document.getElementById('withdraw-btn').addEventListener('click', function make_withdraw() {
    let initWithd = parseInt(withdrawField.value);
    let lastBal = parseInt(balance.innerText) - initWithd;
    let lastWithd = parseInt(withdraw.innerText)+initWithd;
    withdrawField.value = ''; // clear input

    if (lastBal < 0) {
        alert('Insufficient Balance!');
        return; //stop function
    }
    //write these lines after if-condition so that they wont affected before function stop

    if(isNaN(lastBal)){
        alert('Enter a valid number');
        return;
    }
    withdraw.innerText = lastWithd;
    balance.innerText = lastBal;
})