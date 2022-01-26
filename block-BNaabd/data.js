var http = require('http');
const qs = require('querystring');

http.createServer( ( req, res )=>{
    console.log(req.method);
    var dataFormat = req.headers['content-type'];
    var store = '';
    req.on( 'data', (chunk)=>{
        store += chunk;
    })
    req.on( 'end', () =>{
        if ( dataFormat === 'application/json' ) {
            var parsedData = JSON.parse(store);
            res.end(parsedData);
        }
        if ( dataFormat === 'application/x-www-form-urlencoded' ) {
            var parseData = qs.parse(store);
            res.end(JSON.stringify(parseData)+"zehan");
        }
    })
} ).listen( 7000, ()=>{
    console.log('Server listening to port 7K');
} );
