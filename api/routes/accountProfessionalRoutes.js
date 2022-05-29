const router = require("express").Router();
const mongoose = require('mongoose')
const Professional = mongoose.model('Professional_Profiles')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

//profile CRUD routes

//create:
router.post('/profile', async (req, res) => {
    const profile = {...req.body, userId: req.user._id}

    try {
        const profile = new Professional(profile)

        await profile.save()
        res.send(profile)
    } catch (err) {
        res.status(422).send(err.message)
    }
    
})

//read:
router.get('/profile', async (req, res) => {
    try {
        const profile = await Professional.findOne({ userId: req.user._id})
        res.send(profile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//update: 
router.put('/profile', async (req, res) => {
    
    try {
        await Professional.updateOne({ userId: req.user._id }, req.body)
        let profile = await Professional.findOne({ userId: req.user._id })
        res.send(profile)
    } catch (error) {
        res.status(422).send(error.message)
    }
})

//delete: 
router.delete('/profile', async (req, res) => {
    try {
        const profile = await Professional.deleteOne({ userId: req.user._id})
        res.send(`${profile.deletedCount} profile deleted`)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//saved jobs routes

//read

//delete
router.delete('/saved-job/:id', async (req, res) => {
    try {
        const savedJob = await Professional.deleteOne({ _id: req.params.id})
        res.send(`${savedJob.deletedCount} saved job deleted`)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router