window.addEventListener('load', function() {
    var btnSubmit = document.querySelector('.submit');
    var champNom = document.querySelector('.nom');
    var arrColors = document.querySelectorAll('.couleur');
    var arrModels = document.formulaire.car;
    var marques = document.getElementById('marque');
    // Author: Artiom

    btnSubmit.addEventListener('click', function(e) {
        var msg = '';

        if (champNom.value == '') {
            champNom.style.backgroundColor = 'red';
        }

        // Verifier le champ text ==================//
        if (champNom.value == '') {
            msg += 'Veuillez saisir le champ\n';
        }

        // Verifier les champs checkbox ==================//
        var bColors = false;
        for (var i = 0; i < arrColors.length; i++) {
            if (arrColors[i].checked == true) {
                var bColors = true;
            }
        }
        if (bColors == false) {
            msg += 'Veuillez cocher une option\n';
        }

        // Verifier les champs radiobox ==================//
        var bModels = false;
        for (var i = 0; i < arrModels.length; i++) {
            if (arrModels[i].checked == true) {
                bModels = true; 
            }
        }
        if (bModels == false) {
            msg += 'Veuillez selectionner un cas\n';
        }

        // Verifier les option select =================//
        var marqueIndex = marques.options[marques.selectedIndex];
        if (marqueIndex.value == '') {
            msg += 'Veuillez choisir une option';            
        }
        
        // Afficher les messages ==================//
        if (msg != '') {
            console.log(msg);
        } else {
            var success = 'Formulaire envoyée';
            console.log(success);
        }


        // var para = document.getElementById('para1');
        // console.log('parentNode = ' + para.parentNode);
        // console.log('firstChild = ' + para.firstChild.textContent);
        // console.log('lastChild = ' + para.lastChild.textContent);
        // console.log('nextSibling = ' + para.nextSibling.nodeName);
        // para.setAttribute('id', 'text');
        // console.log(para.getAttribute('id'));
        // console.log(para.firstChild.textContent);
        

        // var p = document.getElementsByTagName('p');
        // var i = 0;
        // while (i < p.length-1) {
        //     console.log(p[i]);
        //     i++;
        // }

        
        // var para2 = document.getElementById('para2');
        // var arrPara2 = para2.innerText.split(' ');
        // var  i = arrPara2.length-1;
        // var newArr = [];
        // while (i >= 0) {
        //     newArr.push(arrPara2[i]);
        //     i--;
        // }
        // var chaine = newArr.toString();
        // console.log(chaine);

        // console.log(para2.classList.contains('para2'));
        
        
        // var ul = document.querySelector('.ul');
        // var threeItems = 3;
        // while (threeItems > 0) {
        //     var li = document.createElement('li');
        //     var textContent = document.createTextNode('List item');
        //     li.append(textContent);
        //     ul.append(li);
        //     // li.innerHTML += li.innerHTML;
        //     threeItems--;
        // }
        // console.log(ul);
    });
    

    champNom.addEventListener('click', function(e) {
        if (e.type == 'click') {
            champNom.style.backgroundColor = 'blue';
        }
        console.log(e.value);
    });

    champNom.addEventListener('keydown', function(e) {
        if (e.value != '') {
            champNom.style.backgroundColor = 'green';
        }
        console.log(e.value);
    });
});