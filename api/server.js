const express = require("express")
const server = express()

const carsRouter = require('./cars/cars-router')

server.use(express.json())
server.use('/cars', carsRouter)

server.use('*', (req, res) => {
    res.send(`<h1>Hello, there!</h1>`)
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server
