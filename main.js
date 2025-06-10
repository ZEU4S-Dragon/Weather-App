const apiKey="3fd22816468b4171213810732d6b90cf";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const respose = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await respose.json();

    console.log(data);
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =  Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";
}

searchBtn.addEventListener(click, ()=>{

    checkWeather(searchBox.value);
    
})

checkWeather();