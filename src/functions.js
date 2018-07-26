var fs = require("fs");
var path = require("path");

function handler(link, req, res) {
  var endponit = req.url;
  var pathName = {
    home: ["/public/index.html",".."],
    staticfle: [endponit,".."] ,
    autocomplete: ["/Data/shortList.txt",""]
  };
  
  fs.readFile(path.join(__dirname, pathName[link][1], pathName[link][0]), function(err, file) {
    if (err) {
      console.error(err);
    } else {
      res.end(file);
    }
  });
}
function writeFile(req, res) {
  var TheData = "";
  req.on("data", function(Data) {
    TheData += Data;
  });
  req.on("end", function() {
    fs.readFile(__dirname + "/Data/shortList.txt", function(err, file) {
      if (err) {
        console.error(err);
      } else {
        fs.writeFile(
          __dirname + "/Data/shortList.txt",
          TheData,
          function(err) {
            if (err) {
              console.error(err);
            } else {
              res.end();
            } // end else
          }
        );
      } // end else
    }); // end readFile
  });
} // end writeFiles

function handelError(res) {
  res.writeHead(404, {
    "content-type": "text/plain"
  });
  res.write("<h1>Hello World!</h1>"); //write a response to the client
  res.end(); //end the
} // end handelError

module.exports = {
  handelError,
  writeFile,
  handler
};
// var contenttype = {
//   html: "text/html",
//   css: "text/css",
//   js: "application/javascript",
//   ico: "image/x-icon",
//   jpg: "image/jpg",
//   png: "image/png",
//   gif:"image/gif"
// };
// res.writeHead(200, {
//   "content-type": contenttype[extention]
// });
