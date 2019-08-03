// ==========================
// Creat a constuctor with a normal function
function creatNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert("Hi, I'am " + obj.name + ".");
    };
    return obj;
}

// You can now create a new person by calling this function
let artiom = creatNewPerson('Artiom');
// console.log(artiom.name);
// artiom.greeting();


// ===========================
// This works well enough, but it is a bit long-winded; if we know we want to create an object, 
// why do we need to explicitly create a new empty object and return it? 
// Fortunately, JavaScript provides us with a handy shortcut, in the form of constructor functions
function Person(name) {
    // Set a property
    this.name = name;
    // Set a method
    this.greeting = function() {
        alert("Hi, I'am " + this.name + ".");
    };
}

// Call a constructor to create some objects
let tim = new Person('Tim');
// console.log(tim.name);
// let bob = new Person('Bob');
// console.log(bob.name);

// =======================
// Complet the below constructor
function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.checkGender = function() {
        let gender;
        if (this.gender === 'male') {
            gender = 'He';
        } else if(this.gender == 'female') {
            gender = 'She';
        } else {
            gender = 'Intersex';
        }
        return gender;
    };
    this.interests = interests;
    this.displayInterests = function() {
        let interest = '';
        // for (const valInt of this.interests) {
        //     interest += ', ' + valInt;
        // }
        let numInterest = this.interests;
        for (let i = 0; i < numInterest.length; i++) {
            // debugger;
            if (numInterest.length === 1) {
                interest += numInterest[i];
            } else if (i === numInterest.length - 2) {
                interest += numInterest[i];
            } else if(i === numInterest.length - 1) {
                interest += ' and ' + numInterest[i];
            } else {
                interest += numInterest[i] + ', ';
            }
        }
        return interest;
    };
    this.bio = function() {
        console.log(this.name.last + ' is ' + this.age + ' years old. ' + this.checkGender() + ' likes ' + this.displayInterests() + '.');
    };
    this.greeting = function() {
        alert('Hi! I\'am ' + this.name.first);
    };
}

// 1 Create an object instance
let person1 = new Person('Artiom', 'Sinigur', 32, 'male', ['music', 'sport', 'games']);
// console.log(person1.bio());


// ==========================
// 2 Other ways to create object instances
    let person2 = new Object();
    person2.name = 'Artiom';
    person2.age = 23;
    person2.greeting = function() {
        console.log('Hi! I\'am ' + this.name + '.');
    };
    // console.log(person2.name);

    // You can also pass an object literal to the Object() constructor as a parameter, to prefill it with properties/methods.
    let person3 = new Object({
        name: 'Nicola',
        age: 53,
        greeting: function() {
            console.log('Hi! I\'am ' + this.name + '.');
        }
    });
    // console.log(person3.name);


// =========================
// 3 Using the create() method
    // Create object instances without first creating constructors.
    // With it, you can create a new object based on any existing object.
    let fromPerson3 = Object.create(person3);
    // console.log(fromPerson3.name);


// =========================
// Object prototypes
    // Prototypes are the mechanism by which JavaScript objects inherit features from one another.

    // Since ECMAScript 2015 you can access an object's prototype object indirectly via Object.getPrototypeOf(obj).
    // console.log(person1.__proto__);  //Depricated
    // console.log(Object.getPrototypeOf(person1));

    let string = 'Text is for write a idea';
    let newText = 'Lorem ipsom';
    // You'll see other examples of prototype chain inheritance all over JavaScript
    // Try looking for the methods and properties defined on the prototype of 
    // the String, Date, Number, and Array global objects
    // console.log(String.prototype);


// ==========================
// Dive more in prototype
    // function in JavaScript will always have a default prototype property.
    function doSomething() {}
    // console.log(doSomething.prototype);

    // Add properties to the prototype of doSomething(), as shown below
    doSomething.prototype.foo = 'bar'; // add a property onto the prototype
    // console.log(doSomething.prototype);
    // {foo: "bar", constructor: ƒ}
    // foo: "bar"
    // constructor: ƒ doSomething()
        // __proto__:
        // constructor: ƒ Object()
        // hasOwnProperty: ƒ hasOwnProperty()
        // isPrototypeOf: ƒ isPrototypeOf()
        // ..

    // We can now use the new operator to create an instance of doSomething() based on this prototype.
    let doSomeInstancing = new doSomething();
    doSomeInstancing.prop = 'Some value'; // add a property onto the object
    // console.log(doSomeInstancing);
    // doSomething {prop: "Some value"}
        // prop: "Some value"
        // __proto__:
            // foo: "bar"
            // constructor: ƒ doSomething()
                // __proto__:
                // constructor: ƒ Object()
                // hasOwnProperty: ƒ hasOwnProperty()
                // isPrototypeOf: ƒ isPrototypeOf()
                // ...

    // As seen above, the __proto__ of doSomeInstancing is doSomething.prototype.
    // console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
    // console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
    // console.log("doSomething.prop:           " + doSomething.prop);
    // console.log("doSomething.foo:            " + doSomething.foo);
    // console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
    // console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
    // doSomeInstancing.prop:      Some value
    // doSomeInstancing.foo:       bar
    // doSomething.prop:           undefined
    // doSomething.foo:            undefined
    // doSomething.prototype.prop: undefined
    // doSomething.prototype.foo:  bar


// =======================
// “Super” and “Extends” In JavaScript ES6 - Understanding The Tough Parts
// https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420
// SUPER
    // super - appelle le constructeur parent avec le paramètre
    // Le mot-clé super est utilisé pour appeler les fonctions rattachées à un objet parent.

class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    eat() {
        return `${this.name} is eating!`;
    }
    sleep() {
        return `${this.name} is going to sleep!`;
    }
    wakeUp() {
        return `${this.name} is waking up!`;
    }
}

let dog = new Animal('Albert', '30kg');
// console.log(dog.eat());


// Now we will extend a class from main class Animal
class Gorilla extends Animal {
    constructor(name, weight) {
        // super keyword is used as a “function”
        // which calls the parent class Animal with the parameters passed to Gorilla
        super(name, weight);
    }
    climpTrees() {
        return `${this.name} is climping trees!`;
    }
    poundChest() {
        return `${this.name} is pounding its chest!`;
    }
    eat() {
        return `${this.name} is eating an orange!`;
    }
    dailyRoutine() {
        // super keyword is used as a “method”
        // which refers to an Animal instance (parent class)
        return `${super.wakeUp()} ${this.eat()} ${this.poundChest()} ${super.sleep()}`;
    }
}

let africa = new Gorilla('Africa', '160kg');
// console.log(africa.dailyRoutine());


// ===========================
// Traditional JavaScript Classes
function Animal2(name, weight) {
    this.name = name;
    this.weight = weight;

    this.eat = function() {
        return `${this.name} is eating!`;
    }
}
Animal2.prototype.sleep = function() {
    return `${this.name} is going to sleep!`;
}
Animal2.prototype.wakeUp = function() {
    return `${this.name} is waking up!`;
}

let lion = new Animal2('Alex', '45kg');
console.log(lion.sleep());

console.log(Animal2.prototype);

// This shows that lion’s dunder proto property and Animal2.prototype are pointing to the same object.
// if (Animal2.prototype === lion.__proto__) {
//     console.log('true');
// }


// =======================
// Extend a new class form parent class Animal2
function Gorilla2(name, weight) {
    Animal2.call(this, name, weight);
}

Gorilla2.prototype = Object.create(Animal2.prototype);
Gorilla2.prototype.constructor = Gorilla2;

Gorilla2.prototype.climbTrees = function() {
    return `${this.name} is climbing trees!`;
}
Gorilla2.prototype.poundChest = function() {
    return `${this.name} is pounding chest!`;
}

Gorilla2.prototype.dailyRoutine = function() {
    return `${Animal.prototype.wakeUp.call(this)} ${this.poundChest()} ${Animal.prototype.eat.call(this)} ${Animal.prototype.sleep.call(this)}`;
}

let bily = new Gorilla2('Bily', '125kg');
console.log(bily.dailyRoutine());
