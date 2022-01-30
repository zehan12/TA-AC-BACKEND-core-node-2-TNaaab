var fs = require('fs');
var http = require('http');
const { join } = require('path');
var path = require('path');
var qs = require('querystring');
var url = require('url');

const userDir = path.join(__dirname, "users/");

console.log(userDir)


http.createServer( ( req, res  )=>{
    console.log(req.method,req.url);


    let parsedUrl = url.parse(req.url,true)
    
    // var dataFormat = req.Header('content-type');
    var store = '';
    req.on( 'data', (chunk)=>{
        store = chunk + store;
    } );

    req.on( 'end', ()=>{
        let parsedData = JSON.parse(store);
        if ( req.method === 'POST' && req.url === '/users' ) {
            console.log(parsedData);
            fs.open(userDir+parsedData.username+".json", "wx", (err, fd) => {                
                fs.writeFile(fd, store, (err) => {                
                    fs.close(fd, (err) => {
                    // if no err, send response to client
                    console.log(err)
                    res.end(`${parsedData.username} successfully created`);
                    });
                });
            });
        }

        if ( req.method === 'PUT' && parsedUrl.pathname === "/users" ) {
            let username = parsedUrl.query.username;
            fs.open(userDir + username + ".json", "r+", (err, fd) => {
                fs.ftruncate(fd,(err)=>{
                    console.log(err);
                })
                fs.writeFile(userDir + username + ".json",store, (err)=>{
                    console.log(err);
                })
                fs.close(fd, (err) => {
                    console.log(err);
                    res.end(`${parsedData.username} successfully updated`);
                });
            })
        }
    } )

    console.log(parsedUrl);
    if ( parsedUrl.pathname === "/users" && req.method === "GET") {
        let username = parsedUrl.query.username;
        console.log(JSON.stringify(parsedUrl));
        console.log(username)
        // res.setHeader('Content-Type', 'application/json');
        // fs.createReadStream(__dirname+ '/' + username + '.json').pipe(res);
        fs.readFile(__dirname+ '/users/' +username + '.json','utf-8',(err,data)=>{
            if(err){
                console.log(err)
            }else{
                res.write(data.toString());
                
            }
            res.end();
        })
    }


    if (parsedUrl.pathname === "/users" && req.method === "DELETE") {
        let username = parsedUrl.query.username;
        fs.stat(userDir+username+'.json', function (err, stats) {
            console.log(stats);//here we got all information of file in stats variable
            if (err) {
                return console.error(err);
            }       
            fs.unlink(userDir+username+'.json',function(err){
                if(err) return console.log(err);
                console.log('file deleted successfully');

            });  
        });  
    }





    // else {
    //     res.statusCode = 404;
    // }

}).listen( 3000, ()=>{
    console.log('server listening on port 3000')
})
