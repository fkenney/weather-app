document.getElementById("searchbox").addEventListener("keyup", (event)=>{
    if(event.key === "Enter"){
        var city = document.getElementById("searchbox").value;
        weather.fetchWeather(city); 
    }
} );


var weather = {
    "apiKey": "ce52c73424dd223d64efe36faa2d6dbf",
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&q="+city + "&appid="+ this.apiKey)
        .then(response => response.json())
        .then(data => this.display(data))
         updateBackground(city);
     }, 

     display : function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const { speed } = data.wind ;

        console.log(name, icon, description, temp, humidity, speed);

        document.getElementById("cityName").innerText=name;
        document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.getElementById("temp").innerText = temp + " °F";
        document.getElementById("desc").innerText = description;
        document.getElementById("humidity").innerText = humidity +" %";
        document.getElementById("speed").innerText = speed +" mph";  
     }
};

function updateBackground(city){
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" +city+",landscape')";
}

weather.fetchWeather("Tampa");


