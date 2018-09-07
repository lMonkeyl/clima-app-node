const lugar = require('./lugar/lugar');
const tempp = require('./clima/clima');
const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coor = await lugar.getLugarLatLng(direccion);
        let temp = await tempp.getClima(coor.lat, coor.lng);
        return `La direccion ${coor.direccion}, con latitud de ${coor.lat} y longitud de ${coor.lng } tiene una temperatura de ${ temp.temp }`;
    } catch (error) {
        return `No se pudo determinar el clima en ${ direccion }`
    }
}

getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(e => console.log(e));