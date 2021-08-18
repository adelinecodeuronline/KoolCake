// Arrays for the random layers of illustrations

var background = [

 'background-cheese.svg',
'background-clouds.svg',
'background-swamp.svg',
'background-volcano.svg',
];






//Let's randoming 
function getRandomImage() {
    var randomNum = Math.floor(Math.random() * (background.length));
}


//Display illustration
document.getElementById('displayer').innerHTML = background[randomNum];






//Order of layers
background.style.zIndex = 10;



//I wanna display fullscreen content (images)
function makeFullScreen() {
    var divObj = document.getElementById('displayer');
}