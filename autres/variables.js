// Nommer les variables avec substantif
var userName = 'David';
var age = 35;

// Nommer les noms des fonctions avec des verbes ou en phrase contenant des verbes
var doSomethingGreat  = function() {};

// Deux façon de nommer un variable avec plusieurs mots
    // camelCase
    // snake_case



ES6
// ===================
// LET
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let
// ===================
    // Let permet de déclarer une variable dont la portée sera limitée au bloc qui contient cette déclaration. Le bloc est défini par un niveau d’accolade. Si le bloc contient d’autres blocs la portée de la variable inclura tous les autres blocs inclus.  En déclarant avec let il n’est pas obligatoire d’initialiser la nouvelle variable avec une valeur.
    // let k ; // pas nécessaire d’initialiser la variable
    // let k = 0 ;

    // Différences entre let et var =================//
        let k = 1;
        console.log('let ', k) // let 1
        {
            let k=5
            console.log('let ', k) // let 5
            
        }
        console.log('let ', k) // let 1

        //========================
        
        var j = 1;
        console.log('var ', j) // var 1
        {
            var j = 5
            console.log('var ', j) // var 5

        }
        console.log('var ', j) // var 5


// ==========================
// CONST pour les variables non réassignables
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const
// ==========================
    // Const permet de déclarer une constante disponible uniquement en lecture. 
    // La portée de const est celle du bloc, comme la déclaration let. 
    // Pour la rendre globale, il faut simplement la définir hors de toute fonction.

    const a = 'foo';
    a = 'bar';  // Erreur, car `a` ne peut pas être réassignée
    // ATTENTION. Cela ne veut pas dire qu’une variable déclarée avec const est une constante.

    // Par contre, si la variable contient un objet on peut modifier les propriétés de cet objet. 
    // Si la variable contient un tableau, on peut ajouter ou retirer des membres du tableau.
    // Donc la utilisation de const est de 90% et let le rest de temps
        // 1.	on a rarement besoin de réassigner une variable ; 
        // 2.	on manipule souvent des objets et des tableaux plutôt que des primitives, 
        // 3.	const autorise les modifications dans un objet ou dans un tableau.
    
    