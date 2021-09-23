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
      console.log(`MyCustomLogicHook onConvoBegin: ${convo.header.name} ${args}`)
    }
  
    onConvoEnd ({ convo, transcript, args }) {
      console.log(`MyCustomLogicHook onConvoEnd ${convo.header.name}, conversation length: ${transcript.steps.length} steps`)
    }
  
    onMeStart ({ convo, convoStep, args }) {
      console.log(`MyCustomLogicHook onMeStart ${convo.header.name}/${convoStep.stepTag}, args: ${utils.inspect(args)}, meMessage: ${convoStep.messageText}`)
    }
  
    onMeEnd ({ convo, convoStep, args }) {
      console.log(`MyCustomLogicHook onMeEnd ${convo.header.name}/${convoStep.stepTag}, args: ${utils.inspect(args)}, meMessage: ${convoStep.messageText}`)
    }
  
    onMe ({ convo, convoStep, args }) {
      console.log(`MyCustomLogicHook onMe ${convo.header.name}/${convoStep.stepTag}, args: ${utils.inspect(args)}, meMessage: ${convoStep.messageText}`)
    }
  
    onBotStart ({ convo, convoStep, args }) {
      console.log(`MyCustomLogicHook onBotStart ${convo.header.name}/${convoStep.stepTag}, args: ${utils.inspect(args)}, expected: ${convoStep.messageText}`)
    }
  
    onBotPrepare ({ convo, convoStep, args }) {
      console.log(`MyCustomLogicHook onBotPrepare ${convo.header.name}/${convoStep.stepTag}, args: ${utils.inspect(args)}, expected: ${convoStep.messageText}`)
    }
  
    onBotEnd ({ convo, convoStep, botMsg, args }) {
      console.log(`MyCustomLogicHook onBotEnd ${convo.header.name}/${convoStep.stepTag}, args: ${utils.inspect(args)}, expected: ${convoStep.messageText}, meMessage: ${botMsg.messageText}`)
    }
  
    onBot ({ convo, convoStep, botMsg, args }) {
      console.log(`MyCustomLogicHook onBot ${convo.header.name}/${convoStep.stepTag}, args: ${utils.inspect(args)}, expected: ${convoStep.messageText}, meMessage: ${botMsg ? botMsg.messageText : null}`)
    }
  }