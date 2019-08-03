//========================//
// Data types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
//========================//
/*
ECMAScript standard defines eight data types:
    Seven data types that are primitives:
        Boolean
        Null
        Undefined
        Number
        BigInt
        String
        Symbol (new in ECMAScript 6)
    and Object
*/

//========================//
// Operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
//========================//
Math.sqrt(16);
Math.abs(-2);
Math.pow(3, 2);
Math.PI;

console.log('Hello,' + 'world!'); // Hello,world!
// L'operateur concaténation(+) à la priorité face à l'operateur addition(+)
console.log('10' + 2); // '102'
console.log('10' - 2); // 8
console.log('10' / 2); // 5

// Convertir un type en numerique
'10' / '2' === 5
// Convertir un type en chaine de caractére
true + 'eee' === 'trueeee'

// Convertir un type avec les méthods JS
    // En numerique
    parseInt('10', 10); // 10
    parseFloat('10.2'); // 10.2

    // En chaine
    10..toString(); // '10'
    // ou
    10.0.toString(); // '10'

// Convertir un type avec les opetateurs + et -
    // En numerique
    + '10' === 10
    - '3' === -3

    // En chaine
    3 + '' === '3'

    // Convertir en boolean
    !!1 === true
    !!0 === false

