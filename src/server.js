var http = require("http");
var router =require("./router.js");

const port = process.env.PORT || 4000;

var server = http.createServer(router);

server.listen(port, function() {

  console.log("Server is listening on Port ",port);

});
