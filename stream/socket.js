module.exports = function (http) {
	let io = require('socket.io')(http);

	io.on('connection', function(socket){
		socket.on('top', function(data) {
			io.emit('top', data);
		});
		socket.on('middle', function(data) {
			io.emit('middle', data);
		});
		socket.on('bottom', function(data) {
			io.emit('bottom', data);
		});
	});	
}
