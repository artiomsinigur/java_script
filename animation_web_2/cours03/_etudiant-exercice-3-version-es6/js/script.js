/*
Gérer la fin de l'animation d'intro, enlever  et créer des éléments HTML par programmation
*/
(function() {//IIFE
	// let laSection = ------------------------
	//Mettre un gestionnaire d'événement sur la 4ième animation de l'intro
	let animGo = document.querySelector(".rectangle:nth-child(4)");

	animGo.addEventListener("animationend", enleverRectanglesEtMettreOvales, false);
	

	function enleverRectanglesEtMettreOvales(evt) {
		//On enlève l'écouteur
		this.removeEventListener("animationend", enleverRectanglesEtMettreOvales, false);
			
		//On enlève de l'affichage les rectangles de la section
		
		//...Tant qu'il y a un élément dans la section, on le retire
		while (laSection.hasChildNodes()) {
			laSection.removeChild(laSection.firstChild);
		}

		const configuration = {
			delaiMinimum : 50,
			delaiMaximum : 500,
			nombreDeOvale : 15
		}
		animer_ovales(configuration)
	}
// À completer la fonction animer_ovales ---------
		// const animer_ovales -------------------------- {
		//On mets configuration.nombreDeOvale ovales de type <div> dans cette division
		//Chaque ovale est de couleur aléatoire 
		
		

		let unOvale;


		for (var i = 0; i < configuration.nombreDeOvale; i++) {
			//Créer la division et lui attribuer la classe .ovale
			unOvale = document.createElement("div");
			unOvale.classList.add("ovale");
			
			
			//Attribuer la couleur aleatoire selon l'ordre du tableau lesCouleurs
			unOvale.style.backgroundColor = couleurAlea();

			// L'animation de chaque ovale part avec un délai au hasard de 150ms à 750ms
			// unOvale.style.animationDelay = configuration.------------- + (Math.random() * (---------------------)) + "ms";
			
			// Mettre chaque ovale dans la section
			laSection.appendChild(unOvale);
		}

	}

	// const couleurAlea ----------------- {
		/* Utilisez les template de ES6 pour générer les couleur aléatoirement */
		// let rouge = --------------------------;
		// let vert = --------------------------;
		// let bleu = --------------------------;
		console.log(`rgb ---------------- `)
		return ` template de rgb aleatoire`;
	}

})();//Fin IIFE

