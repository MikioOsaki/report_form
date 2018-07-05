var express = require('express'),
    formidable = require('formidable'),
    util = require('util');

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

app.post('/upload', function (req, res) {
    // parse a file upload
    var form = new formidable.IncomingForm();
    form.multiples = ture; //If this option is enabled, when you call form.parse, the files argument will contain arrays of files for inputs which submit multiple files using the HTML5 multiple attribute.
    form.encoding = 'utf-8';
    //form.maxFileSize
    //form.uploadDir = "/my/dir"; //Sets the directory for placing file uploads in. You can move them later on using fs.rename(). The default is os.tmpdir().
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = __dirname + '/public/uploads/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
});