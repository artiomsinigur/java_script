window.addEventListener("load", function() {
    var btn = document.querySelector('.btn');
    var ul = document.querySelector('ul');
    btn.addEventListener('click', function() {
        // creer la balise li
        var element = document.createElement('li');
        // creer le texte 
        var texte = document.createTextNode('Liste item');
        // ajouter le texte dans la balise li
        element.append(texte);
        // ajouter la balise li dans ul
        ul.append(element);
    });
});