/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("const App = (() => {\n\n    let weatherInfo;\n    fetch(`http://api.weatherapi.com/v1/current.json?key=74f222b03ee0465d9be184210232909&q=${location}`).then(response => response.json()).then(json => weatherInfo = json);\n\n    // console.log(weatherInfo)\n\n    return { weatherInfo, };\n})();\n\n\n\nconst UIController = (() => {\n\n    const searchBtn = document.querySelector(\".search\");\n\n    const getData = () => {\n\n        const input = document.querySelector(\"input\");\n\n        App.initData(input.value);\n    };\n\n    searchBtn.addEventListener(\"click\", getData);\n})();\n\n\n\nconst UpdateScreen = (() => {\n\n    const region = document.querySelector(\".region\");\n    const time = {\n        digits: document.querySelector(\".numbers\"),\n        meridiem: document.querySelector(\".meridiem\")\n    };\n    // install date-fns\n    const date = document.querySelector(\".date\");\n    const temp = document.querySelector(\".temp\");\n    const condition = document.querySelector(\".condition\");\n    const feelsLike = document.querySelector(\".feels-like\");\n    const windSpeed = document.querySelector(\".wind-speed\");\n    const humidity = document.querySelector(\".humidity\");\n    const windDirection = document.querySelector(\".wind-direction\");\n\n    // console.log(App.weatherInfo);\n\n    const displayCountry = () => {\n\n        const country = document.querySelector(\".country\");\n        // country.textContent = App.weatherInfo.location.country;\n        // console.log(App.weatherInfo.location)\n    };\n\n    // displayCountry();\n})();\n\n//# sourceURL=webpack://weather-app/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;