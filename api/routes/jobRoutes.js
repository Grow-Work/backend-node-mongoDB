const router = require("express").Router();
const mongoose = require('mongoose')
const Job = mongoose.model('Job')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', async (req, res) => {
    const jobs = await Job.find({})
    res.send(jobs)
})

router.get('/:id', async (req, res) => {
    const singleJobPost = await Job.find({ _id: req.params.id })
    res.send(singleJobPost)
})

module.exports = router