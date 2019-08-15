// =====================
// Three methods to attach an event
// =====================
/*
    // Method 1
        <button onclick="alert('Hello World')">Click Me</button>
    
    // Method 2
        // the html file
        // <button id="btn">Click Me</button>
    
        // the JavaScript file
        var btn = document.querySelector('#btn');
        btn.onclick = () => alert("Hello World");
        // This method have a limit that a DOM element can only have 1 “onclick” property.

        // Method 3
            // the html file
            // <button id="btn">Click Me Too</button>
            
            // the JavaScript file
            var btn = document.querySelector('#btn');
            btn.addEventListener('click', () => {
                alert("Hello World");
            });

    // ========= Note ==========//
    // All 3 of these methods can be used with named functions like so:
    
    // the html file
    // METHOD 1
    <button onclick="alertFunction()">CLICK ME BABY</button>
    function alertFunction() {
    alert("YAY! YOU DID IT!");
    }

    // METHOD 2
    btn.onclick = alertFunction;

    // METHOD 3
    btn.addEventListener('click', alertFunction);

    // Using named functions can clean up your code considerably, 
    // and is a really good idea if the function is something that 
    // you are going to want to do in multiple places.
*/

// =====================
// Exemples
// =====================
let btn = document.getElementsByTagName('BUTTON')[0];
// btn.addEventListener('click', () => alert('Hello!'));

btn.addEventListener('click', (e) => {
    e.target.style.background = 'blue';
    console.log(e);
});


// ====================
// Attaching listeners to groups of nodes
// =====================
    const btns = document.querySelectorAll('button');
    // buttons is a node list. It looks and acts much like an array.

    // Version 1
    // we use the .forEach method to iterate through each button
    // btns.forEach((button) => {
    //     // and for each one we add a 'click' listener
    //     button.addEventListener('click', (e) => alert(button.innerText));
    // });

    // Version 2
    btns.forEach(isButton);
    function isButton(button) {
        // and for each one we add a 'click' listener
        button.addEventListener('click', (e) => alert(button.innerText));
        // same
        // button.addEventListener('click', function(e) {
        //     alert(button.innerText)
        // });
    }