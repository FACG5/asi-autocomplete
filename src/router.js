var {serverStaticFile,handelhomepage,autocomplete,handelError} = require("./functions.js")

function router(req, res) {
  let endpoint = req.url;
  if (endpoint === "/") {
    handelhomepage(req, res);
} // end home page
  else if (endpoint==="/autocomplete"){
  autocomplete(req,res);
  } else {
    serverStaticFile(req, res);
  }
} //end router function 

module.exports=router;
