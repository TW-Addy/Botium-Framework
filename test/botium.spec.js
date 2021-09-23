const bb = require('botium-bindings')
bb.helper.mocha().setupMochaTestSuite()

const { mockServer } = require('http-mockserver');

before(() => {
  return mockServer.start(4001);
})

beforeEach(() => {
  mockServer.clearAll();
})

after(() => {
    return mockServer.stop();
})