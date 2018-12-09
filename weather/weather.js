const axios = require('axios');

const getWeather = async(lat, lng) => {
    // let openweathermapAPPID = '94da0c612421f1a64785a47ddbf9ec00'
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=94da0c612421f1a64785a47ddbf9ec00`);
    console.log(JSON.stringify(resp.data, null, "\t"));

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}