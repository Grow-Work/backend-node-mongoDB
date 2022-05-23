const router = require("express").Router();
const mongoose = require('mongoose')
const Professional = mongoose.model('professional_Profiles')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', async (req, res) => {
    const profiles = await Professional.find({})
    res.send(profiles)
})

router.get('/:id', async (req, res) => {
    const singleProfile = await Professional.find({ _id: req.params.id })
    res.send(singleProfile)
})

module.exports = router