const { describe } = require("mocha");
const mongoose = require('mongoose')
const Professional = mongoose.model('Professional_Profiles')
const User = mongoose.model('User')
const Job = mongoose.model('Job')
const assert = require('assert')

describe('Creating records', () => {
    it('10 - saves a new profile', async () => {
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

    it('11 - finds all profiles', async () => {
        let profiles = await Professional.find()
        assert(profiles.length === 1)
    })

    it('12 - finds user profile by userId', async () => {
        let profile = await Professional.findOne({ userId: testUser._id })
        assert(profile.professional_firstname === 'Nunya')
    })

})

describe('Updating user profile records', () => {

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

    it('13 - finds user profile by userId', async () => {
        let profile = await Professional.findOne({ userId: testUser._id })
        //upate record here
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

    it('14 - deletes user profile by id', async () => {
        let profile = await Professional.deleteOne({ userId: testUser._id })
        let profiles = await Professional.find()
        assert(profile.deletedCount === 1)
        assert(profiles.length === 0)
    })

})