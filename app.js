//I will add the params without command
const argv = require('yargs').options({
    adress: {
        alias: 'a',
        desc: 'Adress of the city we want to know the weather',
        demand: true
    }
}).argv;

console.log(argv.adress);