const apikey = "06ba4ef8b6c54cc0ba3745b6c7a5b204";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=Metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const respose = await fetch(apiurl + city + `&appid=${apikey}`);


  if(respose.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }
  else{
    var data = await respose.json();
//   console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";

  if (data.weather[0].main == "Clouds") {
    weathericon.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weathericon.src = "./images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "./images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "./images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weathericon.src = "./images/snow.png";
  }

  document.querySelector(".weather").style.display="block"
}


  }
  


searchbtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
