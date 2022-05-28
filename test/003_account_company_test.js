const { describe } = require("mocha");
const mongoose = require('mongoose')
const Company = mongoose.model('Company_Profiles')
const User = mongoose.model('User')
const Job = mongoose.model('Job')
const assert = require('assert')

describe('Creating records', () => {
    it('saves a company profile', async () => {
        const testUser = new User({
            email: 'test@test.com',
            password: 'test',
            account_type: 'test'
            })
        await testUser.save()

        const testCompanyProfile = new Company({
            company_name: "Grow: Work",
            company_location: "Kansas CIty, KS, USA",
            userId: testUser._id
            })
        await testCompanyProfile.save()
        assert(!testCompanyProfile.isNew)
    })
})

describe('Reading user company profile record', () => {
    let testCompanyProfile

    beforeEach(async() => {
        testUser = new User({
            email: 'test@test.com',
            password: 'test',
            account_type: 'test'
            })
        await testUser.save()

        testCompanyProfile = new Company({
            company_name: "Grow: Work",
            company_location: "Kansas CIty, KS, USA",
            userId: testUser._id
            })
        await testCompanyProfile.save()
    })

    it('finds added user profile', async () => {
        let profiles = await Company.find()
        assert(profiles[0]._id.toString() === testCompanyProfile._id.toString())
    })

    it('finds user profile by id', async () => {
        let profile = await Company.findOne({ _id: testCompanyProfile._id })
        assert(profile.company_name === 'Grow: Work')
    })

})

describe('Deleting users records', () => {
    let testUser

    beforeEach(async() => {
        testUser = new User({
            email: 'test@test.com',
            password: 'test',
            account_type: 'test'
            })
        await testUser.save()

        testCompanyProfile = new Company({
            company_name: "Grow: Work",
            company_location: "Kansas CIty, KS, USA",
            userId: testUser._id
            })
        await testCompanyProfile.save()
    })

    it('deletes user profile by id', async () => {
        let profile = await Company.deleteOne({ userId: testUser._id })
        let profiles = await Company.find()
        assert(profile.deletedCount === 1)
        assert(profiles.length === 0)
    })

})