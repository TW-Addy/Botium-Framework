const mockServer = require('../mockServer');
function setupApiMock(mockFile) {
  const mock = require('../mocks/'+mockFile);
  mockServer.addMock(mock);
}

const utils = {
  inspect: JSON.stringify
}


module.exports = class MyCustomLogicHook {
    constructor (context, caps, globalArgs) {
      this.context = context
      this.caps = caps
      this.globalArgs = globalArgs
      console.log(`MyCustomLogicHook constructor, globalArgs: ${utils.inspect(globalArgs)}`)
    }
  
    onConvoBegin ({ convo, args }) {
      setupApiMock(args);
      console.log(`MyCustomLogicHook onConvoBegin: ${convo.header.name} ${args}`)
    }
  }