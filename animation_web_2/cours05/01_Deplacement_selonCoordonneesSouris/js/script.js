(function () { //IIFE
	//Variable leCiel,  qui représente l'élément "section" de la page HTML
	let leCiel;

	/**
	 *	On part les scripts, uniquement quand la page HTML est chargée....
	 */
	// Il s'agit de 
	
	
	//leCiel qui représente l'élément "section" de la page HTML
	leCiel = document.querySelector("section");

	//Écouteur sur l'événement de souris "mousedown"
	leCiel.addEventListener('mousedown', deplacerEtoile);
	// leCiel.addEventListener('mousemove', deplacerEtoile);



	/**
	 * Fonction permettant de déplacer l'étoile à l'endroit du
	 * relâchement de la souris ou du doigt dans l'écran
	 * 
	 * @param {object} evt Informations sur l'événement MouseEvent distribué
	 */
	function deplacerEtoile(evt) {
		//Cibler l'étoile qui est l'élément <div> de la section (leCiel)
		var etoile = leCiel.querySelector("div");
		console.log(leCiel, etoile);
		console.log(evt);
		etoile.style.left = evt.offsetX + "px";
		etoile.style.top = evt.offsetY + "px";

		//Coordonnées X et Y de l'endroit où a eu lieu le mousedown 
		console.log("client X, Y : ");

		//Déplacer l'étoile à l'endroit du mouseup dans le ciel...

	}

}()); //Fin IFFE