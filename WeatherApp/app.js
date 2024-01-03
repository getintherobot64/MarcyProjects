window.addEventListener('DOMContentLoaded', () => {
let city = document.getElementsByClassName('city')

let tempSection = document.getElementsByClassName('temp')

let weather = document.getElementsByClassName('weather')
let weatherIcon = document.getElementsByClassName('weather-icon')

function renderData(weatherData){
let cityName = weatherData.data[0].city_name;
let temp = weatherData.data[0].temp;
weatherDescription = weatherData.data[0].weather.description;
city[0].innerText = `${cityName}`;
tempSection[0].innerText = `${temp}`
weather[0].innerText = `The current weather in ${cityName} (where you are) is ${weatherDescription}`
weatherIcon[0].src = `https://www.weatherbit.io/static/img/icons/${weatherData.data[0].weather.icon}.png`
currentTemp = tempSection.innerText;
return celsius = true;
}


  
function geoFindMe() {
let _weatherData;

  let options = {
	enableHighAccuracy: true,
	timeout: 60000,
	maximumAge: 10000
  };
  
function success(position) {
	const latitude  = position.coords.latitude;
	const longitude = position.coords.longitude;

	fetch (`https://api.weatherbit.io/v2.0/current?key=9d44dc98f3234726a5af9edf4a32046f&lon=${longitude}&lat=${latitude}`)
	.then(response => response.json())
	.then(data => {
	_weatherData = data;
	renderData(_weatherData);
	})
	

	}
  
	function error() {
	  city[0].innerText = 'Unable to retrieve your location';
	}
  
	if(!navigator.geolocation) {
	  city[0].innerText = 'Geolocation is not supported by your browser';
	} else {
	  city[0].innerText = 'Locating…';

	}

	navigator.geolocation.watchPosition(success, error, options);
}
geoFindMe()

}
)
var tempDiv = document.getElementsByClassName('temperature') 
var tempSection = document.getElementsByClassName('temp') 
tempDiv = tempDiv[0];
tempSection = tempSection[0];
var celsius = true; 
var currentTemp = tempSection.innerText; 
var degreeSection = document.getElementsByClassName('degrees')



tempDiv.addEventListener("click", function(event) {
	event.preventDefault()
	

	if (celsius === true) {
		currentTemp=tempSection.innerText
		currentTemp = parseFloat(currentTemp)
		currentTemp= currentTemp*(9/5)
		currentTemp = currentTemp+32
		let rounded = Math.round(currentTemp * 10) /10
		currentTemp = rounded.toFixed(1)
		degreeSection[0].innerText='F'
		tempSection.innerText = currentTemp
		celsius = false;
		return currentTemp;
	}

	if (celsius === false) {
		
		currentTemp = tempSection.innerText
		currentTemp = parseFloat(currentTemp)
		currentTemp=currentTemp-32
		currentTemp=currentTemp*(5/9)
		let rounded = Math.round(currentTemp * 10) /10
		currentTemp = rounded.toFixed(1)
		degreeSection[0].innerText='C'
		tempSection.innerText = currentTemp
		celsius = true
		return currentTemp;
	}
}
)


