require('dotenv').config()
require('./api/models/User')
require('./api/models/ProfessionalProfiles')
require('./api/models/CompanyProfiles')

const server = require('./api/server')

const mongoose = require('mongoose')

const URI = process.env.MONGODB_URL;
const PORT = process.env.PORT || 9000

mongoose.connect(URI, {
    useNewUrlParser: true
})
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo db')
})
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo db', err)
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} `)
})