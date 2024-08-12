// script.js

document.getElementById('convert-btn').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    const apiKey = '23dddf05a73d05ae51170e3d'; // Replace with your API key
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById('result').innerText = 
                `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error fetching exchange rate:', error);
            alert('An error occurred. Please try again later.');
        });
});

document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});
