const { describe } = require("mocha");
const mongoose = require('mongoose')
const User = mongoose.model('User')
const Job = mongoose.model('Job')
const assert = require('assert')

describe('Creating records', () => {
    it('saves a new job', async () => {
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
    })

    it('finds added job', async () => {
        let jobs = await Job.find()
        assert(jobs[0]._id.toString() === testJob._id.toString())
        assert(jobs.length === 1)
    })

    it('finds job by userId', async () => {
        let job = await Job.findOne({ userId: testUser._id })
        assert(job.title === 'Full Stack Dev')
    })

})

describe('Deleting users records', () => {

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

    it('deletes user profile by id', async () => {
        let job = await Job.deleteOne({ userId: testUser._id })
        let jobs = await Job.find()
        assert(job.deletedCount === 1)
        assert(jobs.length === 0)
    })

})