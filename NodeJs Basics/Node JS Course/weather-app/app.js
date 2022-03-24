const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=7f867d71871d4bc32c5287db98e2695b&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {

    if (error) {
        console.log(error)
    } else if (response.body.error) {
        console.log(response.body.error)
    } else {
        console.log("it is currently " + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + ' chances of rain')

    }
})


const getdata = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2lzaGFucDEyMDIiLCJhIjoiY2wxNHZodzlhM3BrcTNpcnBuaXAyYmMxZCJ9.JXCMAvofJ2ywQL3kiUa0mQ'

request({ url: getdata, json: true }, (error, response) => {
    if (error) {
        console.log(error)
    } else if (response.body.features.length === 0) {
        console.log(response.body.error)
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }

})