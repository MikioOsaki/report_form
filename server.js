var express = require('express');

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
    var maxFileSize = 11000000;

    // Use the mv() method to place the file somewhere on your server
    if (reportImage != null && req.headers['content-length'] <= maxFileSize) {
        for (var index = 0; index < reportImage.length; index++) {
            reportImage[index].mv(__dirname + '/public/uploads/image_' + timeStamp() + "_" + index + ".jpg");
        }
        res.send('File(s) uploaded!');
    } else {
        res.send('File not uploaded');
    }
});
/**
 * Return a timestamp with the format "m-d-yy_h-MM-ss_TT"
 * @type {Date}
 */

function timeStamp() {

    // Create a date object with the current time
    var now = new Date();

    // Create an array with the current month, day and time
    var date = [now.getDate(), now.getMonth() + 1, now.getFullYear()];

    // Create an array with the current hour, minute and second
    var time = [now.getHours(), now.getMinutes(), now.getSeconds()];

    // If seconds and minutes are less than 10, add a zero
    for (var i = 1; i < 3; i++) {
        if (time[i] < 10) {
            time[i] = "0" + time[i];
        }
    }

    // Return the formatted string
    return date.join("-") + "_" + time.join("-");
}