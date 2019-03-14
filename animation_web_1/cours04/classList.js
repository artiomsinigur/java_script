window.addEventListener("load", function(){
    var eltPara = document.getElementById('para');
    var objBtn = document.querySelector('.btn');
    var objBtn2 = document.querySelector('.btn2');
    var objBtn3 = document.querySelector('.btn3');
    var objBtn4 = document.querySelector('.btn4');
    var objBtn5 = document.querySelector('.btn5');
    var objBtn6 = document.querySelector('.btn6');
    var objBtn7 = document.querySelector('.btn7');
    var objBtn8 = document.querySelector('.btn8');
    var objBtn9 = document.querySelector('.btn9');
    var champText = document.querySelector('.text');
    
    objBtn.addEventListener('click', function() {
        eltPara.classList.add('ma-class');
    });
    
    objBtn2.addEventListener('click', function() {
        eltPara.classList.remove('ma-class');
    });
    
    objBtn3.addEventListener('click', function() {
        eltPara.classList.toggle('ma-class');
    });

    // contains - Vérifie si la classe spécifiée est présente 
    // dans la liste des classes attribuées à cet élément.    
    objBtn4.addEventListener('click', function() {
        var isContain = eltPara.classList.contains('ma-class');
        if (isContain == true) {
            console.log('Il y a de class');
        } else {
            console.log('Pas de class');
        }
    });

    objBtn5.addEventListener('click', function() {
        eltPara.classList.add('bordure');
    });

    objBtn6.addEventListener('click', function() {
        var saisie = champText.value;
        var isExiste = eltPara.classList.contains(saisie);
        if (isExiste) {
            alert('true');
        } else {
            alert('false');
        }
    });

    // length - Retourn le nombre des class sur une element
    objBtn7.addEventListener('click', function() {
        // alert(eltPara.classList.length);
        document.body.innerHTML = eltPara.classList.length;
    });
    
    // item() - Affiche la/les class d'une element 
    // indique dans item()
    objBtn8.addEventListener('click', function() {
        alert(eltPara.classList.item(1));
    });

    objBtn9.addEventListener('click', function() {
        alert(eltPara.classList.toString());
    });
});