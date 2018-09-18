var {
  autocomplete,
  handelError,
  writeFile,
  handler
} = require("./functions.js");

function router(req, res) {
  let endpoint = req.url;
  if (endpoint === "/") {
    handler("home", req, res);
  } else if (endpoint === "/autocomplete") {
    handler("autocomplete", req, res);
  } else if (endpoint === "/writeData") {
    writeFile(req, res);
  } else if (endpoint.includes("public")) {
    handler("staticfle", req, res);
  } else {
    handelError(res);
  }
} //end router function

module.exports = router;
