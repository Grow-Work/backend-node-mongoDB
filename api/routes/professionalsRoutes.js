const router = require("express").Router();
const mongoose = require('mongoose')
const Professional = mongoose.model('Professional_Profiles')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

//this is a test

router.get('/', async (req, res) => {

    try {
        const profiles = await Professional.find({})
        res.send(profiles)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/:id', async (req, res) => {

    try {
        const profile = await Professional.findOne({_id: req.params.id})
        res.send(profile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router