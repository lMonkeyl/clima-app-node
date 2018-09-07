const axios = require("axios");

const getClima = async(lat, lng) => {
    let encondeUrlLat = encodeURI(lat);
    let encondeUrlLng = encodeURI(lng);
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encondeUrlLat}&lon=${ encondeUrlLng }&units=metric&appid=56a9540cfa5e6473e35f17bde716531e`)

    return {
        temp: resp.data.main.temp
    }
}


module.exports = {
    getClima
}