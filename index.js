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
    var URL = "https://api.openweathermap.org/data/2.5/weather?q="
    var city = this.search.value.trim()
    var fullURL = URL + city + "&units=imperial&appid=" + APIkey ;
    if ((!city) || (weatherSearch.value = '')) {
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

    var img = document.createElement('img')
    var iconCode = data.weather[0].icon
    var iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png"
    img.src = iconURL
    img.alt = data.name
    div.appendChild(img)

    //DISPLAY CONDITION
    var condition = document.createElement('p')
    condition.setAttribute('style', 'text-transform: capitalize')
    condition.textContent = data.weather[0].description
    div.appendChild(condition)

    //CURRENT TEMP
    var temp = document.createElement('p')
    tempNumber = data.main.temp
    temp.textContent = "Current:  " + tempNumber + '° F'
    div.appendChild(temp)

    //CURRENT 'FEELS LIKE'
    var feelsLike = document.createElement('p')
    feelsLikeNumber = data.main.feels_like
    feelsLike.textContent = "Feels like:  " + feelsLikeNumber + '° F'
    div.appendChild(feelsLike)

    //UPDATED TIME
    var dateParagraph = document.createElement('p')
    var date = new Date((data.dt) * 1000)
    var timeString = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    })
    dateParagraph.textContent = 'Last Updated:  ' + timeString
    div.appendChild(dateParagraph)



}
