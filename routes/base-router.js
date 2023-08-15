const express = require ('express')
const router = express.Router()
const path = require('path')

//Serve homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

module.exports = router