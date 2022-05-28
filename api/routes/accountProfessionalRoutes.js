const router = require("express").Router();
const mongoose = require('mongoose')
const Professional = mongoose.model('Professional_Profiles')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

//profile CRUD routes

//create:
router.post('/profile', async (req, res) => {
    const {professional_firstname, professional_lastname, professional_location,professional_email, professional_phone, professional_bio, professional_skills, saved_jobs, professional_links} = req.body

    try {
        const userProfile = new Professional({ professional_firstname, professional_lastname, professional_location,professional_email, professional_phone, professional_bio, professional_skills, saved_jobs, professional_links, userId: req.user._id})

        await userProfile.save()
        res.send(userProfile)
    } catch (err) {
        res.status(422).send(err.message)
    }
    
})

//read:
router.get('/profile', async (req, res) => {
    try {
        const companyProfile = await Professional.findOne({ userId: req.user._id})
        res.send(companyProfile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//update: 
router.put('/profile', async (req, res) => {
    const {professional_name, professional_location,professional_email, professional_phone, professional_bio, professional_skills, saved_jobs, professional_links} = req.body

    try {
        const professionalProfile = await Professional.find({ userId: req.user._id})
        //update profile
        res.send(professionalProfile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//delete: 
router.delete('/profile/:id', async (req, res) => {
    try {
        const companyProfile = await Professional.deleteOne({ _id: req.params.id})
        console.log(req.params)
        res.send("Profile Deleted")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//saved jobs routes - delete only
router.delete('/saved-job/:id', async (req, res) => {
    try {
        //needs narrowing down to saved jobs
        const companyProfile = await Professional.deleteOne({ _id: req.params.id})
        //delete found job
        res.send("Save Deleted")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router