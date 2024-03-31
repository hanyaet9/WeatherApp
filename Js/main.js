                                        // select inputs>>>
// First Day elments
let searchInput = document.querySelector('.search');
let first_day = document.querySelector('.first-day');
let first_date = document.querySelector('.first-date');
let first_month = document.querySelector('.first-month');
let first_city = document.querySelector('.first-city');
let first_statues = document.querySelector('.first-status');
let firstStatuesImage = document.querySelector('.statues-img');
let first_tempretute = document.querySelector('.first-tempretute'); 
let humidity = document.querySelector('.humidity');
let wind_kph = document.querySelector('.wind_kph');
let wind_dir = document.querySelector('.wind_dir');

// ************************
// second Day Element

let second_day = document.querySelector('.secons-day');
let second_statuesImg = document.querySelector('.second-statuesImg');
let second_HightTempreture = document.querySelector('.secondHight-tempreture'); 
let second_lowTempreture = document.querySelector('.secondLow-tempreture'); 
let second_statues = document.querySelector('.second-status');

// ************************
// second Day Element

let third_day = document.querySelector('.third-day');
let third_statuesImg = document.querySelector('.third-statuesImg');
let third_HightTempreture = document.querySelector('.thirdHight-tempreture'); 
let third_lowTempreture = document.querySelector('.thirdLow-tempreture'); 
let third_statues = document.querySelector('.third-status');

// *************************
// get date info

// let myDate = new Date();


// **************************
// get api response

async function getTodayWeather(search){
    let response = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=c5dd02d749114d2287a144040240601&q=${search}&days=10&aqi=no&alerts=no`)
    let result = await response.json(); 
    console.log(result);
    console.log(result.forecast.forecastday[1].day.maxtemp_c);

    // First Day....
    let myDate = new Date();
    first_day.innerHTML = myDate.toLocaleDateString("en-us", {weekday: 'long'});
    first_date.innerHTML = myDate.getDate();
    first_month.innerHTML = myDate.toLocaleDateString("en-us", {month: 'short'});
    first_city.innerHTML = result.location.name;
    first_statues.innerHTML = result.current.condition.text
    firstStatuesImage.setAttribute('src', result.current.condition.icon); 
    first_tempretute.innerHTML = result.current.temp_c +'°C'
    humidity.innerHTML = result.current.humidity + '%';
    wind_kph.innerHTML = result.current.wind_kph + 'Km/h'
    wind_dir.innerHTML = result.current.wind_dir
    
    // Second Day....
    second_day.innerHTML = new Date(result.forecast.forecastday[1].date).toLocaleDateString("en-us", {weekday: 'long'});
    second_statuesImg.setAttribute('src', result.forecast.forecastday[1].day.condition.icon);
    second_HightTempreture.innerHTML = result.forecast.forecastday[1].day.maxtemp_c+'°C';
    second_lowTempreture.innerHTML = result.forecast.forecastday[1].day.mintemp_c+'°C';
    second_statues.innerHTML = result.forecast.forecastday[1].day.condition.text;

    // Third Day....
    third_day.innerHTML =  new Date(result.forecast.forecastday[2].date).toLocaleDateString("en-us", {weekday: 'long'});
    third_statuesImg.setAttribute('src', result.forecast.forecastday[2].day.condition.icon);
    third_HightTempreture.innerHTML = result.forecast.forecastday[2].day.maxtemp_c+'°C';
    third_lowTempreture.innerHTML = result.forecast.forecastday[2].day.mintemp_c+'°C';
    third_statues.innerHTML = result.forecast.forecastday[2].day.condition.text;

 }
 
 getTodayWeather(city = 'cairo');



// Get Search forecast

searchInput.addEventListener('keyup', function(city){
    getTodayWeather(searchInput.value)
})


