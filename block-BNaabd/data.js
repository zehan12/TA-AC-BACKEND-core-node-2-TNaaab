var http = require('http');
var qs = require('qs');
const { parse } = require('querystring');

http.createServer( ( req, res )=>{
    console.log(req.method);
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
            res.end(JSON.stringify(parseData));
        }
    })
} ).listen( 7000, ()=>{
    console.log('Server listening to port 7K');
} );
