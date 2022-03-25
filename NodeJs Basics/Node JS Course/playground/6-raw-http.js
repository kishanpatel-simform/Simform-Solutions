const http = require('http')
const { Http2ServerRequest } = require('http2')
const url = 'http://api.weatherstack.com/current?access_key=7f867d71871d4bc32c5287db98e2695b&query=40,-75'


const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()

    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})
request.on('error', (error) => {
    console.log('Error :- ', error)
})
request.end()
console.log("Raw")