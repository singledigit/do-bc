var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs');

var app = http.createServer(function (req, res) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Error 404: Resource not found.');
            console.log(err);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        }
        res.end();
    });
}).listen(port, '0.0.0.0');

module.exports = app;