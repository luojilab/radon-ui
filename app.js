var express = require('express')
var path = require('path')
var app = express()
var port = 9898

// static assets served by express.static() for production
app.use(express.static(path.join(__dirname, 'dist')))

app.post('/upload', function (req, res) {
    console.log(res.files)
    res.send({ 'success': true })
})

app.listen(port, function () {
    console.log('App (production) is now running on port ' + port + '!')
})
