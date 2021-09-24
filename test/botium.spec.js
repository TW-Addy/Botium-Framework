require('dotenv').config()
const bb = require('botium-bindings')
bb.helper.mocha().setupMochaTestSuite()

const { mockServer } = require('http-mockserver');

const ngrok = require('ngrok');

before(async () => {
  process.env['API_URL'] = await ngrok.connect(8080);
  return mockServer.start();
})

beforeEach(() => {
  mockServer.clearAll();
})

after(() => {
  ngrok.kill();
    return mockServer.stop();
})