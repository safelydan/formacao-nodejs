const http = require('http');

http.createServer(function(req, res){
    res.end('Servidor rodando')
}).listen(9191)