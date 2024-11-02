const App = (() => {

    const getData = async (location) => {

        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=9EMZXCGE9XYHMADB62C8VL578&contentType=json`;

        try{

            const response = await fetch(url, {mode: "cors"});
            return await response.json();
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

    input.focus();

    const search = async () => {
        if(!input.value) return;

        const data = await App.getData(input.value);
        UpdateScreen.showState(data);
    };

    searchBtn.addEventListener("click", search);
    document.addEventListener("keydown", (e) => {

        if(e.key === "Enter") search();
    });
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

        displayArea(data);
        // displayTemp(data);
        // displayHumidity(data);
        // displayWindSpeed(data);
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

    const displayArea = data => {

        const address = data.resolvedAddress;
        if(address.includes(",")){
            const array = address.split(", ");
            if(array.length > 2){
                region.textContent = array[0];
                country.textContent = array[array.length - 1];
            }else{
                region.textContent = array[0];
                country.textContent = array[1];
            }
        }else{
            country.textContent = address;
            region.textContent = "";
        }
    };

    const displayTemp = async (data) => {

        const tempFromApi = await data.currentConditions.temp;
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