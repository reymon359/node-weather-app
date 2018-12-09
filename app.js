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

// place.getPlaceLatLng(argv.address)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

weather.getWeather(41.390205, 2.154007)
    .then(temp => console.log(temp))
    .catch(e => console.log(e))