let today= document.getElementById("today");
let todate= document.getElementById("todate");
let day2= document.getElementById("day2");
let date2= document.getElementById("date2");
let day3= document.getElementById("day3");
let date3= document.getElementById("date3");
let city= document.getElementById("city");
let tempreture = document.getElementById("tempreture");
let moon = document.getElementById("moon");
let img1 = document.getElementById("img1");
let temp1 = document.getElementById("temp1");
let temp2 = document.getElementById("temp2");
let temp3 = document.getElementById("temp3");
let statue1 = document.getElementById("statue1");
let ImgSec2 = document.getElementById("ImgSec2");
let maxTempSec2 = document.getElementById("maxTempSec2");
let minTempSec2 = document.getElementById("minTempSec2");
let statue2 = document.getElementById("statue2");
let ImgSec3 = document.getElementById("ImgSec3");
let maxTempSec3 = document.getElementById("maxTempSec3");
let minTempSec3 = document.getElementById("minTempSec3");
let statue3 = document.getElementById("statue3");
let dating = new Date();
let todday = dating.toLocaleString("en-US", {weekday:"long"});
let toddate = dating.toLocaleString("en-US", { month: "long" });
let togetdate = dating.getDate()
let srearchinput = document.getElementById("search");


async function getData(nameofcity) {
    let api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1f2fa1886f484acaaff85857240601&q=${nameofcity}&days=3`);
    let res = await api.json();
    return res; 
};

function displayDayOne(data) {  
       today.innerHTML = todday;
       todate.innerHTML =  togetdate+" " +toddate;
        city.innerHTML = data.location.name; 
        tempreture.innerHTML = data.current.temp_c+"^C"; 
        moon.setAttribute("src",  "https"+ data.current.condition.icon); 
        statue1.innerHTML = data.current.condition.text; 
        temp1.innerHTML = data.current.humidity+"%";
        temp2.innerHTML = data.current.wind_kph+"km/h";
        temp3.innerHTML = data.current.wind_dir;
};
function displaynextdayTwo(data) {
        let x = new Date(data.forecast.forecastday[1].date); // Convert date string to Date object
        let y = x.toLocaleString("en-US", { weekday: "long" });
         day2.innerHTML = y;
         ImgSec2.setAttribute("src", "https"+data.forecast.forecastday[1].day.condition.icon); 
         maxTempSec2.innerHTML =  data.forecast.forecastday[1].day.maxtemp_c+" ^C";
         minTempSec2.innerHTML =  data.forecast.forecastday[1].day.mintemp_f+" ^C";
         statue2.innerHTML = data.forecast.forecastday[1].day.condition.text;
};
function displaynextdayThree(data) { 
       let x = new Date(data.forecast.forecastday[2].date); // Convert date string to Date object
       let y = x.toLocaleString("en-US", { weekday: "long" });
        day3.innerHTML = y;
        ImgSec3.setAttribute("src", "https"+ data.forecast.forecastday[2].day.condition.icon); 
        maxTempSec3.innerHTML =  data.forecast.forecastday[2].day.maxtemp_c+" ^C";
        minTempSec3.innerHTML =  data.forecast.forecastday[2].day.mintemp_f+" ^C";
        statue3.innerHTML = data.forecast.forecastday[2].day.condition.text;  
};
async function all(city = "cairo") {
   let weather = await getData(city);
    displayDayOne(weather);
    displaynextdayTwo(weather);
    displaynextdayThree(weather);    
};
all();
srearchinput.addEventListener("input", function () {
    all(srearchinput.value);
    
})