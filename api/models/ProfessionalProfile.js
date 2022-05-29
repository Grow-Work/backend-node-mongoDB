const mongoose = require('mongoose')

const savedSchema = new mongoose.Schema({
    job_id: String,
})

const professionalProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    first_name: String,
    last_name: String,
    location: String,
    email: String,
    phone: String,
    bio: String,
    skills: String,
    links: [],
    saved_jobs: [savedSchema]
})

mongoose.model('Professional_Profiles', professionalProfileSchema)