var events = require('events');

var eventEmitter = new events.eventEmit();

eventEmitter.on('someEvent', function(msg){
    console.log(msg);
});


var emit = eventEmitter('someEvent', "This is event emitter");