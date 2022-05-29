const mongoose = require('mongoose')

const companyProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: String,
    location: String,
    sector: String,
    email: String,
    phone: String,
    description: String,
    links: []
})

mongoose.model('Company_Profiles', companyProfileSchema)