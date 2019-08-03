// Last In, First Out - LIFO
// First In, First Out - FIFO

//======================//
// Travailler avec un array
//======================//
    var animals = [];
// ====================
// push()
// 1.0 Ajouter un élément à la fin d'un tableau
// ====================
    animals.push('Cat');
    
    
// ====================
// unshift()
// 1.1 Ajouter un élément au début d'un tableau
// ====================
    animals.unshift('Cat');

    
// ====================
// pop()
// 1.2 Enlever un élément à la fin d'un tableau et le retourne
// ====================
    animals.pop('Cat');

    
// ====================
// shift()ment au début d'un tableau et le retourne
// ===================
    // 1.3 Enlever un élé=
    animals.shift('Cat');

    
// ====================
// indexOf()
// 1.4 Trouver l'index d'un élément
// ====================
    var colors = ['red', 'green', 'yellow'];
    colors.indexOf('green'); // 1

    
// ====================
// concat()
// Combiner deux ou plusieurs arrays
// ====================
    // Syntax
    array.concat(arr1, arr2, ...arrN);
    var pets = ['Pony', 'Cat', 'Dog'];
    var wildAnimals = ['Lion', 'Tiger', 'Elephant'];
    // 1.1 Joindre deux tableaux
    // firstArray.concat(otherArray);
    petsAndWildAnimals = pets.concat(wildAnimals);


// ====================
// join()
// Convertire un tableau en chaine de caractére
// ====================
    var animals = ['Pony', 'Cat', 'Tiger', 22]; // le nombre sera converti en chaine
    animals.join(); // 'Pony,Cat,Tiger'

    // ou séparer avec un séparateur specifique
    animals.join(' - '); // 'Pony - Cat - Tiger' 

    animals.toString(); // 'Pony Cat Tiger'


// ====================
// split()
// Convertire une chaine de caractére en tableau
// ====================
    var text = 'Hello';
    text.split(''); // ["H", "e", "l", "l", "o"]
    
    var text = 'Hello world!';
    text.split(' '); // ["Hello", "world!"]

    const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322'];
    contacts[0].split(':') // ["Chris", "2232322"]


// ====================
// splice()
// Ajouter ou supprimer des éléments dans un tableau 
// ====================
    // 1.0 Ajouter des éléments dans un tableau
        // The first parameter (2) defines the position where new elements should be added (spliced in).
        // The second parameter (0) defines how many elements should be removed.
        // The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
        // The splice() method returns an array with the deleted items:
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.splice(2, 0, "Lemon", "Kiwi"); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

    // 1.1 Supprimer un élément avec splice()
        // 1 Supprimer le/les premier élément et le/les retourner
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.splice(0, 1); // ["Banana"]
        fruits // maintenant le tableau est ["Orange", "Apple", "Mango"]

        // 2 Supprimer le dernier élément d'un tableau
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.splice(-1, 1); // ["Mango"]
        fruits // maintenant le tableau est ["Banana", "Orange", "Apple"]


    // =========== Atention ============//
    // ne pas confondre split(), splice() et slice() 

// ====================
// slice()
// La méthode slice() divise une partie d'un tableau en un nouveau tableau. 
// ====================
    // The slice() method creates a new array. It does not remove any elements from the source array.

    // This example slices out a part of an array starting from array element 3 ("Apple"):
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var citrus = fruits.slice(3); // retourne un nouveau tableau ["Apple", "Mango"]

    // The slice() method can take two arguments like slice(1, 3).
    // The method then selects elements from the start argument, and up to (but not including) the end argument.
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var citrus = fruits.slice(1, 3); // retourne ["Orange", "Lemon"] 

// ====================
// Afficher un mots aleatoire
// ====================
    var randomWords = ['Explosion', 'Cave', 'Princess', 'Pen'];
    // Générer un nombre aleatoire
    var randomIndexs = [Math.floor(Math.random() * randomWords.length)];
    // Afficher un mots aleatoire
    // console.log(randomWords[randomIndexs]);


//============================//
// Lire un tableau
//============================//
/*
var printNames = function(names) {
    var index = 0;
    console.log(names[index]);
    index++;
    console.log(names[index]);
    index++;
    console.log(names[index]);
    index++;
    console.log(names[index]);
    index++;
}
*/


// ====================
// Lire le tableau avec while
// ====================
/*
var printNames = function(names) {
    // Initialiser
    var index = 0;
    // Arreter
    while(index < names.length) {
        console.log(names[index]);
        // Répéter. Augmenter à un
        index++;
    }
}
*/


// ====================
// Exemples des exercices
// ====================
    // Lire le tableau avec for
    var printNames = function(names) {
        for (var i = 0;             // Initialiser 
            i < names.length;       // Arreter 
            i++) {                  // Répéter
            console.log(names[i]);
        }
    }


    // ====================
    // Parcourir un array en sens inverse
    var printNames = function(names) {
        for (var i = names.length-1; i >= 0; i--) {
            console.log(names[i]);
        }
    }

    printNames(['David', 'Morgan', 'Annie', 'Andrew']);


    // ====================
    // Mettre en majuscule la première d'un chaine de caractère
    let capitalizeFirstLetter = (word) => {
        let arrWord = word.split('');
        let firstLetter = arrWord.shift().toUpperCase();
        arrWord.unshift(firstLetter);
        let newWord = arrWord.join('');
        return newWord;
    }
    console.log(capitalize('artiom'));


    // ====================
    // Obtenir la dernière lettre d'une chaine de caractère
    let lastLetter = text => text[text.length - 1];
    console.log(lastLetter('Good'));