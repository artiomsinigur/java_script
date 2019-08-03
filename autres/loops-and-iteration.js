// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// ======================
// La boucle for ... in
// ======================
    // for ... in iterates over property names
    // The for...in statement iterates a specified variable over all the enumerable properties of an OBJECT. 
    // For each distinct property, JavaScript executes the specified statements.
    for (variable in object) {
        statement
    }

    const profil = {
        nom: "Martin",
        prenom: "Eddy",
        adresse: "3800 Sherbrooke Est",
        Ville: "Montréal",
        Province: "Québec",
        Pays: "Canada"
    }

    for (let i in profil) {
        console.log(i);
    }
    // VM4880:2 nom
    // VM4880:2 prenom
    // VM4880:2 adresse
    // VM4880:2 Ville
    // VM4880:2 Province
    // VM4880:2 Pays

    for (let i in profil) {
        console.log(i, '=', profil[i]);
    }
    // VM4946:2 nom = Martin
    // VM4946:2 prenom = Eddy
    // VM4946:2 adresse = 3800 Sherbrooke Est
    // VM4946:2 Ville = Montréal
    // VM4946:2 Province = Québec
    // VM4946:2 Pays = Canada

    // Erreur si on boucle un objet avec for ... of
    for (let i of profil) {
        console.log(i);
    }
    // Uncaught TypeError: profil is not iterable

// =======================
// La boucle for ... of
// =======================
    // for ... of iterates over property values
    // The for...of statement creates a loop Iterating over iterable objects 
    // (including ARRAY, Map, Set, arguments object and so on), 
    // invoking a custom iteration hook with statements to be executed for the value of each distinct property.

    for (variable of iterable) {
        instruction
    }

    // Exemple:
    let tableauIterable = [1, 2, 3];
    for (let valeur of tableauIterable) {
        console.log(valeur);
    }
    // 1
    // 2
    // 3

    let iterable = 'pixel';
    for (let valeur of iterable) {
    console.log(valeur);
    }
    // p
    // i
    // x
    // e
    // l

    const tabProfil = [{
        nom: "Martin",
        prenom: "Eddy",
        adresse: "3800 Sherbrooke Est",
        Ville: "Montréal",
        Province: "Québec",
        Pays: "Canada"
        },
        {
        nom: "Marchand",
        prenom: "Xavier",
        adresse: "2030 boul Pie-IX",
        Ville: "Montréal",
        Province: "Québec",
        Pays: "Canada"
        }
    ]

    // 1. Parcourir le tableau tabProfil
    for (let obj of tabProfil) {
        // 2. Retourne 1er objet du tableau
        // 3. Parcourir cet objet
        for (let property in obj) {
            // 4. Afficher la propriete et la valeur de cet objet 
            console.log(property ,'=', obj[property]);
        }
    }
    // VM5549:3 nom = Martin
    // VM5549:3 prenom = Eddy
    // VM5549:3 adresse = 3800 Sherbrooke Est
    // VM5549:3 Ville = Montréal
    // VM5549:3 Province = Québec
    // VM5549:3 Pays = Canada
    
    // VM5549:3 nom = Marchand
    // VM5549:3 prenom = Xavier
    // VM5549:3 adresse = 2030 boul Pie-IX
    // VM5549:3 Ville = Montréal
    // VM5549:3 Province = Québec
    // VM5549:3 Pays = Canada


    // Parcourir des collections DOMSection
    // Il est possible de parcourir des collections DOM telles que NodeList. 
    // Les objets NodeList sont des collections de nœuds comme celles retournées par Node.childNodes et la méthode document.querySelectorAll()
    let articleParagraphs = document.querySelectorAll("article > p");
    for (let paragraph of articleParagraphs) {
        paragraph.classList.add("read");
    }


// Difference between a for...of loop and a for...in loop // =======================
// While for...in iterates over property names, for...of iterates over property values
    let arr = [3, 5, 7];
    arr.foo = 'hello';
    // [1, 2, 3, x: "Hello"]
    // 0: 1
    // 1: 2
    // 2: 3
    // foo: "Hello"

    for (let i in arr) {
        console.log(i); // logs "0", "1", "2", "foo"
    }

    for (let i of arr) {
        console.log(i); // logs 3, 5, 7
    }