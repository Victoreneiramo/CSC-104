function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const timesCompounded = parseInt(document.getElementById('timesCompounded').value);
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(timesCompounded) || isNaN(years)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    const amount = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
    const interest = amount - principal;

    document.getElementById('result').innerText = `Future Value: $${amount.toFixed(2)} \nTotal Interest Earned: $${interest.toFixed(2)}`;
}
