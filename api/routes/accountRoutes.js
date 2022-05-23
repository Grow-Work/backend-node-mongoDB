const router = require("express").Router();
const mongoose = require('mongoose')
const Company = mongoose.model('Company_Profiles')
const professional = mongoose.model('professional_Profiles')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/profile', async (req, res) => {
    try {
        if (req.user.account_type === "professional") {
            const professionalProfile = await professional.find({ userId: req.user._id})
            res.send(professionalProfile)
        } else if (req.user.account_type === "company") {
            const companyProfile = await Company.find({ userId: req.user._id})
            res.send(companyProfile)
        } else {
            res.send('No profile found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/company-profile', async (req, res) => {
    try {
        const companyProfile = await Company.find({ userId: req.user._id})
        res.send(companyProfile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/professional-profile', async (req, res) => {
    try {
        const companyProfile = await Company.find({ userId: req.user._id})
        res.send(companyProfile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/company-profile', async (req, res) => {
    const {company_name, user_name, location, sector, contact_email, phone, blurb, roles, jobs, skills, links} = req.body

    try {
        const Profile = new Company({ company_name, user_name, location, sector, contact_email, phone, blurb, roles, jobs, skills, links, userId: req.user._id})
        await userProfile.save()
        res.send(userProfile)
    } catch (error) {
        res.status(422).send(error.message)
    }
})

router.post('/professional-profile', async (req, res) => {
    const {company_name, user_name, location, sector, contact_email, phone, blurb, roles, jobs, skills, links} = req.body

    try {
        const userProfile = new professional({ company_name, user_name, location, sector, contact_email, phone, blurb, roles, jobs, skills, links, userId: req.user._id})
        await userProfile.save()
        res.send(userProfile)
    } catch (error) {
        res.status(422).send(error.message)
    }
})

module.exports = router