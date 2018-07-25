var totalResult = [];
var counter = 0;
for (let i = 1; i <= 10; i++) {
  var apiUrl =
    "http://extracts.panmacmillan.com/getextracts?authorcontains=a&pagenumber=" +
    i;
  fetch(apiUrl, function(result) {
    for (var j = 0; j < result.Extracts.length; j++) {
      totalResult.push(result.Extracts[j].author);
    }
    counter++;
    if (counter == 10) {
      var loadingDiv= getElementById("loadingDiv");
      loadingDiv.style.display="none";
      var mainContainer = getElementById("MainContainerr");
mainContainer.style.display="flex";

      sendData("/writeData", JSON.stringify(totalResult), function() {
        fetch("/autocomplete", function(fileText) {
          var arr = fileText;
          var input = getElementById("word");

          input.addEventListener("input", function(e) {
            removeDiv("result");
            var result = createElement("div");
            result.setAttribute("class", "result");
            result.setAttribute("id", "result");
            mainContainer.appendChild(result);

            var word = this.value;
            if (!word) removeDiv("result");
            for (let i = 0; i < arr.length; i++) {
              var word = this.value;
              if (
                arr[i].substr(0, word.length).toUpperCase() ==
                word.toUpperCase()
              ) {
                var resultElemnt = createElement("div");
                resultElemnt.setAttribute("class", "item");
                resultElemnt.textContent = arr[i];
                var inputElement = createElement("input");
                inputElement.setAttribute("type", "hidden");
                inputElement.value = arr[i];
                resultElemnt.appendChild(inputElement);

                resultElemnt.addEventListener("click", function(e) {
                  input.value = this.getElementsByTagName("input")[0].value; //return to above resultElemnt

                  removeDiv("result");
                });
                result.appendChild(resultElemnt);
              }
            }
          });

          var submit = getElementById("submit");
          var info = createElement("div");
          info.setAttribute("id", "info");
          info.setAttribute("class", "modal-body");
          var modalContent = getElementById("modal-content");
          submit.addEventListener("click", function(e) {
            e.preventDefault();

            modalContent.appendChild(info);
            var name = input.value;
            if (name) {
              var url =
                "http://extracts.panmacmillan.com/getextracts?authorcontains=" +
                name;
              fetch(url, function(result) {
                if (result.PageCount != 0) {
                  var authorName = result.Extracts[0].author;
                  var span = createElement("span");
                  span.setAttribute("class", "nameSpan");
                  span.textContent = authorName;
                  console.log(span);
                  var authorBiography = result.Extracts[0].authorBiography;
                  clearDivAndSet("info", authorBiography);
                  info.insertBefore(span,info.childNodes[0])

                  showModel();
                } else {
                  clearDivAndSet("info", "Author Not Found ! ");

                  showModel();
                }
              });
            } else {
              clearDivAndSet("info", "Please Enter Name ! ");
              showModel();
            }
          });
        });
      });
    }
  });
}
