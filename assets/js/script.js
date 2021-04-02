var getWeather = function () {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=3ba48c8c92cc5333d9adf48136136baa").then(function(response){
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getWeather();
