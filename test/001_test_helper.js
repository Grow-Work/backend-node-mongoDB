require('dotenv').config()
require('../api/models/User')
require('../api/models/ProfessionalProfile')
require('../api/models/CompanyProfile')
require('../api/models/Job')

const mongoose = require('mongoose');
const URI = process.env.MONGODB_URL_TEST;

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect(URI, {
    useNewUrlParser: true
})
  mongoose.connection
    .once('open', () => { console.log('Connected to mongo db'), done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {});
  mongoose.connection.collections.company_profiles.drop(() => {
    // Ready to run the next test!
    done();
  });
});