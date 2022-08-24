

var weather = {
    "apiKey": "ce52c73424dd223d64efe36faa2d6dbf",
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city + "&appid="+ this.apiKey)
        .then(response => response.json())
        .then(data => this.display(data))
     },

     display : function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const { speed } = data.wind;

        console.log(name, icon, description, temp, humidity, speed);

        document.getElementById("cityName").innerText=name;
        document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.getElementById("desc").innerText = description;
        document.getElementById("humidity").innerText = humidity;
        document.getElementById("speed").innerText = speed;
     }
};

weather.fetchWeather("Montgomery");



