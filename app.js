const axios = require('axios');

//I will add the params without command
const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Adress of the city we want to know the weather',
        demand: true
    }
}).argv;

//to adapt the parameters to the google api url
let encodedUrl = encodeURI(argv.address);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyC8hBRAlbrGCvH26yiXvCRiRMZko5zSRS0`)
    .then(resp => {
        // console.log(JSON.stringify(resp.data, undefined, 2));
        let location = resp.data.results[0];
        let coors = location.geometry.location;

        console.log('Adress: ', location.formatted_address);
        console.log('lat', coors.lat);
        console.log('lng', coors.lng);
    })
    .catch(e => console.log('ERROR!!!', e))