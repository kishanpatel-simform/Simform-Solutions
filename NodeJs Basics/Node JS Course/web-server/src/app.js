const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()


const publicDirectory = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'This is Index Page',
        name: 'Kishan Patel'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'This is About Page',
        content: 'About content will go here'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'This is Help Page',
        content: 'Help Content will go here'
    })
})
app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'It is Raining',
        location: 'Haridwar'
    }])
})

app.get('*', (req, res) => {
    res.render('help', {
        title: 'This is 404 Page',
        errormessage: 'Page Not Found'
    })
})

app.listen(3000, () => {
    console.log("Server Started")
})