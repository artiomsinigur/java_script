(function () { //IIFE

	//Variable leCiel,  qui représente l'élément "section" de la page HTML
	let leCiel;
	
	/**
	 *	On part les scripts, uniquement quand la page HTML est chargée....
	 */
	window.addEventListener("load", function () {
		//leCiel qui représente l'élément "section" de la page HTML
		leCiel = document.querySelector("section");

		//Écouteur sur la scène sur le mousedown
		leCiel.addEventListener("mousedown", mettreEtoile, false);
	}, false);


	/**
	 * Fonction permettant de mettre des étoiles à l'endroit où
	 * la souris est appuyé dans l'écran
	 * 
	 * @param {object} evt Informations sur l'événement MouseEvent distribué
	 */
	function mettreEtoile(evt) {
		//Créer un élément HTML de type <div>- on va le nommer uneEtoile
		let uneEtoile = document.createElement("div");

		//On va lui attribuer la classe:  etoileAnim
		uneEtoile.classList.add("etoileAnim");
		uneEtoile.style.left = evt.offsetX + "px";
		uneEtoile.style.top = evt.offsetY + "px";

		//Et, on va la mettre dans la section - référencée avec la variable leCiel
		//Mais avant, on va la positionner selon les coordonnées du curseur de la souris
		leCiel.appendChild(uneEtoile);

		console.log("client X, Y : ", evt.clientX, evt.clientY);
		console.log("Le cadre ciel offset : ", leCiel.offsetLeft, leCiel.offsetTop);
		
		console.log("Obtenir la coordonne X 0 de la zone ciblé : ", evt.clientX - leCiel.offsetLeft);
		console.log("Obtenir la coordonne Y 0 de la zone ciblé : ", evt.clientY - leCiel.offsetTop);
		
	}

}()); //Fin IFFE
