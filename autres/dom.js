// ====================
// Adding inline style
// ====================
    div.style.color = 'blue';                                      
    // adds the indicated style rule

    div.style.cssText = 'color: blue; background: white';          
    // adds several style rules

    div.setAttribute('style', 'color: blue; background: white');    
    // adds several style rules

// ====================
// Editing Attributes
// ====================
    div.setAttribute('id', 'theDiv');                              
    // if id exists update it to 'theDiv' else create an id
    // with value "theDiv"

    div.getAttribute('id');                                        
    // returns value of specified attribute, in this case
    // "theDiv"

    div.removeAttribute('id');                                     
    // removes specified attribute

// =====================
// Adding text content
// =====================
    div.textContent = 'Hello World!'                               
    // creates a text node containing "Hello World!" and
    // inserts it in div

    // Adding HTML content
    div.innerHTML = '<span>Hello World!</span>';                   
    // renders the html inside div

    // *Note that textContent is preferable for adding text, and innerHTML should be used sparingly as it can create security risks if misused.


// =====================
// Exemples
// =====================
let createElement = (tag, text, pathTag) => {
    let newTag = document.createElement(tag);
    newTag.textContent = text;
    pathTag.appendChild(newTag);
}

let container = document.getElementById('container');

createElement('p', 'Hey i\'m red!', container);
document.querySelectorAll('p')[0].style.color = 'red';

createElement('h3', 'Hey I\'m a blue h3!', container);
document.querySelector('h3').style.color = 'blue';

let blockBorder = document.createElement('div');
blockBorder.classList.add('borderSection');
blockBorder.style.padding = '20px';
blockBorder.style.width = '500px';
blockBorder.style.borderStyle = 'solid';
blockBorder.style.borderWidth = '5px';
blockBorder.style.borderColor = 'black';
blockBorder.style.backgroundColor = 'pink';
container.appendChild(blockBorder);

let borderSection = document.querySelector('.borderSection');

createElement('h1', 'I\'m in a div', borderSection);
createElement('p', 'My too', borderSection);


// Obtenir la position du cursor/
let log = (e) => {
    leCiel.innerText = `
        screenX/Y: ${e.screenX}, ${e.screenY}
        clientX/Y ${e.clientX}, ${e.clientY}
        offsetX/Y ${e.offsetX}, ${e.offsetY}`;
};