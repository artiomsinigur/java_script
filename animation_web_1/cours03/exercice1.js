window.addEventListener("load", function(){
    var objButton = document.getElementById("btn");
    objButton.addEventListener("click", function(){

        var mesParagraphes = document.getElementsByTagName("p");
        for (var i=0 in mesParagraphes) {
            if (mesParagraphes[i].getAttribute("class") == "paragraphe") {
                mesParagraphes[i].setAttribute("class","paragraphe2");  
            }
        }
    });
});
