(function () {//IIFE
		
	let etoile,//Représente l'élément "div" qui va être animé
		degreRotation = 0;//Degré de rotation de l'étoile initialisé à 0

	/**
	 *	On part les scripts, uniquement quand la page HTML est chargée....
	 */
	window.addEventListener("load", () => {
		//Identifier l'étoile
		etoile = document.querySelector("div");

		//Minuterie pour animer l'étoile
		setInterval(tournerEtoile, 20);
		
	}, false);


	/**
	 * Fonction permettant de tourner l'étoile
	 */
	function tournerEtoile() {
		//Incrémenter le degré de rotation
		degreRotation += 1;
		
		
		// Application de la transformation – Modèle de libellé de chaînes VS concaténation voir: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits
		// etoile.style.transform = "rotate(" + degreRotation + "deg)";
		etoile.style.transform = `rotate(${degreRotation}deg)`;
		
	}

}()); //Fin IFFE