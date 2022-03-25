const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2lzaGFucDEyMDIiLCJhIjoiY2wxNHZodzlhM3BrcTNpcnBuaXAyYmMxZCJ9.JXCMAvofJ2ywQL3kiUa0mQ'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback(error, undefined)
        } else {

            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })

        }

    })
}
module.exports = geocode