const canvas = document.getElementById('canvas'); // id di canvas

const context = canvas.getContext('2d'); /// context nome file creato da canvas

const rectArray = [];

for (let i = 0; i < 100; i++) {

    const  randomX = Math.random() * 600;  /// numero random da 0 a 1

    const  randomY = Math.random() * 480;

    const  randomW = Math.random() * 100;  

    const  randomH  = Math.random() * 100;

    const randomRed = Math.random() * 255; // colore rosso random

    const randomGreen = Math.random() * 255; // colore verde random

    const randomBlu = Math.random() * 255; // colore blu random

    const randomAlfa = Math.random(); // tonalita di trasparenza colore

    const randomVX = randomBetween (- 2,2);
    
    const randomVY = randomBetween (- 2,2);

    const colorRgbString = 'rgba(' +  randomRed +', ' + randomGreen +', '  + randomBlu +' , ' + randomAlfa + ')'

    // context.fillStyle = '#00000064' // darli la trasparenza 

    // context.fillStyle = colorRgbString;   // sostitusico la trasparenza con i colore trasparente 
    
    // context.fillRect(randomX, randomY, randomW, randomH); // ho creato 4 dimesioni. 0 x 600 = 0 0,5 =300 1= 600
    
    const rect = {x: randomX, y: randomY, width: randomW, height: randomH, color:colorRgbString, velX: randomVX, velY: randomVY}
    rectArray.push(rect);
}


setInterval(() => {  /// ripete questa funzione ogni tot tempo
    context.clearRect(0, 0, canvas.width, canvas.height); // per ridare lo scermo bianco?
    for (const rect of rectArray) {
        
        context.fillStyle = rect.color;
        context.fillRect(rect.x, rect.y, rect.width, rect.height);
        rect.x = rect.x + rect.velX; /// sposta di uno il px del del rettangolo numero e la velocita 
        rect.y = rect.y + rect.velY; 

        if (rect.x < 0 || ( rect.x + rect.width) > canvas.width) { // sinistra bordo / destro
            rect.velX = rect.velX * -1
        }

        if (rect.y < 0 || ( rect.y + rect.height) > canvas.height) { // bordo su e giu
            rect.velY = rect.velY * -1
        }
    }
}, 10 ); // si esprime in mille secondi = ogni 3 secondi 

// let deltaTime  = 0 

function update(event) { ///freim per secondo 60*1000

    // const deltaTime = event = actualTime; 

    // actualTime = event; 


    context.clearRect(0, 0, canvas.width, canvas.height); // per ridare lo scermo bianco?
    for (const rect of rectArray) {
        
        context.fillStyle = rect.color;
        context.fillRect(rect.x, rect.y, rect.width, rect.height);
        rect.x = rect.x + rect.velX; /// sposta di uno il px del del rettangolo numero e la velocita 
        rect.y = rect.y + rect.velY; 

        if (rect.x < 0 || ( rect.x + rect.width) > canvas.width) { // sinistra bordo / destro
            rect.velX = rect.velX * -1  ///* deltaTime/10;
        }

        if (rect.y < 0 || ( rect.y + rect.height) > canvas.height) { // bordo su e giu
            rect.velY = rect.velY * -1   ///* deltaTime/10;
        }
    }
    requestAnimationFrame(update) 
}


requestAnimationFrame(update);

// setTimeout(() => { /// ritarda il funzionamento della funzione  per i secondi impostati
//     console.log('ciao');
// }, 10000);

//context.fillRect(10, 10, 100, 100);  /// prime due misure sono inizio e la fine del lato sinistro il terzo la lungezza  e il quatro e la lungezza in giu

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}