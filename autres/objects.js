// Objects en JS use strings to access the different elements.
// The strings are called KEYS or PROPERTIES 
// and the element that they point to are VALUES
    // 1 KEY is always a string
    // 2 VALUE can be of any type

    Object.keys();
    Object.getOwnPropertyNames();
    Object.values();
    Object.entries();

// Pour écrire un KEY avec deux mots séparer par un espace, on l'écrit en apostrophe
    var cat = {'full name': 'Cat Fill'};


//========================//
// Acceder à un élément dans un objet
//========================//
var cat = {name: 'Harmony', legs: 4, color: 'brown'};

// 1.0 Dot notation
cat.name; // Harmony

// 1.1 Square brackets
cat['color']; // brown

// Obtenir tous les KEY d'un objet ==============//
// Il retourne un tableau avec tous ces clés
var cat = {name: 'Harmony', legs: 4, color: 'brown'};
Object.keys(cat); // ["name", "legs", "color"]


// Ajouter un valuer dans un objet ==============//
var cat = {};
cat['legs'] = 4;
cat['name'] = 'Harmony';

// Dot notation
var dog = {};
dog.name = 'Levin';
dog.age = 2;
dog.isAwesome = true;


// Combiner des tableaux et objets ===============//
var dinosaurs = [
    {name: 'Rex', period: 'Late Cretaceous'},
    {name: 'Stegosaurus', period: 'Jurassic'}
];
dinosaurs[0]['name']; // Rex
dinosaurs[0].name; // Rex

// Exemple plus complexe
    // 1 Tout d'abourd on crée les objets 
    var anna = {name: 'Anna', age: 16, luckyNumbers: [2,6,45] };
    var dave = {name: 'Dave', age: 21, luckyNumbers: [24,1,4] };
    
    // 2 Ensuite on les ajoute dans un tableau
    var friends = [anna, dave];

    // Acceder l'élément
    friends[0].name; // Anna    
    friends[1].luckyNumbers[2]; // 4


// exemple d'objet
var wizard = {
    name: 'Pendolf',
    age: 24,
    level: 2,
    say: function() {
        console.log(wizard.name + ' dit <<tu ne passeras pas! Mon level: ' + wizard.level + ' >>');
    },
    levelUp: function(level) {
        wizard.level += level;
    }
};

console.log(wizard.say());

// One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too. Let's say we wanted users to be able to store custom value types in their people data, by typing the member name and value into two text inputs
    let myDataName = nameInput.value;
    let myDataValue = nameValue.value;
    // We could then add this new member name and value to the person object like this:

    person[myDataName] = myDataValue;
    // To test this, try adding the following lines into your code, just below the closing curly brace of the person object:

    let myDataName = 'height';
    let myDataValue = '1.75m';
    person[myDataName] = myDataValue;

    person.height
    // 1.75
