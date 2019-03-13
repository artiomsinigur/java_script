/*
// a ajouter en HTML a l'element img 
// onmouseover="addBorder()" onmouseout="hideBorder()"
function addBorder() {
    var objBorder = document.getElementById("img1");
    objBorder.style.border = "5px solid red";
}

function  hideBorder() {
    var objBorder = document.getElementById("img1");
    objBorder.style.border = "";
}
*/

// window.addEventListener("load", chargement);
// function chargement() {
//     alert("Ok");
// }

// Idem a la fonction anonime
// window.addEventListener("click", function (){
//    alert("Ok");
// });

window.addEventListener("load", function (){
    var objBorder = document.getElementById("img1");
    
    objBorder.addEventListener("mouseover", function() {
        objBorder.style.border = "5px solid red";
    });

    objBorder.addEventListener("mouseout", function() {
        objBorder.style.border = "none";
    });
});