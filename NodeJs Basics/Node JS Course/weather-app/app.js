const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address) {
    console.log("Enter Address")
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log('Error ', error)
        }
        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                return console.log('Error ', error)
            }
            console.log('ForeCast Data ', forecastdata)
            console.log('Location Data ', location)
        })
    })
}