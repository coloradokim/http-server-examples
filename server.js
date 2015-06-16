var http = require('http');
var fs = require('fs');

var handleRequest = function (request, response) {
  if (request.url === '/favicon.ico') {
    response.end('');
    return;
  }

  var file = request.url;
  file = file.replace('/', '');
  file += file.length === 0 ? 'index.html' : '.html';

  fs.readFile(file, {encoding: 'utf8'}, function (err, data) {
    if (err) {
      fs.readFile('404.html', {encoding: 'utf8'}, function (err2, data2) {
        if (err2) throw err2;
        response.end(data2);
      });
    } else {
      response.end(data);
    }
  });
};

var server = http.createServer(handleRequest);

server.listen(3000);
