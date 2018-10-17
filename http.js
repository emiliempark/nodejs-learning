var http = require('http');
var fs = equire('fs'); //file system

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello world</h1>');
});

server.listen(9000, function(){
    console.log('server is listening on port number 9000');
});
