window.addEventListener('load', function() {
  var resultat = document.querySelector('.resultat');
  var envoieForm = document.querySelector('.formulaire');
  
  function verifier() {
    var champNom = document.getElementById('nom');
    var champPrenom = document.getElementById('prenom');
    var champMessage = document.getElementById('message');
    var msg = '';
  
    if (champNom.value == '') {
      msg = msg + 'Veuillez remplir le nom <br>';
    }
    
    if (champPrenom.value == '') {
      msg = msg + 'Veuillez remplir le prenom <br>';
    }
    
    if (champMessage.value == '') {
      msg = msg + 'Veuillez remplir le message';
    }
    return msg;
  }

  envoieForm.addEventListener('submit', function(event) {
    var message = verifier();
    resultat.innerHTML = message;

    if (message != '') {
      event.preventDefault();
    }
  });
});