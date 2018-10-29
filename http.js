var http = require('http');
var fs = require('fs'); //file system
var url = require('url');

http.createServer(function(req, res){
	// parsing file/folder name
	var pathname = url.parse(req.url).pathname;
	console.log("Request for " + pathname + " received.");

	//set default readFile
   if(pathname=="/"){
       pathname = "/index.html";
   }

	// read file
	fs.readFile(pathname.substr(1), function(err, data){ // load matching file name with url

		if(err){ // page not found
			console.log(err);
			res.writeHead(404, { 'content-type': 'text/html'});
		}else{ // page found
			res.writeHead(200, { 'content-type': 'text/html'}); // write head
			res.write(data.toString()); // write body
		}
		// send date to responsebody
		res.end();
	});
}).listen(9000);

console.log('server is listening on port number 9000');
