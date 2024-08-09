// app.js

document.getElementById('convertBtn').addEventListener('click', convertCurrency);

function convertCurrency() {
     const amount = document.getElementById('amount').value;
     const fromCurrency = document.getElementById('fromCurrency').value;
     const toCurrency = document.getElementById('toCurrency').value;

     if (amount === '') {
          alert('Please enter an amount');
          return;
     }

     const apiKey = 'YOUR_API_KEY';  // Replace with your API key
     const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

     fetch(url)
          .then(response => response.json())
          .then(data => {
               const rate = data.rates[toCurrency];
               const convertedAmount = (amount * rate).toFixed(2);
               document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
          })
          .catch(error => console.error('Error:', error));
}

const currencies = ['AED', 'AFN', 'ALL', 'AOA', 'ARS', 'AMD', 'AWG', 'AUD', 'AZN', 'ANG', 'BSD', 'BHD', 'BDT', 'BBD', 'BYN', 'BZD', 'BTN', 'BMD', 'BOB', 'BOV', 'BAM', 'BWP', 'BRL', 'BND', 'BGN', 'BIF', 'CVE', 'CAD', 'CLF', 'CLP', 'CNY', 'COP', 'COU', 'CDF', 'CRC', 'CUC', 'CUP', 'CZK', 'CHF', 'CHE', 'CHW', 'DZD', 'DKK', 'DJF', 'DOP', 'EUR', 'EGP', 'ERN', 'ETB', 'FKP', 'FJD', 'GMD', 'GEL', 'GHS', 'GIP', 'GTQ', 'GBP', 'GNF', 'GYD', 'HTG', 'HNL', 'HKD', 'HUF', 'INR', 'ISK', 'IDR', 'IRR', 'IQD', 'ILS', 'JMD', 'JPY', 'JOD', 'KYD', 'KMF', 'KZT', 'KES', 'KPW', 'KRW', 'KWD', 'KGS', 'KHR', 'LAK', 'LBP', 'LSL', 'LRD', 'LYD', 'LKR', 'MOP', 'MKD', 'MGA', 'MWK', 'MYR', 'MVR', 'MRU', 'MUR', 'MXN', 'MXV', 'MDL', 'MNT', 'MAD', 'MZN', 'MMK', 'NOK', 'NZD', 'NAD', 'NPR', 'NIO', 'NGN', 'OMR', 'PKR', 'PAB', 'PGK', 'PYG', 'PEN', 'PHP', 'PLN', 'QAR', 'RON', 'RUB', 'RWF', 'RSD', 'SVC', 'SBD', 'SOS', 'SSP', 'SDG', 'SRD', 'SZL', 'SEK', 'SYP', 'STN', 'SAR', 'SCR', 'SLE', 'SGD', 'SHP', 'TWD', 'TJS', 'TZS', 'THB', 'TOP', 'TTD', 'TND', 'TRY', 'TMT', 'USD', 'UGX', 'UAH', 'USN', 'UYI', 'UYU', 'UZS', 'VUV', 'VEF', 'VED', 'VND', 'WST', 'XCD', 'XOF', 'XAF','XDR', 'XUA', 'XSU', 'XPF', 'YER', 'ZAR', 'ZMW', 'ZWL']; // Add more currencies as needed

currencies.forEach(currency => {
     const option1 = document.createElement('option');
     option1.value = currency;
     option1.textContent = currency;
     document.getElementById('fromCurrency').appendChild(option1);

     const option2 = document.createElement('option');
     option2.value = currency;
     option2.textContent = currency;
     document.getElementById('toCurrency').appendChild(option2);
});
