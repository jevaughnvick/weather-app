const App = (() => {

    let weatherInfo;
    fetch(`http://api.weatherapi.com/v1/current.json?key=74f222b03ee0465d9be184210232909&q=${location}`).then(response => response.json()).then(json => weatherInfo = json);

    // console.log(weatherInfo)

    return { weatherInfo, };
})();



const UIController = (() => {

    const searchBtn = document.querySelector(".search");

    const getData = () => {

        const input = document.querySelector("input");

        App.initData(input.value);
    };

    searchBtn.addEventListener("click", getData);
})();



const UpdateScreen = (() => {

    const region = document.querySelector(".region");
    const time = {
        digits: document.querySelector(".numbers"),
        meridiem: document.querySelector(".meridiem")
    };
    // install date-fns
    const date = document.querySelector(".date");
    const temp = document.querySelector(".temp");
    const condition = document.querySelector(".condition");
    const feelsLike = document.querySelector(".feels-like");
    const windSpeed = document.querySelector(".wind-speed");
    const humidity = document.querySelector(".humidity");
    const windDirection = document.querySelector(".wind-direction");

    // console.log(App.weatherInfo);

    const displayCountry = () => {

        const country = document.querySelector(".country");
        // country.textContent = App.weatherInfo.location.country;
        // console.log(App.weatherInfo.location)
    };

    // displayCountry();
})();