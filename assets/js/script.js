let cities = [];
let today = moment().format("MMMM Do, YYYY");
const APIKey = "27566e302a5e5d1096da211198689239";
// let cityFiveDay = [];
// let icons = data.weather[0].icon;
// let iconUrl = "http://openweathermap.org/img/w/" + icons + ".png";

//On click function that populates the page after a user searches for a city's weather.
$("#add-city").on("click", function (event) {
  event.preventDefault();

  let city = $("#city-input").val();
  // console.log(city);
  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey +
    "&units=imperial";

  let queryURLTwo =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&cnt=5" +
    "&appid=" +
    APIKey +
    "&units=imperial";
  // console.log(queryURLTwo);

  $.ajax({
    url: queryURL,
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

  $.ajax({
    url: queryURLTwo,
    method: "GET",
  }).then(function (responseTwo) {
    // cities.push(city);
    $("#five-day").text(responseTwo.list);
    console.log(responseTwo);
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

//Five day forecast function

// function forecast() {
//   let queryURLTwo =
//     "https://api.openweathermap.org/data/2.5/forecast?q=" +
//     city +
//     "&appid=" +
//     APIKey +
//     "&units=imperial";
//   // console.log(queryURLTwo);
//   $.ajax({
//     url: quearyURLTwo,
//     method: "GET",
//   }).then(function (responseTwo) {
//     $("#five-day").text(responseTwo);
//     console.log(responseTwo);
//   });
// }

// forecast();
// $("#add-city").on("click", function (event) {
//   event.preventDefault();

//   let cityForecast = $("#city-input").val();
//   // console.log(cityForecast);
//   let quearyURLTwo =
//     "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
//     cityForecast +
//     "&cnt=5&appid=" +
//     APIKey +
//     "&units=imperial";
//   console.log(quearyURLTwo);

//   $.ajax({
//     url: quearyURLTwo,
//     method: "GET",
//   }).then(function (response) {
//     cityFiveDay.push(cityForecast);
//     $("#five-day").text(response);
//   });
// });

//To Dos
//=========
//Finish my day forcast (need temperature (formulat needed), wind, uv index, weather icon, date)
//Add my 5 day forecast (next 5 days (weather icon, date, temp & humidity)) to 5 cards.

//not working
//======

// let lat =;
// let lon =;
// let UVindex = () => {
//   let quearyUV =
//     "https://api.openweathermap.org/data/2.5/uvi?lat=" +
//     lat +
//     "&lon=" +
//     lon +
//     APIKey +
//     "&units=imperial";
//   //need to connect to my click somehow.
//   let lat = response.city.coord.lat;
//   let lon = response.city.coord.lon;

//   $.ajax({
//     url: quearyUV,
//     method: "GET",
//   }).then(function (response) {
//     $("#city-UV").text(response.value);
//   });
// };

// let quearyUV =
// "https://api.openweathermap.org/data/2.5/uvi?lat=" +
// lat +
// "&lon=" +
// lon +
// APIKey +
// "&units=imperial";
// // //need to connect to my click somehow.
// let lat =;
// let lon =;

// $.ajax({
// url: quearyUV,
// method: "GET",
// }).then(function (responseUV) {
// $("#city-UV").text(responseUV.value);
// });
// let lat = response.city.coord.lat;
// let lon = response.city.coord.lon;
