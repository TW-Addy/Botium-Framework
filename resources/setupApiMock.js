const { mockServer } = require('http-mockserver');

function setupApiMock(mockFile) {
  const mock = require('../mocks/' + mockFile);
  mockServer.addMock(mock);
}

module.exports = class SetupApiMock {
  onConvoBegin({convo, args}) {
    setupApiMock(args);
    console.log(`setupApiMock onConvoBegin: ${convo.header.name} ${args}`)
  }
}