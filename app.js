const app = require('express')();
const http = require('http').Server(app);
const stream = require('./stream/socket');
stream(http)

http.listen(3000, function(){
	console.log('listening on *:3000');
});
