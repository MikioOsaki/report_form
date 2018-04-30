var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get('/spot1', function (req, res) {
    res.sendFile(__dirname + '/spot1.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get('/spot2', function (req, res) {
    res.sendFile(__dirname + '/spot2.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get('/form/:spot', function (req, res) {

    var spot = req.params.spot;

    res.sendFile(__dirname + '/form.html', spot);


});

app.listen(port, function () {
    console.log('Gulp is running my app on PORT: ' + port);
});