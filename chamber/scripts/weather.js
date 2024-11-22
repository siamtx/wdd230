// 49.75, 6.64 Trier, Germany


// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector("figcaption");

const url = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=32.9&lon=-80.68&appid=906a1930e266ce498fc9ec3ad06e00ef';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
        console.error(error);
        // Expected output: ReferenceError: nonExistentFunction is not defined
        // (Note: the exact output may be browser-dependent)
      }
      
}

apiFetch();



function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

