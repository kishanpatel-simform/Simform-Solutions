const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7f867d71871d4bc32c5287db98e2695b&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback(error, undefined)
        } else if (body.error) {
            callback(body.error, undefined)

        } else {
            const output = body.current.temperature + ' , ' + body.current.precip
            callback(undefined, output)
        }
    })

}
module.exports = forecast