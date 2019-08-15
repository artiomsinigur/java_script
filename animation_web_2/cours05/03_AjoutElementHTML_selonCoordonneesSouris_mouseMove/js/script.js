(function () { //IIFE
	
	//Variable leCiel,  qui représente l'élément "section" de la page HTML
	let leCiel;

	/**
	 *	On part les scripts, uniquement quand la page HTML est chargée....
	 */
	window.addEventListener("load", function () {
		//leCiel qui représente l'élément "section" de la page HTML
		leCiel = document.querySelector("section");


		//Écouteurs sur le ciel sur les événements  mousedown et mouseup
		leCiel.addEventListener("mousedown", demarrerOuArreterEcriture, false);
		leCiel.addEventListener("mouseup", demarrerOuArreterEcriture, false);
	}, false);


	/**
	 * Fonction permettant de commencer ou d'arrêter l'écriture avec des étoiles
	 * 
	 * @param {object} evt Informations sur l'événement MouseEvent distribué
	 */
	function demarrerOuArreterEcriture(evt) {
		console.log(evt.type);
		if (evt.type == 'mousedown') {
			//On met un écouteur sur le mousemove sur le ciel...
			leCiel.addEventListener('mousemove', mettreEtoile);
			
		} else {
			//On enlève l'écouteur sur le mousemove
			leCiel.removeEventListener('mousemove', enleverEtoile);
			
		}
	}

	/**
	 * Fonction permettant de mettre des étoiles à l'endroit où
	 * la souris est appuyé dans l'écran
	 * 
	 * @param {object} evt Informations sur l'événement MouseEvent distribué
	 */
	function mettreEtoile(evt) {

		//Créer un élément HTML de type <div>- on va le nommer uneEtoile
		let uneEtoile = document.createElement("div");

		//On va lui attribuer les classes: fa & fa-star (police d'icônes Awesome) et etoileAnim
		uneEtoile.classList.add("etoileAnim");

		//Et, on va la mettre dans la section - référencé avec la variable leCiel
		//Mais avant, on va la positionner à l'endroit du curseur

		uneEtoile.style.left = (evt.clientX - leCiel.offsetLeft) + "px";
		uneEtoile.style.top = (evt.clientY - leCiel.offsetTop) + "px";

		leCiel.appendChild(uneEtoile);

		//On va aussi lui mettre un écouteur pour qu'elle disparaisse quand son animation est terminée (2 itérations voir le fichier CSS)
		uneEtoile.removeEventListener('animationend', enleverEtoile);
		
	}

	/**
	 * Fonction permettant que chaque étoile se retire elle-même de l'affichage après son animation
	 * 
	 * @param {object} evt Informations sur l'événement MouseEvent distribué
	 */
	
	function enleverEtoile(evt) {
		//On va ici enlever l'étoile concernée par l'événement-mais il faut la récupérer par programmation
		//??? quelle étoile...
		// let cetteEtoile = evt.target;
		//On va d'abord lui enlever son écouteur
		this.removeEventListener('animationend', enleverEtoile);
		
		//Et, on va l'enlever de son conteneur : leCiel ou cetteEtoile.parentNode
		leCiel.removeChild(this);
	}
	
}()); //Fin IFFE