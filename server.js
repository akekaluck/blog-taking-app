var express = require('express')
var app = express()

app.use('/', express.static('build'))

app.listen(9000, function () {
  console.log('Example app listening on port 9000!')
})
