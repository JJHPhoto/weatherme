# weatherme

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

My weather app using a weather API.

## 1. Worflow

The first thing I did was do a wireframe off of the image we were given in class. I then went to Bulma to start getting elements to make up my page.

After I had my HTML wireframe in place, I started to pseudocode my JS. For me, being able to see my wireframe gives me a better understanding of how to read the given README file. With that in place, I added a .gitignore file to my repo because I have been having issues with files showing up in my repo that I don't want.

My next step was to write the code that would call on the Weather API to get the weather data. I was able to easily able to get my call working. However, I ran into issues getting the buttons to render as well as have the right data show up. I worked on my code with my tutor and was able to get my city button to render from my search and the right data to show up. I worked on making sure my day forecast was good and moved on to finishing my code.

I hadn't realized I was calling every 3 hours with my forecast query. A study group partner pointed out that. He showed me how to use a for loop to make sure you're getting a 5 day forecast as opposed to 5 forecasts every 3 hours. I took this to my tutor and he pointed out a mistake I was making. This got me to be able to have the correct forecast for 5 days.

Next I created a query for my UV index data. This was a bit weird to me because I was trying to get the data from my weather query, but I quickly realized I needed to create another query for that information. It turned out to be a lot easier than I expected it to. I was thinking I would have to get the longtitud and latitude in some complex way. Digging into my weather queary, I saw that I was getting those points inside that call. So, I created a variable that got those from my city call and then passed those into my UV index call. It was really nice to see it just make sense.

Buttons

## 2. Resources

[Open Weather API](https://openweathermap.org/)

[Bulma](https://bulma.io/)

## 3. Contributor

[Thomas](https://github.com/Tskading) spent many hours chatting and going over my code to get it working.
