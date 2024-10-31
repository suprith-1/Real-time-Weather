const api = "1651bdd0b0ddb8114dda13b95055cf3f";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=1651bdd0b0ddb8114dda13b95055cf3f&q=";

document.getElementById("button").addEventListener("click",function(){
    weather(document.getElementById("input").value);
})

async function weather(city){
    const response = await fetch(apiurl+city);
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = city;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("hval").innerHTML = data.main.humidity + '%';
    document.getElementById("wval").innerHTML = (data.wind.speed) + " Km/h";
}
