(function () {//IIFE


	let leCiel, //Représente l'élément "section" de la page HTML
	requeteAnimID = 0,//Pour enregistrer l'identifiant de la requête d'animation
	tempInitial;//Pour le décompte des secondes écoulées

	//On part les scripts, uniquement quand la page est chargée
	window.addEventListener("load", function () {
		//leCiel
		leCiel = document.querySelector("section");

		//---------------À compléter-------------------
		//Première requête d'animation avec RAF pour ajouter des gouttes d'eau
		//Et, enregistrement du temps initial
		requeteAnimID = window.requestAnimationFrame(ajouterGoutteEau);
		
		//Enregistrer le temps initial
		tempInitial = window.performance.now();

		//Écouteur sur le ciel sur l'événement mousedown pour arrêter la pluie
		leCiel.addEventListener("mousedown", arreterPluie, false);
		
	}, false);


	function ajouterGoutteEau(tempsActuel) {

		//Créer un élément HTML de type <div>- on va le nommer uneGoutte
		var uneGoutte = document.createElement("div");

		//On va lui attribuer la classe goutteAnim
		//---------------À compléter-------------------
		uneGoutte.classList.add('goutteAnim');
		

		//Et, on va la mettre dans une position au hasard en haut de la section (leCiel)
		//Déterminer d'abord la position au hasard
		//---------------À compléter-------------------
		let posX = Math.floor((Math.random() * 1000) + 1);
		// console.log(posX);

		uneGoutte.style.left = posX + "px";
		uneGoutte.style.top = "5%";

		//Ajouter la goutte d'eau dans le ciel
		leCiel.appendChild(uneGoutte);

		//On enlève la goutte d'eau quand son animation est terminée
		//---------------À compléter-------------------
		uneGoutte.addEventListener('animationend', () => enleverGoutteEau());
		
		//Si le délai de 10 secondes n'est pas écoulé
		//On part une nouvelle animation
		//Sinon... on arrête la pluie
		//---------------À compléter-------------------
		let secondesEcoulees = Math.round((tempsActuel - tempInitial) / 1000);
		
		if (secondesEcoulees <= 10) {
			//On ajoute une nouvelle goutte avec une nouvelle requête d'animation
			//---------------À compléter-------------------
			window.requestAnimationFrame(ajouterGoutteEau);
			
		} else {
			//Arrêter la pluie
			arreterPluie();
		}
	}

	function arreterPluie() {
		//Enlever les requêtes d'animations
		//---------------À compléter-------------------
		window.cancelAnimationFrame(requeteAnimID);

		//Éclaicir le ciel...
		leCiel.style.opacity = 1;

		//Faire apparaître le soleil - élément de type div, pour la classe voir le fichier CSS
		//---------------À compléter-------------------
		var leSoleil = document.createElement('div');
		leSoleil.classList.add('soleil');
		leCiel.appendChild(leSoleil);

		//Enlever le gestionnaire d'événement et le pointeur de la souris sur le ciel
		leCiel.removeEventListener("mousedown", arreterPluie, false);
		leCiel.style.cursor = "auto";
	}


	function enleverGoutteEau(evt) {
		//Identifier la goutte à enlever
		//---------------À compléter-------------------
		var cetteGoutte = document.querySelector('.goutteAnim');
		
		//Lui enlever son gestionnaire d'événement
		//---------------À compléter-------------------
		this.removeEventListener('animationend', enleverGoutteEau);
		
		//Enlever cette goutte de l'affichage
		//---------------À compléter-------------------
		leCiel.removeChild(cetteGoutte);

		//console.log("bye bye Goutte");

	}

}()); //Fin IFFE