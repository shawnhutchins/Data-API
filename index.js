require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes.js')

const app = express()

app.use('/api', routes)
app.use(express.json())
app.listen(3000, () => {
    console.log(`Server started at ${3000}`)
})

