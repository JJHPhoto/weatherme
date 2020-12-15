let cities = [];
let today = moment().format("MMMM Do, YYYY");
const APIKey = "27566e302a5e5d1096da211198689239";

//On click function that populates the page after a user searches for a city's weather.
$("#add-city").on("click", function (event) {
  event.preventDefault();

  let city = $("#city-input").val();

  //Getting and adding to local storage.
  const grabSearches = localStorage.getItem("searches");

  let savedSearches = [];
  const searchesParse = JSON.parse(grabSearches);
  if (searchesParse) {
    savedSearches = searchesParse;
  }

  savedSearches.push(city);
  const searches = JSON.stringify(savedSearches);
  localStorage.setItem("searches", searches);

  cityQuery(city);
});

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

//Renders buttons based on cities searched. Also includes searches in local storage
function renderCityButtons() {
  $("#saved-city").empty();
  const getSearches = localStorage.getItem("searches");
  const grabSearches = JSON.parse(getSearches) || [];
  console.log(grabSearches);

  grabSearches.forEach((search) => {
    let a = $("<button>");
    a.addClass("city");
    a.text(search);
    const searchFunction = () => cityQuery(search);
    a.click(searchFunction);
    $("#saved-city").append(a);
  });
}

//Calling city buttons to render to page
renderCityButtons();
