function testDom(){
	var oParagraphe1 = document.getElementById("paragraphe1");
	
	
	console.log("oParagraphe1.parentNode = " + oParagraphe1.parentNode);
    console.log("oParagraphe1.firstChild = " + oParagraphe1.firstChild);
     console.log("oParagraphe1.lastChild = " + oParagraphe1.lastChild);
     console.log("oParagraphe1.previousSibling = " + oParagraphe1.previousSibling);
     console.log("oParagraphe1.nextElementSibling = " + oParagraphe1.nextElementSibling);
    console.log("oParagraphe1.childNodes[0] = " + oParagraphe1.childNodes[0]);
    
    
    console.log("oParagraphe1.nodeName = " + oParagraphe1.nodeName);
    console.log("oParagraphe1.getAttribute = " + oParagraphe1.getAttribute("id"));
    oParagraphe1.setAttribute("class","para");
    oParagraphe1.style.color="red";
    
    
     console.log("oParagraphe1.attributes[0] = " + oParagraphe1.attributes[0].nodeValue);
    var oEm = document.getElementsByTagName("em")[0]; 
    
   console.log( oEm.firstChild.nodeValue);
    oEm.firstChild.nodeValue="nouveau contenu";
    
    
    console.log("oParagraphe1.innerHTML = " + oParagraphe1.innerHTML);
	}
	

