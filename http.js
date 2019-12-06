var http = require('http');
var fs = require('fs'); //file system
var url = require('url');

var server = require('./server');

var httpServer = http.createServer(server);

// var server = http.createServer(function(req, res){
// 	fs.readFile('example.html', 'utf8', function(error, data){
// 	    res.writeHead(200, {'Content-Type': 'content-type:application/javascript'});
// 	    res.end(data);

// 	});
// });

// server.listen(9000, function(){
//     console.log('server is listening on port number 9000');
// });


httpServer.listen(8080);
