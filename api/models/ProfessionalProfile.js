const mongoose = require('mongoose')

const savedSchema = new mongoose.Schema({
    job_id: String,
    title: String,
    company: String
})

const professionalProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    professional_firstname: String,
    professional_lastname: String,
    professional_location: String,
    professional_email: String,
    professional_phone: String,
    professional_bio: String,
    professional_skills: [],
    professional_links: [],
    saved_jobs: [savedSchema]
})

mongoose.model('Professional_Profiles', professionalProfileSchema)