// https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D
var canvas = document.getElementById('canvas');

// Obtenir le contexte de rendu
var ctx = canvas.getContext('2d');

// Créer un gradient
var gradient = ctx.createLinearGradient(0, 0, 300, 200);
gradient.addColorStop(0, 'gray');
gradient.addColorStop(1, 'hsla(0, 0%, 100%, 0.5)');
ctx.fillStyle = gradient;

// ctx.fillStyle = 'blue';
// Syntaxe: fillRect(x, y, width, height)

// Efface la zone rectangulaire spécifiée, la rendant complètement transparente.
ctx.clearRect(0, 0, 300, 200);

// Dessine un contur rectangulaire
ctx.strokeRect(0, 0, 300, 200);

// Dessine un rectangle rempli
ctx.fillRect(0, 0, 300, 200);

// Déplace le stylo aux coordonnées x et y
// moveTo(x, y);


// Dessiner un triangle plein
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(70, 70);
ctx.lineTo(70, 25);
// ctx.closePath();
ctx.fill(); // Par default, fill() ferme toutes les formes ouvertes

// Dessiner un triangle filaire
ctx.strokeStyle = 'red';
ctx.lineWidth = 2; 
ctx.beginPath();
ctx.moveTo(80, 25);
ctx.lineTo(80, 70);
ctx.lineTo(100, 50);
ctx.closePath();
ctx.stroke();

// Dessiner des lignes
// Ligne 1
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(150, 50);
ctx.lineTo(170, 70);
ctx.stroke();

// Ligne 2
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(190, 50);
ctx.lineTo(170, 70);
ctx.stroke();

// Syntaxe: arc(x, y, rayon, angleDépart, angleFin (2 * Math.PI), sensAntiHoraire(boolean));
    // Dessine un arc de cercle
// Syntaxe: arcTo(x1, y1, x2, y2, radius);
    // Dessine un arc avec les points de contrôle et l'angle donnés, 
    // relié au point précédent par une ligne droite.

// Dessiner une émoticône
ctx.beginPath();
ctx.arc(80, 140, 40, 0, 2 * Math.PI, true); // Cercle d'extérieur
ctx.moveTo(70, 130);
ctx.arc(65, 130, 5, 0, 2 * Math.PI, true); // Oeil gauche
ctx.moveTo(100, 130);
ctx.arc(95, 130, 5, 0, 2 * Math.PI, true); // Oeil droite 
ctx.moveTo(110, 140);
ctx.arc(80, 140, 30, 0, Math.PI, false); // Bouche sens horaire
ctx.stroke();


// Dessiner un carré aux coins arrondis
function roundedRect(x,y,w,h,radius){
    ctx.moveTo(x+radius, y);                     // 220+10, 25
    ctx.lineTo(x+w-radius, y);                   // 220+40-10, 25
    ctx.arcTo(x+w, y, x+w, y+radius, radius);       // 220+40, 25, 220+40, 25+10, 10
    
    ctx.lineTo(x+w, y+h-radius);
    ctx.arcTo(x+w, y+h, x+w-radius, y+h, radius);
    
    ctx.lineTo(x+radius, y+h);
    ctx.arcTo(x, y+h, x, y+h-radius, radius);
    
    ctx.lineTo(x, y+radius);
    ctx.arcTo(x, y, x+radius, y, radius);    
    ctx.stroke();
}
roundedRect(220,25,40,60,10);


// Dessiner une lignes des carrés
for(var i = 0; i< 10; i++) {
    ctx.fillRect(10 + i * 16, 10, 4, 4);
  }

var drawShape = function (x, y, width, heigth) {
    var offset = 10;
    ctx.fillStyle = 'hsla(0,50%,50%,0.5)'
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + offset, y + heigth / 2);             // 400+10, 20+150/2=95
    ctx.lineTo(x, y + heigth);                          // 400, 20+150
    ctx.lineTo(x + width / 2, y + heigth - offset);     // 400+200/2=500, 20+150-10
    ctx.lineTo(x + width, y + heigth);                  // 400+200, 20+150
    ctx.lineTo(x + width - offset, y + heigth / 2);     // 400+200-10, 20+150/2=95
    ctx.lineTo(x + width, y);                           // 400+200, 20
    ctx.lineTo(x + width / 2, y + offset);              // 400+200/2=500, 20+10 
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
};
// drawShape(400, 20, 200, 150);


var drawCloud = function (x, y, width, heigth, color) {
    var offset = 30;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width / 2, y);
    ctx.lineTo(x + width / 2 - offset, y + heigth / 2);
    ctx.lineTo(x - offset, y + heigth / 2);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fill();
};
// drawCloud(400, 20, 500, 300, 'hsla(0,50%,50%,0.3)');


var renderCloud = function() {
    var xPos = 300,
        yPos = 200,
        radius = 50;
    ctx.fillStyle = 'skyblue';
    ctx.beginPath();
    ctx.moveTo(xPos, yPos);
    ctx.arc(xPos-radius+20, yPos, radius+20, 0, 2*Math.PI);
    ctx.moveTo(xPos+50, yPos+45);
    ctx.arc(xPos+radius, yPos-45, radius, 0, 2*Math.PI);
    ctx.moveTo(xPos+100, yPos-50);
    ctx.arc(xPos+120+radius, yPos-50, radius+50, 0, 2*Math.PI);
    ctx.moveTo(xPos+170, yPos+10);
    ctx.arc(xPos+200+radius, yPos+10, radius+10, 0, 2*Math.PI);
    ctx.fillRect(xPos-30, yPos-10, 290, 80);
    ctx.fill();
}

// https://canvature.appspot.com/

var gap = 30;
ctx.fill = 'red';
ctx.fillRect(200, 200+(gap*1), 300, 20);
ctx.fillRect(200, 200+(gap*2), 300, 20);


var CLOUD_WIDTH = 500,
    CLOUD_HEIGHT = 200,
    CLOUD_XPOS = 100,
    CLOUD_YPOS = 50,

    GAP = 20,
    BAR_HEIGHT = 40;
    BAR_XPOS = 200;
    BAR_YPOS = 50;

    TEXT_XPOS = 130;
    TEXT_YPOS = 50;
    offset = 30;

var playersTime = [1000.26521, 2600.21521, 3200.34922, 1800.36242];
var players = ['Dave', 'Kate', 'Maxim', 'Ben'];
    
// Dessiner le nuage
var drawCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + CLOUD_WIDTH, y);
    ctx.lineTo(x + CLOUD_WIDTH - offset, y + CLOUD_HEIGHT);
    ctx.lineTo(x - offset, y + CLOUD_HEIGHT);
    ctx.lineTo(x, y);
    ctx.fill();
};

for (let i = 0; i < players.length; i++) {
    const element = array[i];
    
}
ctx.fillStyle = 'black';
ctx.font = '14px sans-serif';
ctx.fillText('Dave', TEXT_XPOS, (TEXT_YPOS*1)-10);
ctx.fillRect(BAR_XPOS, GAP+(BAR_YPOS*1)-BAR_YPOS, 350, BAR_HEIGHT);
