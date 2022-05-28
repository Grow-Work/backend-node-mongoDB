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