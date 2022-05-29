const { describe } = require("mocha");
const mongoose = require('mongoose')
const Company = mongoose.model('Company_Profiles')
const User = mongoose.model('User')
const assert = require('assert')

describe('Creating records', () => {
    it('05 - saves a company profile', async () => {
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

describe('Reading company profile records', () => {

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

    it('06 - finds all profiles', async () => {
        let profiles = await Company.find()
        assert(profiles.length === 1)
    })

    it('07 - finds user profile by userId', async () => {
        let profile = await Company.findOne({ userId: testUser._id })
        assert(profile.company_name === 'Grow: Work')
    })

})

describe('Updating company profile records', () => {

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

    it('08 - updates user profile by userId', async () => {
        let profile = await Company.findOne({ userId: testUser._id })
        //update here
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

    it('09 - deletes user profile by id', async () => {
        let profile = await Company.deleteOne({ userId: testUser._id })
        let profiles = await Company.find()
        assert(profile.deletedCount === 1)
        assert(profiles.length === 0)
    })

})