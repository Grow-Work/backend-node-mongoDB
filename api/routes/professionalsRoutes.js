const router = require("express").Router();
const mongoose = require('mongoose')
const professional = mongoose.model('professional_Profiles')
const requireAuth = require('../middleware/requireAuth')


router.use(requireAuth)

router.get('/', async (req, res) => {
    const profiles = await professional.find({})
    res.send(profiles)
})

router.post('/', async (req, res) => {
    const {company_name, user_name, location, sector, contact_email, phone, blurb, roles, jobs, skills, links} = req.body

    try {
        const userProfile = new professional({ company_name, user_name, location, sector, contact_email, phone, blurb, roles, jobs, skills, links, userId: req.user._id})
        await userProfile.save()
        res.send(userProfile)
    } catch (err) {
        res.status(422).send(err.message)
    }
    
})

router.get('/user-profile', async (req, res) => {
    
})

router.get('/:id', async (req, res) => {
    const singleProfile = await profile.find({ _id: req.params.id })
    res.send(singleProfile)
})

module.exports = router