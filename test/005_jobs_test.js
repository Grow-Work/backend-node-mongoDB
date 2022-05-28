const { describe } = require("mocha");
const mongoose = require('mongoose')
const User = mongoose.model('User')
const Job = mongoose.model('Job')
const assert = require('assert')

describe('Creating records', () => {
    it('15 - saves a new job', async () => {
        const testUser = new User({
            email: 'test@test.com',
            password: 'test',
            account_type: 'company'
            })
        await testUser.save()

        const testJob = new Job({
            title: "Full Stack Dev",
            company: "Grow: Work",
            userId: testUser._id
            })
        await testJob.save()
        assert(!testJob.isNew)
    })
})

describe('Reading jobs records', () => {

    beforeEach(async() => {
        testUser = new User({
            email: 'test@test.com',
            password: 'test',
            account_type: 'company'
            })
        await testUser.save()

        testJob = new Job({
            title: "Full Stack Dev",
            company: "Grow: Work",
            userId: testUser._id
            })
        await testJob.save()

        testJob2 = new Job({
            title: "Front End Dev",
            company: "Serenity Images",
            userId: testUser._id
            })
        await testJob2.save()
    })

    it('16 - finds added jobs', async () => {
        let jobs = await Job.find()
        assert(jobs.length === 2)
    })

    it('17 - finds job by userId', async () => {
        let jobs = await Job.find({ userId: testUser._id })
        assert(jobs.length === 2)
    })

    it('18 - finds job by id', async () => {
        let job = await Job.findOne({ _id: testJob._id })
        assert(job.title === 'Full Stack Dev')
    })

})

describe('Reading jobs records', () => {

    beforeEach(async() => {
        testUser = new User({
            email: 'test@test.com',
            password: 'test',
            account_type: 'company'
            })
        await testUser.save()

        testJob = new Job({
            title: "Full Stack Dev",
            company: "Grow: Work",
            userId: testUser._id
            })
        await testJob.save()

        testJob2 = new Job({
            title: "Front End Dev",
            company: "Serenity Images",
            userId: testUser._id
            })
        await testJob2.save()
    })

    it('19 - updates job by id', async () => {
        let job = await Job.findOne({ _id: testJob._id })
        //update here
        assert(job.title === 'Full Stack Dev')
    })

})

describe('Deleting job records', () => {

    beforeEach(async() => {
        testUser = new User({
            email: 'test@test.com',
            password: 'test',
            account_type: 'company'
            })
        await testUser.save()

        testJob = new Job({
            title: "Full Stack Dev",
            company: "Grow: Work",
            userId: testUser._id
            })
        await testJob.save()
        assert(!testJob.isNew)
    })

    it('20 - deletes job by id', async () => {
        let job = await Job.deleteOne({ _id: testJob._id })
        let jobs = await Job.find()
        assert(job.deletedCount === 1)
        assert(jobs.length === 0)
    })

})