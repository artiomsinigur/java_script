window.addEventListener('load', function() {
    // var champChoose = document.getElementById('choose');

    var btnEnvoyer = document.getElementById('btnEnvoyer');
    
    btnEnvoyer.addEventListener('click', function() {
        // Verifier le champ ville ===================//
        var sVille = document.getElementById('ville').value;
        // var regVille = new RegExp('Montreal|Quebec');
        // meme chose que New RegExp
        var regVille = /Montreal|Quebec/; 
       
        if (regVille.test(sVille)) {
            console.log('Ville marche');
        } else {
            console.log('Non, la ville ne marche pas');
        }

        // Verifier le champ nom ==================//
        var nom = document.getElementById('nom').value;
        var regNom = /[A-Z]/;
       
        if (regNom.test(nom)) {
            console.log('Nom marche');
        } else {
            console.log('Non, le nom ne marche pas');
        }

        // Verifier le champ telephone ==================//
        var tel = document.getElementById('tel').value;
        var regTel = /^514-[0-9]{3}-[0-9]{4}/;
       
        if (regTel.test(tel)) {
            console.log('Telephone marche');
        } else {
            console.log('Non, le telephone ne marche pas');
        }

        // Verifier le champ email ==================//
        var email = document.getElementById('email').value;
        var regEmail = /[A-Za-z]{2,20}@[A-Za-z]{1,20}\.{1}[a-z]{1,5}/;
       
        if (regEmail.test(email)) {
            console.log('Email marche');
        } else {
            console.log('Non, email ne marche pas');
        }
    });
});