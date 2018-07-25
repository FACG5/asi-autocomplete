var {serverStaticFile,handelhomepage,autocomplete,handelError} = require("./functions.js")

function router(req, res) {
  let endpoint = req.url;
  if (endpoint === "/") {
    handelhomepage(req, res);

} // end homepage

  else if (endpoint === "/autocomplete" ){
    autocomplete(req,res);
  } else if (endpoint.includes("public")){      
       serverStaticFile(req, res);
  } else {
    handelError(res)
  }
} //end router function 

module.exports=router;
