window.addEventListener('load', function() {
  var btnAfficher = document.getElementById('afficher');
  var champNom = document.getElementById('nom');
  var champPrenom = document.getElementById('prenom');
  var resultat = document.querySelector('.resultat');
  var pays = document.querySelector('.pays');


  function afficherValeur(pChamp) {
    var champ = pChamp.value;
    resultat.innerHTML = champ;
  }

  btnAfficher.addEventListener('click', function() {
    afficherValeur(champNom);

    var x = pays.options[pays.selectedIndex].innerHTML;
    console.log(x);
  });

  
  // Travailler su focus =================//
  champNom.addEventListener('focus', function(event) {
    // console.log(event);
    console.log(event.target.name);
    // champNom.value = 'vous avez le focus';
    event.target.value = 'vous avez le focus';
  });

  // focusout ou blur
  champNom.addEventListener('focusout', function() {
    champNom.value = 'vous avez perdu le focus';
  });
  
  // Les dates =====================//
  // Recuperer la date de l'heure actuelle 
  var date1 = new Date();

  console.log(date1.getMonth().name);

  console.log('Heure: ' + date1.getHours());
  console.log('Minute: ' + date1.getMinutes());
  console.log('Jour: ' + date1.getDay());
  console.log('Mois: ' + date1.getMonth());
  // console.log('Mois: ' + date1.toDateString());

  // Convertir le nombre en date de chaine de caractere 
  var mois = ['janvier', 'fevrier', 'mars', 'avril', 'mars', 'mai', 'juin', 'juillet', 'aout', 'sept', 'oct', 'nov', 'dec'];
  console.log('Mois: ' + mois[date1.getMonth()]);
  
  // Convertir le nombre de jour de chaine de caractere 
  var jours = ['lundi', 'mardi', 'mercredi', 'jaudi', 'vendredi', 'samedi', 'dimanche'];
  console.log('Mois: ' + jours[date1.getDay()-1]);
});