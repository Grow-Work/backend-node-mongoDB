const router = require("express").Router();
const mongoose = require('mongoose')
const Company = mongoose.model('Company_Profiles')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.post('/', async (req, res) => {
    const {company_name, user_name, location, sector, contact_email, phone, blurb, roles, jobs, skills, links} = req.body
    
    try {
        const userProfile = new Company({ company_name, user_name, location, sector, contact_email, phone, blurb, roles, jobs, skills, links, userId: req.user._id})
        await userProfile.save()
        res.send(userProfile)
    } catch (err) {
        res.status(422).send(err.message)
    }
    
})

router.get('/', async (req, res) => {
    const profiles = await Company.find({})
    res.send(profiles)
})

router.get('/:id', async (req, res) => {
    const singleProfile = await Company.find({ _id: req.params.id })
    res.send(singleProfile)
})

module.exports = router