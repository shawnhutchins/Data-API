const express = require ('express')
const router = express.Router()

//Post method
router.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all method
router.get('/getAll', (req, res) => {
    res.send('Get all API')
})

//Get by ID method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router