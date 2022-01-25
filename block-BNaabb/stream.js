var http = require('http');
const { connected } = require('process');

http.createServer(( req, res )=>{
    console.log(req.method);
    var store = '';
    res.on('data',(chunk)=>{
        store = store + chunk;
    });
    res.on('end',()=>{
        res.write(store);
        res.end();
    });
}).listen(3456,()=>{
    console.log('server listening on port 3456');
});