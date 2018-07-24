
fetch("/autocomplete",function(fileText){
var arr=fileText;
var input = getElementById("word");
var resultDev = createElement("div");
resultDev.setAttribute("id", "resultDev");
input.parentNode.appendChild(resultDev);
input.addEventListener("input", function(e) {
  resultDev.textContent = "";
  var word = this.value;
  if (!word) return false;
  console.log(fileText.length);
  for (let i = 0; i < arr.length; i++) {
    var word = this.value;
    if (arr[i].substr(0, word.length).toUpperCase() == word.toUpperCase()) {
      var resultElemnt = createElement("div");
      // resultElemnt.setAttribute("class","resultElemnt");
      resultElemnt.textContent = arr[i];
      var inputElement = createElement("input");
      inputElement.setAttribute("type","hidden");
      inputElement.value=arr[i];
resultElemnt.appendChild(inputElement);
      resultElemnt.addEventListener("click",function(e){

    input.value=this.getElementsByTagName("input")[0].value;//return to above resultElemnt
    
    resultDev.textContent = "";
    
})
      resultDev.appendChild(resultElemnt);
    }
  }
});

})
