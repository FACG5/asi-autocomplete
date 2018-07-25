
var fs = require("fs");
var path = require("path");

function handelhomepage(req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    fs.readFile(path.join(__dirname ,"..","public","index.html"), function(err, file) {
      if (err) {
        console.error(err);
      } else {
        res.end(file);
      }
    });
  }

  function serverStaticFile(req, res) {
    var endponit = req.url;
    var extention = endponit.split(".")[1];
    var contenttype = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon",
      jpg: "image/jpg",
      png: "image/png"
    };
    res.writeHead(200, { "content-type": contenttype[extention] });
    fs.readFile(path.join(__dirname,"..", endponit), function(err, file) {
      if (err) {
        console.error(err);
      } else {
        res.end(file);
      }
    });
  }//end serverfiles
  

  function autocomplete(req,res){

    res.writeHead(200, { "content-type": "text/plain" });
    fs.readFile(path.join(__dirname , ".","Data","shortList.txt"), function(err, file) {
      if (err) {
        console.error(err);
      } else {
        res.end(file);
      }
    });

  }
  function handelError(res){
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>--404-- Page Is Not Found --404-- </h1>");
  }

  module.exports = {handelError,handelhomepage,autocomplete,serverStaticFile};
