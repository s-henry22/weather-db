var searchBar = document.querySelector("#search-bar");



searchBar.addEventListener('keypress', setQuery);

function setQuery(event) {
    if(event.keyCode == 13) {
        //getResults(searchBar.value);
        console.log(searchBar.value)
    };
};

// Request data from Weather API
var getWeatherData = function(cityName) {
    // format weather API
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=3ba48c8c92cc5333d9adf48136136baa";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

  


//getWeatherData("Toronto");
