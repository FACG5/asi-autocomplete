var totalResult = [];
var counter = 0;
for (let i = 1; i <= 10; i++) {
  var apiUrl =
    "http://extracts.panmacmillan.com/getextracts?authorcontains=a&pagenumber=" +
    i;
  fetch(apiUrl, function (result) {
    for (var j = 0; j < result.Extracts.length; j++) {
      totalResult.push(result.Extracts[j].author);
    }
    counter++;
    if (counter == 10) {


      sendData("/writeData", JSON.stringify(totalResult), function () {
        fetch("/autocomplete", function (fileText) {
          var arr = fileText;
          var input = getElementById("word");

          input.addEventListener("input", function (e) {
            removeDiv("result");

            var result = createElement("div");
            result.setAttribute("class", "result");
            result.setAttribute("id", "result");
            var mainContainer = getElementById("MainContainerr");
            mainContainer.appendChild(result);

            var word = this.value;
            if (!word) removeDiv("result");
            for (let i = 0; i < arr.length; i++) {
              var word = this.value;
              if (
                arr[i].substr(0, word.length).toUpperCase() == word.toUpperCase()
              ) {
                // removeDiv("result")
                var resultElemnt = createElement("div");
                resultElemnt.setAttribute("class", "item");
                // resultElemnt.setAttribute("class","resultElemnt");
                resultElemnt.textContent = arr[i];
                var inputElement = createElement("input");
                inputElement.setAttribute("type", "hidden");
                inputElement.value = arr[i];
                resultElemnt.appendChild(inputElement);

                resultElemnt.addEventListener("click", function (e) {
                  input.value = this.getElementsByTagName("input")[0].value; //return to above resultElemnt

                  removeDiv("result");
                });
                result.appendChild(resultElemnt);
              }
            }
          });

          var submit = getElementById("submit");

          submit.addEventListener("click", function (e) {
            e.preventDefault();

            var name = input.value;
            var url =
              "http://extracts.panmacmillan.com/getextracts?authorcontains=" +
              name;
            fetch(url, function (result) {
              var authorName = result.Extracts[0].author;
              var authorBiography = result.Extracts[0].authorBiography;
              console.log(0);
              console.log(authorName);
              console.log(authorBiography);
              var modal = document.getElementById('myModal');
              var span = document.getElementsByClassName("close")[0];

              modal.style.display = "block";
              window.onclick = function (event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
                span.onclick = function () {
                  modal.style.display = "none";
                }

              }


            });
          });
        });
      });
    }


  });
}