import { format, parseISO } from "date-fns";

const App = (() => {

    const getData = async (location) => {

        const URL = `http://api.weatherapi.com/v1/current.json?key=74f222b03ee0465d9be184210232909&q=${location}`;

        try{
            const response = await fetch(URL, {mode: "cors"});
            const data = await response.json();
            return data;
        }catch(error){
            alert(error);
            return null;
        }
    };

    return { getData };
})();


const UIController = (() => {

    const searchBtn = document.getElementById("search-btn");

    const input = document.querySelector("#search");

    const search = async () => {
        if(!input.value) return;
        const data = await App.getData(input.value);
        UpdateScreen.showState(data);
    };

    searchBtn.addEventListener("click", search);
})();



const UpdateScreen = (() => {

    const country = document.querySelector(".country");
    const region = document.querySelector(".region");
    const time = document.querySelector(".numbers")

    // install date-fns
    const date = document.querySelector(".date");
    const temp = document.querySelector(".temp");
    const condition = document.querySelector(".condition");
    const feelsLike = document.querySelector(".feels-like");
    const windSpeed = document.querySelector(".wind-speed");
    const humidity = document.querySelector(".humidity");
    const windDirection = document.querySelector(".wind-direction");

    const showState = (data) => {

        displayCountry(data);
        displayRegion(data);
        displayTemp(data);
        displayFeelsLike(data);
        displayHumidity(data);
        displayWindDirection(data);
        displayWindSpeed(data);
        displayTime(data);
        displayDate(data);
    };

    const setBackground = async (data) => {};

    const displayTime = async (data) => {

        const timeFromApi = await data.location.localtime.slice(11, 15);
        time.textContent = timeFromApi;
    };

    const displayDate = async (data) => {

        const dateFromApi = await data.location.localtime.slice(0, 10);
        const formattedDate = format(parseISO(dateFromApi), "MMMM dd, yyyy");
        date.textContent = formattedDate;
    };

    const displayCountry = async (data) => {

        const countryFromApi = await data.location.country;
        country.textContent = countryFromApi;
    };

    const displayRegion = async (data) => {

        const regionFromApi = await data.location.region;
        region.textContent = regionFromApi;
    };

    const displayTemp = async (data) => {

        const tempFromApi = await data.current.temp_c;
        temp.textContent = `${tempFromApi}°C`;
    };

    const displayFeelsLike = async (data) => {

        const feelsLikeFromApi = await data.current.feelslike_c;
        feelsLike.textContent = `Feels Like: ${feelsLikeFromApi}°C`;
    };

    const displayHumidity = async (data) => {

        const humidityFromApi = await data.current.humidity;
        humidity.textContent = `Humidity: ${humidityFromApi}`;
    };

    const displayWindDirection = async (data) => {

        const windDirectionFromApi = await data.current.wind_dir;
        windDirection.textContent = windDirectionFromApi;
    };

    const displayWindSpeed = async (data) => {

        const windSpeedFromApi = await data.current.wind_mph;
        windSpeed.textContent = windSpeedFromApi;
    };

    return { showState };
})();