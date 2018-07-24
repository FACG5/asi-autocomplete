var http = require("http");
var fs = require("fs");
var path = require("path");
var router =require("./router.js");
var port = 4000;

var server = http.createServer(router);

server.listen(port, function() {

  console.log("Server is listening");

});
