(function () { //IIFE
	
	//Variable leCiel,  qui représente l'élément "section" de la page HTML
	let leCiel;

	/**
	 *	On part les scripts, uniquement quand la page HTML est chargée....
	 */
	window.addEventListener("load", function () {
		//leCiel qui représente l'élément "section" de la page HTML
		leCiel = document.querySelector("section");


		//Écouteurs sur le ciel sur les événements  touchstart et touchend
		leCiel.addEventListener("touchstart", demarrerOuArreterEcriture, false);
		leCiel.addEventListener("touchend", demarrerOuArreterEcriture, false);
	}, false);

	/**
	 * Fonction permettant de commencer ou d'arrêter l'écriture avec des étoiles
	 * 
	 * @param {object} evt Informations sur l'événement MouseEvent distribué
	 */
	function demarrerOuArreterEcriture(evt) {
		if (evt.type === "touchstart") {
			//On met un écouteur sur le touchmove sur le ciel...
			leCiel.addEventListener("touchmove", mettreEtoile, false);
		} else {
			//On enlève l'écouteur sur le mousemove
			leCiel.removeEventListener("touchmove", mettreEtoile, false);
		}
	}

	/**
	 * Fonction permettant de mettre des étoiles à l'endroit où
	 * le doigt touche l'écran
	 * 
	 * @param {object} evt Informations sur l'événement MouseEvent distribué
	 */
	function mettreEtoile(evt) {
		//Créer un élément HTML de type <div>- on va le nommer uneEtoile
		let uneEtoile = document.createElement("div");

		//On va lui attribuer la classe: etoileAnim
		uneEtoile.classList.add("etoileAnim");

		//Et, on va la mettre dans la section - référencée avec la variable leCiel
		//Mais avant, on va la positionner à l'endroit du doigt

		uneEtoile.style.left = (evt.targetTouches[0].clientX - leCiel.offsetLeft) + "px";
		uneEtoile.style.top = (evt.targetTouches[0].clientY - leCiel.offsetTop) + "px";

		leCiel.appendChild(uneEtoile);

		//On va aussi lui mettre un écouteur pour qu'elle disparaisse quand son animation est terminée (2 itérations vois fichier CSS)
		uneEtoile.addEventListener("animationend", enleverEtoile, false);
	}

	
	/**
	 * Fonction permettant que chaque étoile se retire elle-même de l'affichage après son animation
	 * 
	 * @param {object} evt Informations sur l'événement MouseEvent distribué
	 */
	function enleverEtoile(evt) {
		//On va ici enlever l'étoile concernée par l'événement-mais il faut la récupérer par programmation
		//??? quelle étoile...
		let cetteEtoile = evt.target;//ou this...
		//On va d'abord lui enlever son écouteur
		cetteEtoile.removeEventListener("animationend", enleverEtoile, false);
		
		//Et, on va l'enlever de son conteneur : leCiel ou cetteEtoile.parentNode
		leCiel.removeChild(cetteEtoile);
	}
	
}()); //Fin IFFE