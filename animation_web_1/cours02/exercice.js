function applicationDomV1(){
    var oParagraphe1 = document.getElementsByTagName("p")[0]; //document.getElementById("para1");
    oParagraphe1.setAttribute("class","paragraphe2");
    
    var oParagraphe2 = document.getElementsByTagName("p")[1]; //document.getElementById("para1");

    oParagraphe2.setAttribute("class","paragraphe2");
	}


function applicationDom(){

    var mesParagraphes = document.getElementsByTagName("p");
    
   // mesParagraphes[0].setAttribute("class","paragraphe2");
    //mesParagraphes[1].setAttribute("class","paragraphe2");
    
   /* for(var i=0; i< mesParagraphes.length; i++)
    {
        
        console.log(" class= "+mesParagraphes[i].getAttribute("class"));
        
        if(mesParagraphes[i].getAttribute("class")=="paragraphe")  mesParagraphes[i].setAttribute("class","paragraphe2");   
        
    }*/
    for(var i=0 in mesParagraphes)
    {
        
        alert(mesParagraphes[i]);
        if(mesParagraphes[i].getAttribute("class")=="paragraphe")  mesParagraphes[i].setAttribute("class","paragraphe2");   
        
    }
}
function changerTexte(){
    var saisie = prompt("saisisaez une chaine");
    var oPragraphe3 = document.getElementById("para3");
    oPragraphe3.innerHTML = saisie;
    
}

