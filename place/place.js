const axios = require('axios');

const getPlaceLatLng = async(address) => {

    //to adapt the parameters to the google api url
    let encodedUrl = encodeURI(address);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyC8hBRAlbrGCvH26yiXvCRiRMZko5zSRS0`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`There are no results for the adress: ${adress}`);

    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;

    console.log('Adress: ', location.formatted_address);
    console.log('lat', coors.lat);
    console.log('lng', coors.lng);

    return {
        address: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getPlaceLatLng
}