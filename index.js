var APIkey = "c5a3850c1e43b5e0245b77aa61458c8a"
var input = document.querySelector('input')

var div = document.createElement('div')
var weatherSection = document.getElementById('weather')
var form = document.querySelector('form')
var weatherApp = document.getElementById('weather-app')


form.onsubmit = function (e) {
    e.preventDefault()
    weatherApp.prepend(div)
    var city = this.search.value.trim()
    var URL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    if (!city) {
        div.textContent = "Location Not Found";
        return
    } else {
        div.textContent = ""
        var label = document.querySelector('label')
        
    }
    fetch(URL)
        .then(function (res) {
            return res.json()
        })
        .then(renderData)
    label.textContent = ""

}

function renderData(data) {
//CITY AND COUNTRU
    console.log(data)
    var cityState = document.createElement('h2')
    div.appendChild(cityState)
    cityState.textContent = data.name + " , " + data.sys.country
    var lat = data.coord.lat
    var lon = data.coord.lon
//MAP LINK
    var hyperlink = document.createElement('a')
    var locationMap = "https://www.google.com/maps/search/?api=1&query=" + lat + "%2C" + lon
    div.appendChild(hyperlink)
    hyperlink.textContent = "Click to View Map"
    hyperlink.href = locationMap
//CONDITION ICON

//DISPLAY CONDITION

//CURRENT TEMP

//CURRENT 'FEELS LIKE'

//UPDATED TIME

//SHOULD NOT DISPLAY PREVIOUS LOCATION'S WEATHER INFO AFTER SEARCHING FOR NEW


    }
   
    




