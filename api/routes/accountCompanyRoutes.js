const router = require("express").Router();
const mongoose = require('mongoose')
const Company = mongoose.model('Company_Profiles')
const Job = mongoose.model('Job')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

//profile CRUD routes

//create:
router.post('/profile', async (req, res) => {
    const {company_name, company_location, company_sector, company_email, company_phone, company_description, company_job_listings, company_links} = req.body

    try {
        const userProfile = new Company({ company_name, company_location, company_sector, company_email, company_phone, company_description, company_job_listings, company_links, userId: req.user._id})

        await userProfile.save()
        res.send(userProfile)
    } catch (error) {
        res.status(422).send(error.message)
    }
})

//read:
router.get('/profile', async (req, res) => {
    try {
        const companyProfile = await Company.find({ userId: req.user._id})
        res.send(companyProfile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//update:
router.put('/profile', async (req, res) => {
    const {company_name, company_location, company_sector, company_email, company_phone, company_description, company_job_listings, company_links} = req.body

    try {
        const companyProfile = await Company.find({ userId: req.user._id})
        //update profile
        res.send(companyProfile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//delete:
router.delete('/profile', async (req, res) => {
    try {
        const companyProfile = await Company.find({ userId: req.user._id})
        //delete found profile
        res.send("Profile Deleted")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//company job-listing CRUD operations

//create:
router.post('/job-listing', async (req, res) => {
    const { title, company, description, compensation, location, required_skills, preferred_skills, job_type, apply_link } = req.body

    try {
        const jobListing = new Job({ title, company, description, compensation, location, required_skills, preferred_skills, job_type, apply_link, userId: req.user._id })

        await jobListing.save()
        res.send(jobListing)
    } catch (error) {
        res.status(422).send(error.message)
    }
})

//update
router.post('/job-listing', async (req, res) => {
    const { title, company, description, compensation, location, required_skills, preferred_skills, job_type, apply_link } = req.body

    try {
        //const jobListing = new Job({ title, company, description, compensation, location, required_skills, preferred_skills, job_type, apply_link, userId: req.user._id })

        //update data
        //res.send(jobListing)
    } catch (error) {
        res.status(422).send(error.message)
    }
})

router.delete('/job-listing', async (req, res) => {
    
    try {
        //delete data
        
    } catch (error) {
        res.status(422).send(error.message)
    }
})

module.exports = router