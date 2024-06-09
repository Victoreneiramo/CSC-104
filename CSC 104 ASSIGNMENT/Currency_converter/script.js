const exchangeRates = {
    USD: 1,
    JPY: 109.57,
    CAD: 1.26,
    NGN: 410.36,
    GBP: 0.71,
    EUR: 0.82
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid amount';
        return;
    }

    const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
