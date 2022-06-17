const router = require("express").Router();
const mongoose = require('mongoose')
const Job = mongoose.model('Job')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', async (req, res) => {

    try {
        const jobs = await Job.find({})
        res.send(jobs)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/:id', async (req, res) => {

    try {
        const job = await Job.findOne({_id: req.params.id})
        res.send(job)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router