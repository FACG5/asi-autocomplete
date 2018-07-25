function fetch(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var fileText = JSON.parse(xhr.responseText);
        cb(fileText);
      } else {
        console.log("Xx");
        
      }
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

function sendData(url,data,cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          cb();
        } else {
        }
      }
    };
  
    xhr.open("POST", url, true);
    xhr.send(JSON.stringify(data));
  }
function getElementById(element) {
  return document.getElementById(element);
}

function createElement(elemnt) {
  return document.createElement(elemnt);
}
function removeDiv(name) {
  var divTodelete = document.getElementById(name);
  if (divTodelete) divTodelete.parentNode.removeChild(divTodelete);
}
