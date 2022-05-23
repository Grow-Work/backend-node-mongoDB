const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({})
const linkSchema = new mongoose.Schema({})

const professionalProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: false,
        required: true
    },
    professional_name: String,
    professional_location: String,
    professional_email: String,
    professional_phone: String,
    professional_bio: String,
    professional_skills: [skillSchema],
    professional_links: [linkSchema],
    saved_jobs: []
})

mongoose.model('Professional_Profiles', professionalProfileSchema)