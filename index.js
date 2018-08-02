var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/user', proxy({target: 'http://172.31.30.167', changeOrigin: true}));
app.listen(8085);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar