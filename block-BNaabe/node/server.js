console.log("/Users/zehan/Desktop/altcampus/Node.js/CoreNodePart2/Assignment-i/TA-AC-BACKEND-core-node-2-TNaaab/block-BNaabe/node/server.js");

console.log("/Users/zehan/Desktop/altcampus/Node.js/CoreNodePart2/Assignment-i/TA-AC-BACKEND-core-node-2-TNaaab/block-BNaabe/node/app.js");

console.log("./index.html");

var path = require('path');

var absolutePath = __dirname;
var relativePathIndex = './index.html'

var indexPath = path.join(absolutePath,relativePathIndex);

console.log(indexPath);

//! create  server 3000

var http = require('http');
const { read } = require('fs');
const { parse, join } = require('path');


// data for POST
// {
//     team: 'kxip',
//     players: 18,
//     captain: 'KL Rahul'
//   }

// var server3000 = http.createServer(handelRequest3000);

// function handelRequest3000( req, res ){
//     var dataFormat = req.headers['content-type'];
//     console.log(req.method);
//     let store = '';
//     req.on( 'data', (chunk)=>{
//         store += chunk;
//     })

//     req.on( 'end', ()=>{
//         console.log(store,dataFormat);
//         if ( dataFormat === 'application/json' ){
//             res.statusCode = 201
//             res.setHeader('Content-Type', 'application/json');
//             let parsedData = JSON.parse(store);
//             console.log(parsedData.captain);
//         }
//     })
// }

// server3000.listen( 3000, ()=>{
//     console.log('server is listening on port 3000');
// });

//! server 3001
var qs = require('querystring');

// var server3001 = http.createServer(handelRequest3001);

// function handelRequest3001( req, res ){
//     var dataFormat = req.headers['content-type'];
//     console.log(req.method);
//     let store = '';
//     req.on( 'data', (chunk)=>{
//         store += chunk;
//     })

//     req.on( 'end', ()=>{
//         console.log(store,dataFormat);
//         if ( dataFormat === 'application/x-www-form-urlencoded' ){
//             res.statusCode = 201
//             let parsedData = qs.parse(store);
//             console.log(parsedData.captain);
//             res.end(parsedData);
//         }
//     })
// }

// server3001.listen( 3000, ()=>{
//     console.log('server is listening on port 3000');
// });

//! server 9999

// city: Udaipur,
// state: Rajasthan,
// country: India,
// pin: 313001,

var server9999 = http.createServer(handelRequest9999);

function handelRequest9999( req, res ){
    var dataFormat = req.headers['content-type'];
    console.log(req.method);

    var store = '';
    res.on( 'data', (chunk)=>{
        store += chunk;
    } )

    res.on( 'end', ()=>{
        if ( dataFormat === 'appliction/json' ) {
            let parasedData = JSON.parse(store);
            console.log(JOSN.stringify(parasedData));
            res.end(parasedData);          
        }
        if ( dataFormat === 'application/x-www-form-urlencoded' ) {
            let parsedData = qs.parse(store);
            console.log(parsedData);
            res.end(parsedData);
        }
    })
};

server9999.listen( 9999, ()=>{
    console.log('server listening on port 9999');
} );

//! server 9001

var server9001 = http.createServer(handelRequest9001);

function handelRequest9001( req, res ){
    var dataFormat = req.headers['content-type'];
    console.log(req.method);

    var store = '';
    res.on( 'data', (chunk)=>{
        store += chunk;
    } )

    res.on( 'end', ()=>{
        if ( dataFormat === 'application/x-www-form-urlencoded' ) {
            let parsedData = qs.parse(store);
            console.log(parsedData);
            res.setHeaders('Content-Type','text/html')
            res.end(`<input>`);
        }
    })

}

server9001.listen( 9001, ()=>{
    console.log('server listening on port 9001')
} )

//! server 9002


var server9002 = http.createServer(handelRequest9002);

function handelRequest9002( req, res ){
    var dataFormat = req.headers['content-type'];
    console.log(req.method);

    var store = '';
    res.on( 'data', (chunk)=>{
        store += chunk;
    } )

    res.on( 'end', ()=>{
        if ( dataFormat === 'application/x-www-form-urlencoded' ) {
            let parsedData = qs.parse(store);
            console.log(parsedData);
            res.setHeaders('Content-Type','text/html')
            res.end(`<h2>${parsedData}</h2>`);
        }
    })

}

server9002.listen( 9002, ()=>{
    console.log('server listening on port 9002')
} )