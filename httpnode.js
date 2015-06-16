var http = require('http')

http.get('http:www.google.com' function (response) {
  response.on('end', function () {
  console.log('OVER')
})
  response.on('data', function (chunk) {
    console.log(chunk.toString());
  }

})
