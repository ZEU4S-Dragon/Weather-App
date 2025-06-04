const apiKey="3fd22816468b4171213810732d6b90cf";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
    const respose = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await respose.json();

    console.log(data);
}

checkWeather();