const http = require('http');
const fs =  require('file');
const res = require('express/lib/response');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
//   res.statusCode = 200;
  res.writeHead(200,{'contant-type':'Text/html'})
//   res.setHeader('Content-Type', 'text/plain');
  fs.readFile('webpage.html', function(error, data){
  res.write('Hello ji')
  res.end()
})
});

server.listen(port, function(error){
    console.log(port)
})