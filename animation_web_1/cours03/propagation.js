window.addEventListener("load", function(){
    // declenchement dans la phase de capture
    var objPara1 = document.getElementById("para1");
    objPara1.addEventListener("click", function(){
        alert("On a clique sur le paragraphe");
    }, false);
    
    var division1 = document.getElementById("division1");
    division1.addEventListener("click", function(){
        alert("On a clique sur la division");
    }, false);
   
    // declenchement dans la phase de bouillement/bubbling
    var objPara2 = document.getElementById("para2");
    objPara2.addEventListener("click", function(){
        alert("On a clique sur le paragraphe");
    });
    
    var division2 = document.getElementById("division2");
    division2.addEventListener("click", function(){
        alert("On a clique sur la division");
    }, true);
});