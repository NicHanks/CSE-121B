
const baseUrl = "https://api.iex.cloud/v1/";
const apiKey = "pk_171994ac9a6542ed86171571f8a02369";

document.getElementById("fetchDataButton").addEventListener("click", fetchData);

function fetchData() {
    // Replace 'YOUR_API_KEY' with your actual IEX Cloud API key
    const apiKey = 'YOUR_API_KEY';
    const symbol = 'AAPL'; // Replace with the stock symbol you want to fetch

    // IEX Cloud API endpoint
    const apiUrl = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the data here
            displayData(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function displayData(data) {
    const output = document.getElementById("output");
    output.innerHTML = `
        <p>Symbol: ${data.symbol}</p>
        <p>Company Name: ${data.companyName}</p>
        <p>Latest Price: $${data.latestPrice}</p>
    `;
}

// const iexcloud = require('iex-cloud');

// const API_KEY = 'YOUR_IEX_CLOUD_API_KEY';
// const S_AND_P_500_SYMBOL = 'SPY';

// const getSAndP500Change = async () => {
//     try {
//         const response = await iexcloud.stock(S_AND_P_500_SYMBOL).chartPreviousClose({
//             token: API_KEY,
//             range: '1d'
//         });

//         const change = response.change;

//         return change;
//     } catch (error) {
//         console.error('Error fetching S&P 500 change:', error);
//         return null;
//     }
// };

// const updateIndicator = (change) => {
//     const indicatorElement = document.getElementById('indicator');

//     if (change > 0) {
//         indicatorElement.textContent = '▲';
//         indicatorElement.classList.add('up');
//         indicatorElement.classList.remove('down');
//     } else if (change < 0) {
//         indicatorElement.textContent = '▼';
//         indicatorElement.classList.add('down');
//         indicatorElement.classList.remove('up');
//     } else {
//         indicatorElement.textContent = '-';
//         indicatorElement.classList.remove('up', 'down');
//     }
// };

// const refreshBtn = document.getElementById('refreshBtn');
// refreshBtn.addEventListener('click', () => {
//     const change = getSAndP500Change();

//     change.then(updateIndicator);
// });
