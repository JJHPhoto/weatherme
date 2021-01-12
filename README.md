# [weatherme](https://jjhphoto.github.io/weatherme/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 1. How to use the application.

To use the app:

- Go to the [live link](https://jjhphoto.github.io/weatherme/) in your browser.
- Use the "City Search" to look up the weather of the city you're in or want to know about.
- You will see today's weather for the searched city as well as a 5 day forecast.
- A clickable button will appear below "City Search". You can use this button to search for that city's weather again.
- You add a clickable button each time you search for a new city. Each button will return that city's current weather and a 5 day forecast.

## 2. Demo of working application

![](weatherAppDemo.gif)

## 3. My worflow

The first thing I did was do a wireframe off of the image we were given in class. I then went to Bulma to start getting elements to make up my page.

After I had my HTML wireframe in place, I started to pseudocode my JS. For me, being able to see my wireframe gives me a better understanding of how to read the given README file. With that in place, I added a .gitignore file to my repo because I have been having issues with files showing up in my repo that I don't want.

My next step was to write the code that would call on the Weather API to get the weather data. I was able to easily able to get my call working. However, I ran into issues getting the buttons to render as well as have the right data show up. I worked on my code with my tutor and was able to get my city button to render from my search and the right data to show up. I worked on making sure my day forecast was good and moved on to finishing my code.

I hadn't realized I was calling every 3 hours with my forecast query. A study group partner pointed out that. He showed me how to use a for loop to make sure you're getting a 5 day forecast as opposed to 5 forecasts every 3 hours. I took this to my tutor and he pointed out a mistake I was making. This got me to be able to have the correct forecast for 5 days.

Next I created a query for my UV index data. This was a bit weird to me because I was trying to get the data from my weather query, but I quickly realized I needed to create another query for that information. It turned out to be a lot easier than I expected it to. I was thinking I would have to get the longtitud and latitude in some complex way. Digging into my weather queary, I saw that I was getting those points inside that call. So, I created a variable that got those from my city call and then passed those into my UV index call. It was really nice to see it just make sense.

To deconstruct my code, I put my 3 queries into a function and then called that function inside of my on click event listener. I had tried this before but after working with a friend on the code, I realized I was doing it in the wrong order. Once I got that working, I had local storage as my final part of the homework.

I knew this was going to be an issue as I had issues with local storage the last time we did this. Since I was so far behind with the homework, it was a bit unfamiliar to me again. I could put data into local storage, but I was confused as to how to store the correct data with my buttons. Working with a friend, we were able to check if there were searches in local storage, if not we'd return an empty array. If there were, we'd get those searches and populate the page with those as buttons.

## 4. Resources used

[Open Weather API](https://openweathermap.org/)

[Bulma](https://bulma.io/)

## 5. Contributor

[Thomas](https://github.com/Tskading) spent many hours chatting and going over my code to get me pointed in the right direction.
