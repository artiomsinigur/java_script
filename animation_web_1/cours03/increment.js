window.addEventListener("load", function(){
    var objButton = document.getElementById("btnPlus");
    objButton.addEventListener("click", function(){
        var compteur = document.getElementById("compteur");
        var nombre = compteur.innerHTML;
        nombre++;
        compteur.innerHTML = nombre;
    });

    var objButton = document.getElementById("btnMoins");
    objButton.addEventListener("click", function(){
        var compteur = document.getElementById("compteur");
        var nombre = compteur.innerHTML;
        nombre--;
        compteur.innerHTML = nombre;
    });
});