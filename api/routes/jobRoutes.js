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
    const job = await Job.findOne({_id: req.params.id})
    res.send(job)
})

module.exports = router