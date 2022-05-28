const { describe } = require("mocha");
const mongoose = require('mongoose')
const User = mongoose.model('User')
const assert = require('assert')

describe('Creating records', () => {
    it('saves a user', async () => {
        const testUser = new User({
            email: 'test@test.com',
            password: 'test',
            account_type: 'test'
            })
        await testUser.save()
        assert(!testUser.isNew)
    })
})

describe('Reading users records', () => {
    let testUser

    beforeEach(async() => {
        testUser = new User({
            email: 'test@test.com',
            password: 'test',
            account_type: 'test'
            })
        await testUser.save()
    })

    it('finds added user', async () => {
        let users = await User.find()
        assert(users[0]._id.toString() === testUser._id.toString())
    })

    it('finds user by id', async () => {
        let user = await User.findOne({ _id: testUser._id })
        assert(user.email === 'test@test.com')
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
    })

    it('deletes user by id', async () => {
        let user = await User.deleteOne({ _id: testUser._id })
        let users = await User.find()
        assert(user.deletedCount === 1)
        assert(users.length === 0)
    })

})