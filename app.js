var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

// static assets served by express.static() for production
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, function () {
    console.log('App (production) is now running on port 3000!');
});
