// VARIABLES
const ipAddress = document.getElementById("ip-address");
const locationInfo = document.getElementById("location-info");
const timeZone = document.getElementById("timeZone");
const ISP = document.getElementById("isp");
let lat;
let long;

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
        ipAddress.innerHTML = data.ip;
        locationInfo.innerHTML = `${data.location.city.split(" ")[0]} ${data.location.region}`;
        timeZone.innerHTML = data.location.timezone;
        ISP.innerHTML = data.isp;
        lat = data.location.lat;
        long = data.location.lng;
        console.log(ipAddress, locationInfo, timeZone, ISP, lat, long);
        drawMap(lat, long);

    } catch (err) {
        console.log(err);
    }
}

// Leaflet JS MAP
var map = L.map('map').setView([37.2664, 126.9994], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
function drawMap(lat,lng) {
    
    L.marker([lat, lng]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
}