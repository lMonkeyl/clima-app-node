const axios = require("axios");


const getLugarLatLng = async(direccion) => {

    let encondeURL = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondeURL}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay reusltados para la ciudad ${ direccion }`);
    }
    let addres = resp.data.results[0].formatted_address;
    let latlong = resp.data.results[0].geometry.location;
    return {
        direccion: addres,
        lat: latlong.lat,
        lng: latlong.lng
    }
}

module.exports = {
    getLugarLatLng
}