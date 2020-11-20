//My "on click" function that populates my page after I search.
$("#add-city").on("click", function (event) {
  event.preventDefault();

  var city = $("#city-input").val();
  console.log(city);
  var quearyURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=27566e302a5e5d1096da211198689239";

  $.ajax({
    url: quearyURL,
    method: "GET",
  }).then(function (response) {
    cities.push(city);
    renderCityButtons();
    $("#city-name").text(response.name);
    $("#city-humidity").text(response.main.humidity);
    console.log(response);
  });
});

//Renders city search into clickable buttons.
var cities = [];

function renderCityButtons() {
  $("#saved-city").empty();

  for (var i = 0; i < cities.length; i++) {
    var a = $("<button>");
    a.addClass("city");
    a.attr("data-name", cities[i]);
    a.text(cities[i]);
    $("#saved-city").append(a);
  }
}

renderCityButtons();

//To Dos
//=========
//Finish my day forcast (need temperature (formulat needed), wind, uv index, weather icon, date)
//Add my 5 day forecast (next 5 days (weather icon, date, temp & humidity)) to 5 cards.
