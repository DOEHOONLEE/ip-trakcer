// DOM selections

// API
const searchButton = document.getElementById("search-button");
const inputIP = document.getElementById("input-ip");
searchButton.addEventListener("click", function() {
    console.log(inputIP.value)
    const givenIP = inputIP.value;
    const api_key = "at_cWgvuXsOvYhL1O0Rm38t7g485Ixyr";
    const api_url = "https://geo.ipify.org/api/v1?";
    const URL = `${api_url}apiKey=${api_key}&ipAddress=${givenIP}`;

    getLocation(URL);
});

async function getLocation(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// Leaflet JS MAP
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
