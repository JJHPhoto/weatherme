let cities = [];
let today = moment().format("MMMM Do, YYYY");
const APIKey = "27566e302a5e5d1096da211198689239";

//On click function that populates the page after a user searches for a city's weather.
$("#add-city").on("click", function (event) {
  event.preventDefault();

  let city = $("#city-input").val();

  //Added for localStorage
  // let entry = { userInput: userInput };
  // localStorage.setItem("entry", JSON.stringify(entry));
  //commented out for test
  JSON.stringify(city);
  localStorage.setItem("city", city);
  let savedCity = localStorage.getItem("city");
  // console.log(savedCity);
  // console.log(city);

  cityQuery(city);
});
// });

function cityQuery(city) {
  //Query for today's weather from Open Weather API
  let queryToday =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey +
    "&units=imperial";
  // console.log(queryToday);

  $.ajax({
    url: queryToday,
    method: "GET",
  }).then(function (response) {
    cities.push(city);
    $("#city-name").text(response.name + " " + today);
    $("#city-temp").text("Temperature: " + response.main.temp + " °F");
    $("#city-humidity").text("Humidity: " + response.main.humidity + "%");
    $("#city-wind").text("Wind Speed: " + response.wind.speed + " mph");
    $("#city-icon").attr(
      "src",
      "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
    );
    // console.log(response);

    let longtitude = response.coord.lon;
    let latitude = response.coord.lat;
    // console.log(longtitude);
    // console.log(latitude);

    //UV Index Query from Open Weather API
    let queryUV =
      "https://api.openweathermap.org/data/2.5/uvi?lat=" +
      latitude +
      "&lon=" +
      longtitude +
      "&appid=" +
      APIKey +
      "&units=imperial";
    // console.log(queryUV);

    $.ajax({
      url: queryUV,
      method: "GET",
    }).then(function (UV) {
      // console.log(UV);
      $("#city-UV").text("UV Index " + UV.value);
    });

    // Forecast Query from Open Weather API
    let queryForecast =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      APIKey +
      "&units=imperial";

    $.ajax({
      url: queryForecast,
      method: "GET",
    }).then(function (forecast) {
      console.log(forecast);
      let getForecast = 1;

      for (var i = 0; i < forecast.list.length; i++) {
        // console.log(forecast.list[i].main);
        let date = forecast.list[8 * i].dt_txt.split(" ")[0];
        // console.log(getForecast);

        $("#day" + getForecast)
          .children("#date")
          .text(date);
        $("#icon" + getForecast).attr(
          "src",
          "http://openweathermap.org/img/w/" +
            forecast.list[i].weather[0].icon +
            ".png"
        );
        $("#day" + getForecast)
          .children("#temp")
          .text("Temperature: " + forecast.list[i].main.temp + " °F");
        $("#day" + getForecast)
          .children("#humidity")
          .text("Humidity: " + forecast.list[i].main.humidity + "%");
        $("#wind" + getForecast)
          .children("#wind")
          .text("Wind: " + forecast.list[i].main.temp + "mph");
        getForecast++;
      }
    });
    renderCityButtons();
  });
}

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
