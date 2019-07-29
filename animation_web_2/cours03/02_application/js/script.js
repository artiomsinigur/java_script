/*
 *Gérer les événements des animations pour les synchroniser
 */
(function () { //IIFE

	//Récupérer les mots
	var lesMots = document.querySelectorAll(".lesMots");

	/*
	 *Quand l'animation pour écrire le premier mot est terminée
	 * on fait monter le mot en animant la couleur de la section
	 */



	function monterPremierMot(evt) {
		//On enlève l'écouteur
		

		//On affecte au premier mot la classe .bondEnHaut
		

		//on récupère la section, le parent du mot... pour lui affecter la classe: .animCouleur
		
			
		//Quand le mot est monté, on place le deuxième mot avec son animation
		
	}


	function placerDeuxiemeMot(evt) {
		//On enlève l'écouteur
		evt.target.removeEventListener("animationend", placerDeuxiemeMot, false);

		//On récupère le deuxième mot pour lui affecter une animation : .versLeCentre
		

		//Quand l'animation du 2e mot est terminée, on place le troisième mot avec son animation
		
	}

	function placerTroisiemeMot(evt) {
		//On enlève l'écouteur
		evt.target.removeEventListener("animationend", placerTroisiemeMot, false);

		//On récupère le troisième mot pour lui affecter une animation : .etirerMot 
		lesMots[2].classList.add("etirerMot");
	}

})(); // Fin IIFE