require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL
const path = require('path')
const baseRouter = require('./routes/base-router.js')
const apiRouter = require('./routes/api-router.js')

//Connect to the database
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected')
})

//Create app
const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//Setup routers
app.use('/', baseRouter)
app.use('/api', apiRouter)

//Connect static files directory
app.use(express.static(path.join(__dirname, 'public')))

//Start serving
app.listen(3000, () => {
    console.log(`Server started at ${3000}`)
})