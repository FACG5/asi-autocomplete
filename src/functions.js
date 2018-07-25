var fs = require("fs");
var path = require("path");
var querystring = require("querystring");
function handelhomepage(req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile(path.join(__dirname, "..", "public", "index.html"), function(
    err,
    file
  ) {
    if (err) {
      console.log(err);
    } else {
      console.log(__dirname);

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
    jpg: "image/jpg"
  };
  // res.writeHead(200, { "content-type": contenttype[extention] });
  fs.readFile(path.join(__dirname, "..", "public", endponit), function(
    err,
    file
  ) {
    if (err) {
      console.log(err);
    } else {
      res.end(file);
    }
  });
}
function autocomplete(req, res) {
  res.writeHead(200, { "content-type": "text/plain" });
  fs.readFile(path.join(__dirname, ".", "Data", "shortList.txt"), function(
    err,
    file
  ) {
    if (err) {
      console.log(err);
    } else {
      console.log(__dirname);

      res.end(file);
    }
  });
}
function handelError(res) {
  res.writeHead(404, { "content-type": "text/html" });
  res.end("<h1>page not found 404 </h1>");
}
function writeFile(req, res) {
  var TheData = "";
  req.on("data", function(Data) {
    TheData += Data;
  });
  req.on("end", function() {
    fs.readFile(__dirname + "/Data/shortList.txt", function(err, file) {
      if (err) {
        console.log(err);
      } else {
        fs.writeFile(
          __dirname + "/Data/shortList.txt",
          JSON.parse(TheData),
          function(err) {
            if (err) {
              console.log(err);
            }
            else{
              res.end();
            }
          }
        );
      }
    });
  });
}

module.exports = {
  handelError,
  handelhomepage,
  autocomplete,
  serverStaticFile,
  writeFile
};
