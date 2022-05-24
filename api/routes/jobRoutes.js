const router = require("express").Router();
const mongoose = require('mongoose')
const Job = mongoose.model('Job')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', async (req, res) => {
    const profiles = await Job.find({})
    res.send(profiles)
})

router.get('/:id', async (req, res) => {
    const singleProfile = await Job.find({ _id: req.params.id })
    res.send(singleProfile)
})

module.exports = router