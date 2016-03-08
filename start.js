var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moocData');

var server = require('./server');

var PORT = 8090;

mongoose.connection.once('open', function() {
	server.listen(PORT, function() {
		console.log('Server started on port 8090');
	});
});

// set the pipeline to work with es6