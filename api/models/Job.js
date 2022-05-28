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
    required_skills: [],
    preferred_skills: [],
    location: String,
    job_type: String,
    apply_link: String
})

mongoose.model('Job', jobSchema)