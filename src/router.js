var{serverStaticFile,handelhomepage,autocomplete,handelError,writeFile}=require("./functions.js")
function router(req, res) {
  var endpoint = req.url;
  if (endpoint === "/") {
    handelhomepage(req, res);
}
  else if (endpoint==="/autocomplete"){
  autocomplete(req,res);

  
}
else if (endpoint==="/writeData"){
  writeFile(req,res);
}
else {
    serverStaticFile(req, res);
  }
}

module.exports=router;
