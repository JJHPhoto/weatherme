//Functionality of my API that "works" with classes
// $("#searchBtn").on("click", function (event) {
//   event.preventDefault();

//   var city = $("#city-search").val();
//   var quearyURL =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     city +
//     "&appid=27566e302a5e5d1096da211198689239";

//   $.ajax({
//     url: quearyURL,
//     method: "GET",
//   }).then(function (response) {
//     $("#saved-city").text(JSON.stringify(response.main));
//     console.log(response);
//   });
// });

//Functionality of my API that "works" with ids
$(".button").on("click", function (event) {
  event.preventDefault();

  var city = $(".input").val();
  var quearyURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=27566e302a5e5d1096da211198689239";
  console.log(city);
  console.log(quearyURL);

  $.ajax({
    url: quearyURL,
    method: "GET",
  }).then(function (response) {
    $("#saved-city").text(JSON.stringify(response));
    console.log(response);
  });
});

//Remove after working
//=====================

// Testing Weather API calls
// let city = "Seattle";
// let quearyURL =
//   "https://api.openweathermap.org/data/2.5/weather?q=" +
//   city +
//   "&appid=27566e302a5e5d1096da211198689239";

//Grabs data from my Weather API
// $.ajax({
//   url: quearyURL,
//   method: "GET",
// }).then(function (response) {
//   console.log(response);
// });

//Trying to combine code into one.

//Testing connecting search button to Weather API

//Search button queary.
// $(".control").on("click", function (event) {
//   event.preventDefault();
//   //Grab text from input box
//   let city = $(".input").val();

//   //Search for city
//   let quearyURL =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     city +
//     "&appid=27566e302a5e5d1096da211198689239";

//   $.ajax({
//     url: quearyURL,
//     method: "GET",
//   }).then(function (response) {
//     $(".test").text(JSON.stringify(response));
//   });
// });

//Trying with classes instead of ids.
// $("#searchBtn").on("click", function (event) {
//   event.preventDefault();
//   //Grab text from input box
//   let city = $("#city-search").val();

//   //Search for city
//   let quearyURL =
//     "api.openweathermap.org/data/2.5/weather?q=Seattle&appid=27566e302a5e5d1096da211198689239";

//   $.ajax({
//     url: quearyURL,
//     method: "GET",
//   }).then(function (response) {
//     $("saved-city").text(JSON.stringify(response));
//   });
// });

//WHEN the user clicks "search", the current weather of the searched city and a 5 day forcast should appear.
//AFTER the user searches for another city, the first search should become a clickable button underneath the search bar. Gonna need localStorage? Or sessionStorage?
//The UV index is formed from the Open Weather API?
//STORE last search onpage.
