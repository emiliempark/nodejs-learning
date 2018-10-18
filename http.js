var http = require('http');
var fs = require('fs'); //file system

var server = http.createServer(function(req, res){
	fs.readFile('example.html', function(error, data){
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.end(data);

	});
});

server.listen(9000, function(){
    console.log('server is listening on port number 9000');
});
