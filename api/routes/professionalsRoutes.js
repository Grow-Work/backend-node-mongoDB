const router = require("express").Router();
const mongoose = require('mongoose')
const Professional = mongoose.model('Professional_Profiles')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', async (req, res) => {
    const profiles = await Professional.find({})
    res.send(profiles)
})

router.get('/:id', async (req, res) => {
    const profile = await Professional.findOne({_id: req.params.id})
    res.send(profile)
})

module.exports = router