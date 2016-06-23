var express = require('express');
var path = require('path');
var app = express();
var port = 9090;

// static assets served by express.static() for production
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, function () {
    console.log('App (production) is now running on port 9090!');
});
