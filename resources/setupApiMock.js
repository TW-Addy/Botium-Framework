const mockServer = require('../mockServer');
function setupApiMock(mockFile) {
  const mock = require('../mocks/'+mockFile);
  mockServer.addMock(mock);
}

const utils = {
  inspect: JSON.stringify
}


module.exports = class SetupApiMock {
    onConvoBegin ({ convo, args }) {
      setupApiMock(args);
      console.log(`setupApiMock onConvoBegin: ${convo.header.name} ${args}`)
    }
  }