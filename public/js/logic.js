function xhrRequest(url, method, data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        if (method === "GET") {
          var result = JSON.parse(xhr.responseText);
          cb(result);
        } else if (method === "POST") {
          cb();
        }
      }
    }
  };

  xhr.open(method, url, true);
  xhr.send(JSON.stringify(data));
}

function fetch(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var fileText = JSON.parse(xhr.responseText);
        cb(fileText);
      }
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

function sendData(url, data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        cb();
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

function showModel() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  span.onclick = function() {
    modal.style.display = "none";
  };
}

function clearDivAndSet(name, Text) {
  var div = getElementById(name);
  div.innerHTML = Text;
}

function filterArray(array) {
  return array.filter(function(item, pos) {
    return array.indexOf(item) == pos;
  });
}

var filterArray = array =>
  array.filter((item, pos) => array.indexOf(item) == pos);

if (typeof module != "undefined") {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

  module.exports = fetch;
}
