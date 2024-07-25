var http = require('http');
var url = require('url');
var fs = require('fs');    

http.createServer(function (req, res) {
    var urlParse = url.parse(req.url, true);
    var path = urlParse.pathname;
    var query = urlParse.query;
    
    if (path == "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("this would be the home page");
        res.end();
    } else if (path == "/login") {
        fs.readFile('log_in.html', function(err, txt) {
            if (err) {
                console.error("Error reading log_in.html:", err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write("Error loading login page");
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(txt);
            }
            res.end();
        });
    } else if (path == "/register") {
        fs.readFile('register.html', function(err, txt) {
            if (err) {
                console.error("Error reading register.html:", err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write("Error loading register page");
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(txt);
                console.log(query);
            }
            res.end();
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("404 - Page Not Found");
        res.end();
    }
}).listen(8080);

console.log('Server running at http://localhost:8080/login');
