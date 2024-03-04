
import key from "./apikey.js"

const apikey = key;
const apliURl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbtn = document.getElementById('search');
const searchbox = document.getElementById('srchbox');

async function getWeather(city){
    const response = await fetch(apliURl +city +`&appid=${apikey}`).then(
        res => res.json().then(
            data => {console.log(data)
            document.querySelector(".city").innerHTML = data.name
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " C"
            document.getElementById('speed').innerHTML = data.wind.speed + "kmph"
            document.getElementById('hum').innerHTML = data.main.humidity + "%"

            })

    );
}

searchbtn.addEventListener("click", () =>{
    console.log("clicked");
    getWeather(searchbox.value);
})

