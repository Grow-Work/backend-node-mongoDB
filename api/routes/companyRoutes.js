const router = require("express").Router();
const mongoose = require('mongoose')
const Company = mongoose.model('Company_Profiles')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', async (req, res) => {

    try {
        const profiles = await Company.find({})
        res.send(profiles)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/:id', async (req, res) => {

    try {
        const profile = await Company.findOne({_id: req.params.id})
        res.send(profile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router