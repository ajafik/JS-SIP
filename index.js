const jssip  = require("jssip");


console.log(jssip);

var socket = new JsSIP.WebSocketInterface('wss://sip.myhost.com');
var configuration = {
  sockets  : [ socket ],
  uri      : 'sip:alice@example.com',
  password : 'superpassword'
};

//User Agent
var coolPhone = new JsSIP.UA(configuration);


coolPhone.on('connected', function(e){ /* Your code here */ });

coolPhone.on('disconnected', function(e){ /* Your code here */ });

coolPhone.on('newRTCSession', function(e){ /* Your code here */ });

coolPhone.on('newMessage', function(e){ /* Your code here */ });


coolPhone.on('registered', function(e){ /* Your code here */ });
coolPhone.on('unregistered', function(e){ /* Your code here */ });
coolPhone.on('registrationFailed', function(e){ /* Your code here */ });


coolPhone.start();

