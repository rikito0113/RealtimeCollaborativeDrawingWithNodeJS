var html = require('fs').readFileSync('index.html');
var http = require('http').createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
});

var io = require('socket.io')(http);
http.listen(3000);


io.on('connection', function(socket) {
    
    
    socket.on('draw', function(data) {
        io.emit('draw', data);
        
    });
    
    
});
