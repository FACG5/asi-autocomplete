var {
  serverStaticFile,
  handelhomepage,
  autocomplete,
  handelError,
  writeFile
} = require("./functions.js")

function router(req, res) {
  let endpoint = req.url;
  if (endpoint === "/") {
    handelhomepage(req, res);

  } else if (endpoint === "/autocomplete") {
    autocomplete(req, res);
  } else if (endpoint === "/writeData") {
    writeFile(req, res);
  } else if (endpoint.includes("public")) {
    serverStaticFile(req, res);
  } else {
    handelError(res)
  }
} //end router function 

module.exports = router;