
function maFonction(){
    window.alert("ma deuxieme fonction");
    
    var sNom ="nikolas";
    var bool1 = true;
    var age =20;
    alert("sNom = " + sNom);   
    
    var resultat = 8%3;  //2
    
    
}
function verifier(){
    var objInput = window.document.formulaire1.nom1;
    
    if(objInput.value == ""){
       objInput.style.backgroundColor = "red";
    }else{
       objInput.style.backgroundColor = "transparent";
    }
}

function confirmer(){
     var objPrenom = window.document.formulaire1.prenom1;
    
    var reponse = confirm("voulez-vous supprimer ?");
    if (reponse == true){
        objPrenom.style.backgroundColor = "red";
    }else{
       objPrenom.style.backgroundColor = "transparent"; 
        
    }
}


function saisir(){
    var reponse = prompt("saisir votre nom?");
   var objDonnee = window.document.formulaire1.donnee1;
    objDonnee.value = reponse
}