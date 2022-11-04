var APIkey = "c5a3850c1e43b5e0245b77aa61458c8a"
var input = document.querySelector('input')
var div = document.createElement('div')
var weatherSection = document.getElementById('weather')
var form = document.querySelector('form')
var weatherApp = document.getElementById('weather-app')
var label = document.querySelector('label')
var weatherSearch = document.getElementById('weather-search')


form.onsubmit = function (e) {

    e.preventDefault()
    weatherSection.prepend(div)
    var URL = "http://api.openweathermap.org/data/2.5/weather?q="
    var city = this.search.value.trim()
    var fullURL = URL + city + "&appid=" + APIkey;
    if((!city )|| (weatherSearch.value = '')) {
        city = ''
        div.innerHTML = ''
        weatherSearch.value = ''
        }
    fetch(fullURL)
        .then(function (res) {
            if (res.status !== 200) throw new Error('Location not Found')
            return res.json()
        })
        .then(renderData)

        .catch(function (err) {
            div.innerHTML = err.message
        })

}

function renderData(data) {
    city = ""
    div.innerHTML = ""
    weatherSearch.value = ''

    //CITY AND COUNTRY
    console.log(data)

    var cityState = document.createElement('h2')
    div.appendChild(cityState)
    cityState.textContent = data.name + " , " + data.sys.country
    var lat = data.coord.lat
    var lon = data.coord.lon
    //MAP LINK
    var hyperlink = document.createElement('a')
    var locationMap = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lon
    div.appendChild(hyperlink)
    hyperlink.textContent = "Click to View Map"
    hyperlink.href = locationMap
    hyperlink.target = "_BLANK"

    //CONDITION ICON

    //DISPLAY CONDITION

    //CURRENT TEMP

    //CURRENT 'FEELS LIKE'

    //UPDATED TIME

    //SHOULD NOT DISPLAY PREVIOUS LOCATION'S WEATHER INFO AFTER SEARCHING FOR NEW


}





