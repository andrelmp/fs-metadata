'use strict';

var express = require('express');
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage});

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
});

app.post('/api/fileanalyse', upload.single('0'), function(req, res) {
    res.json({ fileSize: req.file.size });
});


app.listen(process.env.port || 8080, function() {
    console.log('Node.js listening on port 8080...');
});
