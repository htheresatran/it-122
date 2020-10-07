/*console.log("hello world!");

var a = "Apple";

console.log(a); */

//Constamt variable are used to store unchanging data the we get from the modules that we will be imported

//a constant variable is used to store and use the http module
const http = require('http');

//constant variables are used to store the hostname and port info
const hostname = '127.0.0.1';
const port = 1337;

//Here the createServer() method of the http module that was created. The createServer) method will take in a request 'req' and a response 'res' as parameters
http.createServer(function(req, res){
    //The writeHead() method of the response parameter is called to set the status to and the Context-Type to text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // End the response and echo out Hello World 
    res.end('Hello World');
    // add a listener passing the port and hostname
    //then logs to the console that server is running
}).listen(port, hostname, () => {
        //once server is created log to the console that the server is running 
    console.log('Server running at https://${hostname}:${port}/')

});

