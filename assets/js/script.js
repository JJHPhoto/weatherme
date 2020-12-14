let cities = [];
let today = moment().format("MMMM Do, YYYY");
const APIKey = "27566e302a5e5d1096da211198689239";
// let icons = data.weather[0].icon;
// let iconUrl = "http://openweathermap.org/img/w/" + icons + ".png";

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

  //Query for today's weather.
  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey +
    "&units=imperial";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    cities.push(city);
    // renderCityButtons();
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

    //UV Index Queary
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
      console.log(UV);
      $("#city-UV").text("UV Index " + UV.value);
    });

    // Query for forecast.
    let queryURLTwo =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      APIKey +
      "&units=imperial";

    $.ajax({
      url: queryURLTwo,
      method: "GET",
    }).then(function (responseTwo) {
      // console.log(responseTwo);
      let getForecast = 1;
      // console.log(getForecast);

      for (var i = 0; i < responseTwo.list.length; i++) {
        // console.log(responseTwo.list[i].main);
        let date = responseTwo.list[8 * i].dt_txt.split(" ")[0];
        // console.log(getForecast);

        $("#day" + getForecast)
          .children("#date")
          .text(date);
        $("#icon" + getForecast).attr(
          "src",
          "http://openweathermap.org/img/w/" +
            responseTwo.list[i].weather[0].icon +
            ".png"
        );
        $("#day" + getForecast)
          .children("#temp")
          .text("Temperature: " + responseTwo.list[i].main.temp + " °F");
        $("#day" + getForecast)
          .children("#humidity")
          .text("Humidity: " + responseTwo.list[i].main.humidity + "%");
        $("#day" + getForecast)
          .children("#wind")
          .text("Wind: " + responseTwo.list[i].main.humidity + "mph");
        getForecast++;
      }
    });

    renderCityButtons();
  });
});

// Trying to get localStorage up
// function loadCity() {
//   let storedCity = localStorage.getItem("entry");
//   let savedCity = JSON.parse(storedCity);
//   let showCity = savedCity.userInput;
//   document.getElementById("#saved-city").innerHTML = showCity;
// }

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
