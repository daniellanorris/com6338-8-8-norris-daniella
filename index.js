// api key c1acb0c22040dd88b443d95142393437
var URL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c1acb0c22040dd88b443d95142393437"
var div = document.createElement('div')
var weatherSection = document.getElementById('weather')
var form = document.querySelector('form')
var weatherApp = document.getElementById('weather-app')


form.onsubmit = function (e) {
    e.preventDefault()
    var searchTerm = this.search.value.trim()
    weatherApp.prepend(div)
    if (!searchTerm) return
    form.search.value = ""
    fetch(URL + searchTerm)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
          //  for(city of data.list) {
            console.log(data)
           /* div.textContent = ""
            var cityState = document.createElement('h1')
            cityState.textContent = city.name + "," + city.country
            div.appendChild(cityState)

*/

       //     }
        })


}





