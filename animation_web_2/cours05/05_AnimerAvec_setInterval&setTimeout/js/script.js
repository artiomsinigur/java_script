(function () { //IIFE

	let leCiel, //Représente l'élément "section" de la page HTML
		minuterieEtoilesID; //Identifiant de la minuterie pour mettre des étoiles

	/**
	 *	On part les scripts, uniquement quand la page HTML est chargée....
	 */
	window.addEventListener("load", function () {
		//Identifier le ciel
		leCiel = document.querySelector("section");

		//Minuterie pour mettre des étoiles à toutes les 1/30 de secondes
		minuterieEtoilesID = window.setInterval(mettreEtoile, 1000 / 30);

		//Minuterie pour enlever toutes les étoiles après 5 secondes
		window.setTimeout(enleverLesEtoiles, 5000);

	}, false);

	/**
	 * Fonction appelée à toutes les 1/30 de secondes pour ajouter
	 * à chaque appel une étoile dans le ciel
	 */
	function mettreEtoile() {
		console.log("mettreEtoile");
		//Créer un élément HTML de type <div>- on va le nommer uneEtoile
		let uneEtoile = document.createElement("div");

		//On va lui attribuer la classe: etoileAnim
		uneEtoile.classList.add("etoileAnim");

		//Mais avant, on va la positionner au hasard sur l'axe des x et des y
		//Déterminer d'abord les positions X et Y au hasard
		let posX = Math.random() * leCiel.offsetLeft;
		let posY = Math.random() * leCiel.offsetTop;

		uneEtoile.style.left = posX + "px";
		uneEtoile.style.top = posY + "px";

		leCiel.appendChild(uneEtoile);
	}


	/**
	 * Fonction pour enlever toutes les étoiles
	 */
	function enleverLesEtoiles() {
		//Enlever la minuterie qui met des étoiles
		window.clearInterval(minuterieEtoilesID);
		

		//Enlever toutes les étoiles...tant qu'il y a des étoiles...on enlève la première
		while (leCiel.hasChildNodes()) {
			leCiel.removeChild(leCiel.firstChild);
		}
	}

}()); //Fin IFFE