var http = require('http');
var fs = require('fs');

var server = http.createServer(handelRequest);

function handelRequest( req, res ){
    res.setHeader('Content-Type','text/plain');
    fs.createReadStream('./readme.txt').pipe(res);
}

server.listen( 3000, ()=>{
    console.log('server listenig on port 3000');
} )

// http.createServer((req, res)=>{
//     fs.createReadStream('./readme.txt').pipe(res);
// }).listen(3000)
