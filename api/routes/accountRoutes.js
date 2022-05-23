const router = require("express").Router();
const mongoose = require('mongoose')
const Company = mongoose.model('Company_Profiles')
const Professional = mongoose.model('Professional_Profiles')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

//professional-profile CRUD routes

//create:
router.post('/professional-profile', async (req, res) => {
    const {professional_name, professional_location,professional_email, professional_phone, professional_bio, professional_skills, saved_jobs, professional_links} = req.body

    try {
        const userProfile = new Professional({ professional_name, professional_location,professional_email, professional_phone, professional_bio, professional_skills, saved_jobs, professional_links, userId: req.user._id})

        await userProfile.save()
        res.send(userProfile)
    } catch (err) {
        res.status(422).send(err.message)
    }
    
})

//read:
router.get('/professional-profile', async (req, res) => {
    try {
        const companyProfile = await Professional.find({ userId: req.user._id})
        res.send(companyProfile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//update: 
router.put('/professional-profile', async (req, res) => {
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
router.delete('/professional-profile', async (req, res) => {
    try {
        const companyProfile = await Professional.find({ userId: req.user._id})
        //delete found profile
        res.send("Profile Deleted")
    } catch (error) {
        res.status(500).send(error.message)
    }
    
})

//company-profile CRUD routes

//create:
router.post('/company-profile', async (req, res) => {
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
router.get('/company-profile', async (req, res) => {
    try {
        const companyProfile = await Company.find({ userId: req.user._id})
        res.send(companyProfile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//update:
router.put('/company-profile', async (req, res) => {
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
router.delete('/company-profile', async (req, res) => {
    try {
        const companyProfile = await Company.find({ userId: req.user._id})
        //delete found profile
        res.send("Profile Deleted")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router