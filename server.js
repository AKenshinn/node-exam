var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('Hello\n');
  setTimeout( function() {
    res.end('World');
  }, 3000);
});

server.listen(9999);

console.log('Server running at http://127.0.0.1:9999/');