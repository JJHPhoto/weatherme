// Testing Weather API calls
let city = "Seattle";
let quearyURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=27566e302a5e5d1096da211198689239";

// console.log(quearyURL);

$.ajax({
  url: quearyURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

//WHEN the user clicks "search", the current weather of the searched city and a 5 day forcast should appear.
//AFTER the user searches for another city, the first search should become a clickable button underneath the search bar. Gonna need localStorage? Or sessionStorage?
//The UV index is formed from the Open Weather API?
//STORE last search onpage.
