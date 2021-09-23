const bb = require('botium-bindings')
bb.helper.mocha().setupMochaTestSuite()

const mockServer = require('../mockServer');

process.env['API_URL'] = 'http://c195-2603-8080-f60c-43c9-381f-8e68-985f-ca6c.ngrok.io';

before(() => {
  return mockServer.start();
})

beforeEach(() => {
  mockServer.clearAll();
})

after(() => {
    return mockServer.stop();
})