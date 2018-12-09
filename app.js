const place = require('./place/place');
const weather = require('./weather/weather');

//I will add the params without command
const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Adress of the city we want to know the weather',
        demand: true
    }
}).argv;

let getInfo = async(address) => {
    try {
        let coors = await place.getPlaceLatLng(address);
        let temp = await weather.getWeather(coors.lat, coors.lng);

        return `The weather in ${coors.address} is ${temp} ºC`;

    } catch (error) {
        return `Could not obtain the weather in ${adress}`;
    }
}

getInfo(argv.address)
    .then(message => console.log(message))
    .catch(e => console.log(e));