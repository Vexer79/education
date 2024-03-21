document.addEventListener("DOMContentLoaded", function(event){
    ajaxUtils.sendGetRequest("request.json", function(request){
        console.log(request.responseText);
    });
});