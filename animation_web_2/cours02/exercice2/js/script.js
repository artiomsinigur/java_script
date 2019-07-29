/*
Gérer la fin de l'animation d'intro, enlever  et créer des éléments HTML par programmation
*/
(function() {//IIFE
	let x = Math.floor(Math.random() * 10);
	console.log(x);

	//Mettre un gestionnaire d'événement sur la 4ième animation de l'intro
	let animGo = document.querySelector(".rectangle:nth-child(4)");
	animGo.addEventListener('animationend', enleverRectanglesEtMettreOvales);
	let laSection = document.querySelector("section");
	// quand l'animation du bloc 4 est terminée on retire  les rectangles du DOM
	

	function enleverRectanglesEtMettreOvales(evt){
		console.log('end');
		//On enlève l'écouteur
		evt.target.removeEventListener('animationend', enleverRectanglesEtMettreOvales);
			
		//On enlève de l'affichage les rectangles de la section
		// laSection.style.animationName = 'deplacementContenuIntro';
		// laSection.style.animationDuration = '2s';
		
		
		//...Tant qu'il y a un élément dans la section, on le retire
		while (laSection.hasChildNodes()) {
			laSection.removeChild(laSection.firstChild);
		}

		//On mets 10 ovales de type <div> dans cette division
		//Chaque ovale est de couleur différente selon la liste suivante:
		var lesCouleurs = ["#e00a7a", "#c21883", "#76217f", "#ea5d25", "#a7d29d", "#f59723", "#e9b112", "#1da66e", "#148573", "#006d98"];
		

		var unOvale;
		var nbOvales = lesCouleurs.length;

		for (var i = 0 ; i < nbOvales ; i++){
			//Créer la division et lui attribuer la classe .ovale
			let unOvale = document.createElement('div');
			unOvale.classList.add('ovale');
			
			//Attribuer la couleur selon l'ordre du tableau lesCouleurs
			unOvale.style.backgroundColor = lesCouleurs[i];

			// L'animation de chaque ovale part avec un délai au hasard de 150ms à 750ms
			let randomNomber = Math.floor(Math.random() * 750);
			unOvale.style.animationDelay = 150 + randomNomber + "ms";
			
			// Mettre chaque ovale dans la section
			laSection.appendChild(unOvale);
		}
	}

})();//Fin IIFE

