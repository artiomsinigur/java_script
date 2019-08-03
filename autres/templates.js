// =====================
// TEMPLATES
// =====================
    // Les « templates » fournissent une manière plus simple de construire les strings (avec le caractère accent grave  `  ) 
    // en permettant de l’intégration de variables avec ${mavariable}

    let fruit = {nom: 'tomate', couleur: 'rouge'};
    let description= `La ${fruit.nom} est ${fruit.couleur}`;
    console.log(description); // Log 'La tomate est rouge'

    /* Un autre exemple avec les chaînes de caractères */
    // ES5
    const entete = function (monTitre) {
        return `Collège de Maisonneuve: ${monTitre}`
                }
    console.log(entete('Programmation d\'animation')) // 

    // ES6
    const enteteES6 = monTitre => `Collège de Maisonneuve: ${monTitre}`
    console.log(enteteES6('Programmation d\'animation')) //     