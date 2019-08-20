document.querySelector('#name').innerText = "Inspector Clouseau";
document.querySelector('#slogan').innerText = '"This IZ Chief Inspector Clouseau speaking on the pheaun."';
document.querySelector('#pageTitle').innerText = "Inspector Clouseau";

let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixel tall.`;
let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the display.`;
let link = `The page URL is ${window.location}`;

let myDocument = `Document title is ${document.title}. \n The page was last updated on ${document.lastModified}`;

document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset+ '\n' + link;
document.querySelector('#myDocument').innerText = myDocument;