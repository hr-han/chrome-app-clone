const weatherContaner = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = '7605f83731afc590da33f6236451ab18';

//api.openweathermap.org/data/2.5/weather?lat=35&lon=139

function getWeather(lat,lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function (res) {
        return res.json()
    }).then(function (json) {
        console.log(json);
        const temp = json.main.temp;
        const place = json.name;
        weatherContaner.innerText = `${temp} @ ${place}`;
    });
}


function saveCoords(coordsObj) {
    localStorage.setItem("position",JSON.stringify(coordsObj))
    
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("error");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();    
    } else {
        const parseCoords = JSON.parse(loadedCords)
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();