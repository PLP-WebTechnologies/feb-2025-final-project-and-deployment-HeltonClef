
let balance = 50000;

function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === 'clef' && pass === 'clef') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('bank-section').style.display = 'block';
    } else {
        alert('Incorrect login details');
    }
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        balance += amount;
        updateBalance();
        addTransaction(`Deposited $${amount}`, 'deposit');
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        addTransaction(`Withdrew $${amount}`, 'withdraw');
    } else {
        alert('Invalid amount or insufficient balance');
    }
}

function updateBalance() {
    document.getElementById('balance').innerText = `$${balance}`;
}

function addTransaction(text, type) {
    const li = document.createElement('li');
    li.textContent = text;
    li.className = type;
    document.getElementById('transactions').prepend(li);
}
