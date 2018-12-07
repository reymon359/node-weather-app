const place = require('./place/place');

//I will add the params without command
const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Adress of the city we want to know the weather',
        demand: true
    }
}).argv;

place.getPlaceLatLng(argv.address)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));