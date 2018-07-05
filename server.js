var express = require('express'),
    formidable = require('formidable'),
    util = require('util'),
    fs = require('fs');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/html/index.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get('/gen', function (req, res) {
    res.sendFile(__dirname + '/public/html/genform.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get('/form', function (req, res) {
    res.sendFile(__dirname + '/public/html/form.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get('/locationpicker', function (req, res) {
    res.sendFile(__dirname + '/public/html/locationpicker.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(port, function () {
    console.log('Gulp is running my app on PORT: ' + port);
});


//________________FORMIDABLE______________________

app.use(express.json());

app.post('http://localhost:8081/upload', function (req, res, next) {

    // parse a file upload
    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname + '/public/uploads/';
    form.multiples = true;
    
    next();

    form.parse(req, function (err, fields, files) {
        res.writeHead(200, {
            'content-type': 'application/json'
        });
        res.write('received upload:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: files
        }));
    });

    return;
});