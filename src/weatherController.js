var API_KEY = '&appid=078125b6626c6e3d975b31ca7cdac167';
var url = 'http://api.openweathermap.org/data/2.5/weather?q='

$(document).ready(function(){
  getCityWeather('London');

  function getCityWeather(cityName){
    $.get(url + cityName + API_KEY, function(data){
      $('#city').text(cityName)
      $('#cityTemp').text(parseInt(parseInt(data.main.temp) - 273.15));
      $('#outlook').text(data.weather[0].description);
    })
  }
  $("#weatherSearch").submit(function(){
    event.preventDefault();
    var city = $("input:first").val()
    getCityWeather(city);
  })
})
