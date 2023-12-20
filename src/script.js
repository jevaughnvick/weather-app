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
        console.log(data);
    };

    searchBtn.addEventListener("click", search);
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