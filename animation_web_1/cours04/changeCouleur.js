window.addEventListener("load", function(){
    // var objBtn = document.getElementsByClassName('btn')[0];
    var objBtn = document.querySelector('.btn');
    console.log(objBtn);
    objBtn.addEventListener("click", function(){
        var para = document.getElementById('para');
        // var changeColor = para.innerHTML; - pour recuperer le contenu
        para.style.color = 'red';
    });
});

