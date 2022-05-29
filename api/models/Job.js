const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: String,
    company: String,
    description: String,
    compensation: String,
    required_skills: String,
    preferred_skills: String,
    location: String,
    job_type: String,
    apply_link: String
})

mongoose.model('Job', jobSchema)