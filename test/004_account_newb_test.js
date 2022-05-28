const { describe } = require("mocha");
const mongoose = require('mongoose')
const Professional = mongoose.model('Professional_Profiles')
const User = mongoose.model('User')
const Job = mongoose.model('Job')
const assert = require('assert')

describe('Creating records', () => {
    it('saves a new profile', async () => {
        const testUser = new User({
            email: 'test@test.com',
            password: 'test',
            account_type: 'test'
            })
        await testUser.save()

        const testProfile = new Professional({
            professional_firstname: "Nunya",
            professional_location: "Kansas CIty, KS, USA",
            userId: testUser._id
            })
        await testProfile.save()
        assert(!testProfile.isNew)
    })
})

describe('Reading user profile records', () => {

    beforeEach(async() => {
        testUser = new User({
            email: 'test@test.com',
            password: 'test',
            account_type: 'test'
            })
        await testUser.save()

        testProfile = new Professional({
            professional_firstname: "Nunya",
            professional_location: "Kansas CIty, KS, USA",
            userId: testUser._id
            })
        await testProfile.save()
    })

    it('finds added user profile', async () => {
        let profiles = await Professional.find()
        assert(profiles[0]._id.toString() === testProfile._id.toString())
        assert(profiles.length === 1)
    })

    it('finds user profile by userId', async () => {
        let profile = await Professional.findOne({ userId: testUser._id })
        assert(profile.professional_firstname === 'Nunya')
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

        testProfile = new Professional({
            professional_firstname: "Nunya",
            professional_location: "Kansas CIty, KS, USA",
            userId: testUser._id
            })
        await testProfile.save()
    })

    it('deletes user profile by id', async () => {
        let profile = await Professional.deleteOne({ userId: testUser._id })
        let profiles = await Professional.find()
        assert(profile.deletedCount === 1)
        assert(profiles.length === 0)
    })

})