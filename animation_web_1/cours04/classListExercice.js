window.addEventListener("load", function() {
    var btn = document.querySelector('.btn');
    var para = document.getElementById('para');
    btn.addEventListener('click', function() {
        var chaine = para.classList.toString();
        var arrClass = chaine.split(' ');
        var existeClass = para.classList.contains('style1');
        if (existeClass == false) {
            for (var i = 0; i < arrClass.length; i++) {
                para.classList.remove(arrClass[i]);
            }
        }
    });

    // toString() - Converte un tableu en chaines de caracteres
    var arr = ['Foo', 'Bar', 'Go'];
    var chaine = arr.toString();
    console.log(chaine);

    // join() - Converte un tableu en chaines de caracteres
    var arr = ['Foo', 'Bar', 'Go'];
    var chaine = arr.join();
    console.log(chaine);
});