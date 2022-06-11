const router = require("express").Router();
const mongoose = require('mongoose')
const Company = mongoose.model('Company_Profiles')
const Professional = mongoose.model('Professional_Profiles')
const Job = mongoose.model('Job')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

//profile CRUD routes

//create:
router.post('/profile', async (req, res) => {

    const accountType = req.user.account_type
    const reqBody = {...req.body, userId: req.user._id}

    try {
        if (accountType == "company") {
            const profile = new Company(reqBody)
            await profile.save()
            res.send(profile)
        } else {
            const profile = new Professional(reqBody)
            await profile.save()
            res.send(profile)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//read:
router.get('/profile', async (req, res) => {

    const accountType = req.user.account_type

    try {
        if (accountType == "company") {
            const profile = await Company.findOne({userId: req.user._id})
            res.send(profile)
        } else {
            const profile = await Professional.findOne({userId: req.user._id})
            res.send(profile)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//update:
router.put('/profile', async (req, res) => {
    const accountType = req.user.account_type

    try {
        if (accountType == "company") {
            await Company.updateOne({userId: req.user._id}, req.body)
            let profile = await Company.findOne({userId: req.user._id})
            res.send(profile)
        } else {
            await Professional.updateOne({userId: req.user._id}, req.body)
            let profile = await Professional.findOne({userId: req.user._id})
            res.send(profile)
        }
        
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//delete:
router.delete('/profile', async (req, res) => {

    const accountType = req.user.account_type

    try {
        if (accountType == "company") {
            const profile = await Company.deleteOne({userId: req.user._id})
            res.send(`${profile.deletedCount} profile deleted`)
        } else {
            const profile = await Professional.deleteOne({userId: req.user._id})
            res.send(`${profile.deletedCount} profile deleted`)
        }
        
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//company job-listings CRUD operations

//create:
router.post('/job-listings', async (req, res) => {
    const accountType = req.user.account_type
    const reqBody = {...req.body, userId: req.user._id}

    try {
        const jobListing = new Job(reqBody)

        await jobListing.save()
        res.send(jobListing)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//read

router.get('/job-listings', async (req, res) => {
    const accountType = req.user.account_type
    const jobListing = await Job.find({userId: req.user._id})
    res.send(jobListing)
})

router.get('/job-listings/:id', async (req, res) => {
    const accountType = req.user.account_type
    const jobListing = await Job.findOne({_id: req.params.id})
    res.send(jobListing)
})

//update
router.put('/job-listings/:id', async (req, res) => {
    const accountType = req.user.account_type

    try {
        await Job.updateOne({_id: req.params.id}, req.body)
        let jobListing = await Job.findOne({_id: req.params.id})
        res.send(jobListing)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.delete('/job-listings/:id', async (req, res) => {
    const accountType = req.user.account_type
    
    try {
        const jobListing = await Job.deleteOne({_id: req.params.id})
        res.send(`${jobListing.deletedCount} job listing deleted`)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//saved-jobs routes

//read

//delete
router.delete('/saved-job/:id', async (req, res) => {
    try {
        const savedJob = await Professional.deleteOne({_id: req.params.id})
        res.send(`${savedJob.deletedCount} saved job deleted`)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router