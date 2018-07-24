function fetch (url,cb){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
        if(xhr.status==200){

            var fileText = JSON.parse(xhr.responseText)
            cb(fileText)
        }
        else{
          
        }
    }
}

xhr.open("GET",url,true);
xhr.send();

}
function getElementById(element){
    return document.getElementById(element);
}

function createElement(elemnt){
    return document.createElement(elemnt);
}
