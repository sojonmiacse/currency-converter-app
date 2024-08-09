document.addEventListener('DOMContentLoaded', () => {
     const apiKey = 'YOUR_API_KEY';  // এখানে নতুন API Key বসান
     const url = `https://openexchangerates.org/api/currencies.json?app_id=${apiKey}`;

     fetch(url)
          .then(response => response.json())
          .then(data => {
               const fromCurrency = document.getElementById('fromCurrency');
               const toCurrency = document.getElementById('toCurrency');

               for (const [code, name] of Object.entries(data)) {
                    const option1 = document.createElement('option');
                    option1.value = code;
                    option1.textContent = `${name} (${code})`;
                    fromCurrency.appendChild(option1);

                    const option2 = document.createElement('option');
                    option2.value = code;
                    option2.textContent = `${name} (${code})`;
                    toCurrency.appendChild(option2);
               }
          })
          .catch(error => console.error('Error fetching currency list:', error));
});

document.getElementById('convertBtn').addEventListener('click', convertCurrency);

function convertCurrency() {
     const amount = document.getElementById('amount').value;
     const fromCurrency = document.getElementById('fromCurrency').value;
     const toCurrency = document.getElementById('toCurrency').value;

     if (amount === '') {
          alert('Please enter an amount');
          return;
     }

     const apiKey = 'YOUR_API_KEY';  // এখানে নতুন API Key বসান
     const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=${fromCurrency}`;

     fetch(url)
          .then(response => response.json())
          .then(data => {
               const rate = data.rates[toCurrency];
               if (!rate) {
                    alert('Conversion rate not available');
                    return;
               }
               const convertedAmount = (amount * rate).toFixed(2);
               document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
          })
          .catch(error => console.error('Error:', error));
}
