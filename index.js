require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL
const baseRouter = require('./routes/base-router.js')
const apiRouter = require('./routes/api-router.js')

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected')
})

const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use('/', baseRouter)
app.use('/api', apiRouter)

app.listen(3000, () => {
    console.log(`Server started at ${3000}`)
})