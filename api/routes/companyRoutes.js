const router = require("express").Router();
const mongoose = require('mongoose')
const Company = mongoose.model('Company_Profiles')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', async (req, res) => {
    const profiles = await Company.find({})
    res.send(profiles)
})

router.get('/:id', async (req, res) => {
    const singleProfile = await Company.find({ _id: req.params.id })
    res.send(singleProfile)
})

module.exports = router