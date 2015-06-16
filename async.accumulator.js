var http = require('http')

http.get('http:www.google.com' function (response) {
  var result = ''
  response.on('data', function (chunk) {
    console.result += chunk.toString()
  }
  response.on('end', function () {
  console.log(result)
  })
})
