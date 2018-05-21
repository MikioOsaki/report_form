var express = require('express');

var timeStamp = require('./public/script/timeStamp');

const fileUpload = require('express-fileupload');

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

app.get('/spots/2', function (req, res) {
    res.sendFile(__dirname + '/public/html/spots/2.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get('/spots/46', function (req, res) {
    res.sendFile(__dirname + '/public/html/spots/46.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});
app.get('/spots/74', function (req, res) {
    res.sendFile(__dirname + '/public/html/spots/74.html', function (err) {
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

//TODO: set upload limit, multiple uploads

// default options
app.use(fileUpload());

app.post('/upload', function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the ---input field--- (i.e. "image_uploads") is used to retrieve the uploaded file
    var reportImage = req.files.image_uploads;
    // Use the mv() method to place the file somewhere on your server
    if (reportImage != null) {
        for (var index = 0; index < reportImage.length; index++) {
       //     console.log(reportImage[index].size);
            reportImage[index].mv(__dirname + '/public/uploads/image_' + timeStamp.timeStamp() + "_" + index + ".jpg");
        }
        res.send('File(s) uploaded!');
    } else {
        res.send('File not uploaded');
    }



});