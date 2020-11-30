let cities = [];
let today = moment().format("MMMM Do, YYYY");
const APIKey = "27566e302a5e5d1096da211198689239";
// let icons = data.weather[0].icon;
// let iconUrl = "http://openweathermap.org/img/w/" + icons + ".png";

//On click function that populates the page after a user searches for a city's weather.
$("#add-city").on("click", function (event) {
  event.preventDefault();

  let city = $("#city-input").val();
  console.log(city);
  let quearyURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey +
    "&units=imperial";

  $.ajax({
    url: quearyURL,
    method: "GET",
  }).then(function (response) {
    cities.push(city);
    renderCityButtons();
    $("#city-name").text(response.name + " " + today);
    $("#city-temp").text("Temperature: " + response.main.temp + " °F");
    $("#city-humidity").text("Humidity: " + response.main.humidity + "%");
    $("#city-wind").text("Wind Speed: " + response.wind.speed + " mph");

    console.log(response);
  });
});

//Renders city search into clickable buttons.
function renderCityButtons() {
  $("#saved-city").empty();

  for (let i = 0; i < cities.length; i++) {
    let a = $("<button>");
    a.addClass("city");
    a.attr("data-name", cities[i]);
    a.text(cities[i]);
    $("#saved-city").append(a);
  }
}

//Calling my city buttons to render
renderCityButtons();

//To Dos
//=========
//Finish my day forcast (need temperature (formulat needed), wind, uv index, weather icon, date)
//Add my 5 day forecast (next 5 days (weather icon, date, temp & humidity)) to 5 cards.
