window.addEventListener('load', function() {
    var btnVerifier = document.getElementById('verifier');
    var champNom = document.getElementById('nom');
    var champPrenom = document.getElementById('prenom');
    var champMessage = document.getElementById('message');
    var rMonsieur = document.querySelectorAll('.civilite')[0];
    var rMadame = document.querySelectorAll('.civilite')[1];
    var arrInterets = document.querySelectorAll('.interet');

    btnVerifier.addEventListener('click', function () {
        // if (champNom.value == '' || champPrenom.value == '') {
        //     console.log('Veuillez remplir le champ');
        //     champNom.classList.add('warning');
        //     champPrenom.classList.add('warning');
        // } else {
        //     console.log('Message recu');
        // }


        // var msg = [];
        var msg = '';
        var bool = false;
        var bool2 = false;

        // Verifier les radioBox
        // =============================== //
        if (rMonsieur.checked == true || rMadame.checked == true) {
            bool = true
        }
        if (bool == false) msg = msg + 'Veuillez choisir le genre \n'


        // Verifier les checkbox
        // =============================== //
        for (var i = 0; i < arrInterets.length; i++) {
            if (arrInterets[i].checked) {
                bool2 = true;
            }
        }
        if (bool2 == false) msg = msg + 'Veuillez selectionner l\'interet \n';


        // Verifier les champs nom, prenom et message
        // =============================== //
        if (champNom.value == '') {
            msg = msg + 'Veuillez remplir le nom \n';
            // var msg = [];
            // msg.push('Veuillez remplir le champ');
            champNom.classList.add('warning');
        } else {
            champNom.classList.remove('warning');
        }

        if (champPrenom.value == '') {
            msg = msg + 'Veuillez remplir le prenom \n';
            // msg.push('Veuillez remplir le champ');
            champPrenom.classList.add('warning');
        } else {
            champPrenom.classList.remove('warning');
        }
        
        if (champMessage.value == '') {
            msg = msg + 'Veuillez remplir le message \n';
            // msg.push('Veuillez remplir le champ');
            champMessage.classList.add('warning');
        } else {
            champMessage.classList.remove('warning');
        }

        // if (msg.length > 1) {
        //     console.log(msg);
        // }
        if (msg != '') console.log(msg);
    });
});