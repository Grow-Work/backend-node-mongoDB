const mongoose = require('mongoose')

const companyProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    company_name: String,
    company_location: String,
    company_sector: String,
    company_email: String,
    company_phone: String,
    company_description: String,
    company_links: []
})

mongoose.model('Company_Profiles', companyProfileSchema)