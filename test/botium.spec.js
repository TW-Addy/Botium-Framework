const bb = require('botium-bindings')
bb.helper.mocha().setupMochaTestSuite()

const mockServer = require('../mockServer');

before(() => {
  return mockServer.start();
})

beforeEach(() => {
  mockServer.clearAll();
})

after(() => {
    return mockServer.stop();
})