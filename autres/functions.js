// =====================
// Fonctions: Declaration, Expression, Callback, Anonymous and Arrow in ES6
// http://javascript.info/function-expressions-arrows
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// =====================


//======================
// Function Declaration (Preferred!)
    // 1 Better syntax.
    // 2 Can be called before they are declared.
    // 3 Easear to look up
//======================
    function nameFunc(arg1, arg2, ...argN) {
        return expression;
    }
        // A Function Declaration can be called earlier than it is defined.
    // For example, a global Function Declaration is visible in the whole script, no matter where it is.

    // That’s due to internal algorithms. When JavaScript prepares to run the script, 
    // it first looks for global Function Declarations in it and creates the functions.
    // And after all Function Declarations are processed, the code is executed. So it has access to these functions.
    
    // Function Declaration = WORKS!
    sayHi("John"); // Hello, John
    function sayHi(name) {
        alert( `Hello, ${name}` );
    }

    // Function Expression = WON'T WORK!
    sayHi("John"); // error!
    let sayHi = function(name) {
        alert( `Hello, ${name}` );
    };

    // ============= Atention ============= //
    // In strict mode, when a Function Declaration is within a code block, 
    // it’s visible everywhere inside that block. But not outside of it.


    // For instance, let’s imagine that we need to declare a function welcome() 
    // depending on the age variable that we get during runtime. And then we plan to use it some time later.
    let age = prompt("What is your age?", 18);

    // conditionally declare a function
    if (age < 18) {
        function welcome() {
            alert("Hello!");
        }
    } else {
        function welcome() {
            alert("Greetings!");
        }
    }
    
    // ...use it later
    welcome(); // Error: welcome is not defined
    // That’s because a Function Declaration is only visible inside the code block in which it resides.


    // ========= Solution =========//
    // What can we do to make welcome visible outside of if?
    let age = prompt("What is your age?", 18);
    let welcome;
    
    if (age < 18) {
        welcome = function() {
            alert("Hello!");
        };
    } else {
        welcome = function() {
            alert("Greetings!");
        };
    }
    welcome(); // ok now


    // ========= Tips ==========//
    // We can write the same function above shorter with Anonymous function and ternary operator
    let age = prompt("What is your age?", 18);
    let welcome = (age < 18) ?
        function() {alert("Hello!");} :
        function() {alert("Greetings!");};
    welcome();


//======================
// Function Expression
//======================
    let func = function(arg1, arg2, ...argN) {
        return expression;
    };
    // Here, the function is created and assigned to the variable explicitly, like any other value. 
    // No matter how the function is defined, it’s just a value stored in the variable sayHi.
    // The meaning of these code samples is the same: "create a function and put it into the variable sayHi

    
    // ============= Note ============= // 
    // A Function Expression is created when the execution reaches it and is usable only from that moment.
    // Once the execution flow passes to the right side of the assignment let sum = function… – here we go, 
    // the function is created and can be used (assigned, called, etc. ) from now on.


// =====================
// Callback functions
// =====================
    // We’ll write a function ask(question, yes, no) with three parameters:
    // $question
    // Text of the question
    // $yes
    // Function to run if the answer is “Yes”
    // $no
    // Function to run if the answer is “No”
    // The function should ask the question and, depending on the user’s answer, call yes() or no():

    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
        }
        
    function showOk() {
        alert( "You agreed." );
    }
    
    function showCancel() {
        alert( "You canceled the execution." );
    }
        
    // usage: functions showOk, showCancel are passed as arguments to ask
    ask("Do you agree?", showOk, showCancel);
    // The idea is that we pass a function and expect it to be “called back” later if necessary. 
    // In our case, showOk becomes the callback for the “yes” answer, and showCancel for the “no” answer.
    

// =====================
// Anonymous functions derived from Expression function
// =====================
    function() {}
    // We can use Function Expressions to write the same function much shorter with Anonymous function
    function ask(question, yes, no) {
        if (confirm(question)) yes()
            else no();
    }
    ask(
        "Do you agree?",
        function() { alert("You agreed."); },
        function() { alert("You canceled the execution."); }
    );
    // Here, functions are declared right inside the ask(...) call. 
    // They have no name, and so are called anonymous. 
    // Such functions are not accessible outside of ask (because they are not assigned to variables)
    

// =====================
// Arrow functions
// =====================
    // 1 Syntax
    let nameFunc = (arg1, arg2, ...argN) => expression

    // In other words, it’s roughly the same as:
    let func = function(arg1, arg2, ...argN) {
        return expression;
    }

    // 2 Exemple
    let sum = (a, b) => a + b;
    sum(2, 3); // 5

    // 3 If we have only one argument, then parentheses around parameters can be omitted:
    let double = n => n * 2;
    alert( double(3) ); // 6

    // 4 If there are no arguments, parentheses should be empty (but they should be present):
    let sayHi = () => alert("Hello!");

    // 5 Multiline arrow functions
    let sum = (a, b) => {  // the curly brace opens a multiline function
        let result = a + b;
        return result; // if we use curly braces, use return to get results
    };
    alert( sum(1, 2) ); // 3

    // ========== Tips ==========//
    // Arrow functions can be used in the same way as Function Expressions.
    // For instance, here’s the rewritten example with welcome():
    let age = prompt("What is your age?", 18);
    let welcome = (age < 18) ?
        () => {alert("Hello!");} :
        () => {alert("Greetings!");};
    welcome();

    
// ================ Note ===============//
    // Why is there a semicolon at the end?
    function sayHi() {
        // ...
    }
    // There’s no need for ; at the end of code blocks and syntax structures 
    // that use them like if { ... }, for { }, function f { } etc.

    let sayHi = function() {
        // ...
    };
    // A Function Expression is used inside the statement: let sayHi = ...;, as a value. 
    // It’s not a code block, but rather an assignment. It just terminates the statement.
    // The semicolon ; is recommended at the end of statements. 


// ============ Conclution ============ //
    /*
    In most cases when we need to declare a function, a Function Declaration is preferable, 
    because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.
    So we should use a Function Expression only when a Function Declaration is not fit for the task.

    Arrow functions are handy for one-liners. They come in two flavors:
        1   Without curly braces: (...args) => expression – the right side is an expression: 
            the function evaluates it and returns the result.
        2   With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, 
            but we need an explicit return to return something.
    */


// ====================
// Fonction récursive (fonction qui s'appelle elle-même)
// ====================
    var watchNextItem = function(itemsLeft) {
        itemsLeft--;
        console.log('Dans l\'évier reste ' + itemsLeft + ' objet');
        
        if (itemsLeft > 0) {
            itemsLeft--;
            console.log('Dans l\'évier reste ' + itemsLeft + ' objet');
            
            if (itemsLeft > 0) {
                itemsLeft--;
                console.log('Dans l\'évier reste ' + itemsLeft + ' objet');
                
                // etc...
            }
        }
    }

    // Pour optimiser le code ci-dessus on appele une fonction récursive
    var watchNextItem = function(itemsLeft) {
        // 1. Condition, enlever un objet
        itemsLeft--;
        console.log('Dans l\'évier reste ' + itemsLeft + ' objet');
        
        // 2. Vérifier s'il reste des objets
        if (itemsLeft > 0) {
            // 3. Récommencer le cycle
            watchNextItem(itemsLeft);
        }
    }
    // watchNextItem(5);


// ======================
// Avec while ou while/do
// ======================
    var watchNextItem = function(itemsLeft) {
        while (itemsLeft-- > 0) {    
            console.log('Dans l\'évier reste ' + itemsLeft + ' objet');
        }
    }
    watchNextItem(5);