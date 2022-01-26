var http = require('http');
const { connected } = require('process');

http.createServer(( req, res )=>{
    console.log(req.method);
    var store = '';
    req.on('data',(chunk)=>{
        store = store + chunk;
    });
    req.on('end',()=>{
        console.log(store);
        res.write(store + "zehan" );
        res.end();
    });
}).listen(3456,()=>{
    console.log('server listening on port 3456');
});