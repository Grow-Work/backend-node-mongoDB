const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    company: String,
    starting: String,
    ending: String
})

const linkSchema = new mongoose.Schema({})

const companyProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: false,
        required: true
    },
    company_name: String,
    company_location: String,
    company_sector: String,
    company_email: String,
    company_phone: String,
    company_description: String,
    company_job_listings: [jobSchema],
    company_links: [linkSchema]
})

mongoose.model('Company_Profiles', companyProfileSchema)