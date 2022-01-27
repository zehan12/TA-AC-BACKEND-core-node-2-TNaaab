const http = require('http');
const qs = require('querystring');
const path = require('path');
const fs = require('fs');

console.log('../client/index.js');
console.log(path.join(__dirname,'..','client/index.js'));

var server = http.createServer(handelRequest);

function handelRequest( req, res ){
    console.log(req.method);
    // var dataFormat = req.headers['content-type'];

    let store = '';
    req.on('data',(chunk)=>{
        store = store + chunk;
    })
    req.on('end',()=>{
        let parsedData = qs.parse(store);
        let jsonData = JSON.stringify(parsedData);
        console.log(jsonData);
    });

    if ( req.method === 'GET' && req.url === '/form') {
        res.setHeader('Content-Type','text/html');
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }

    if ( req.method === 'POST' && req.url === '/form' ) {
        let parsedData = qs.parse(store);
        let jsonData = JSON.stringify(parsedData);
        console.log(store)
        console.log(jsonData)
        console.log(parsedData);
        res.setHeader('Content-Type', 'text/html');
        res.end(`<h1>${jsonData.name}</p><br>
                <p>${jsonData.email}</p></br>
                <p>${jsonData.age}</p>
                `)
    }

};


server.listen( 5678, ()=>{
    console.log('server listening on port 5678');
});