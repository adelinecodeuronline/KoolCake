
//randoming background

var img_name = new Array("./assets/images/bg/1.svg", "./assets/images/bg/2.svg",
"./assets/images/bg/3.svg", "./assets/images/bg/4.svg", "./assets/images/bg/5.svg", "./assets/images/bg/6.svg");

var l = img_name.length;

var rnd_no = Math.floor((Math.random() * 6));

document.r_img.src = img_name[rnd_no];

document.getElementById("character-right").style.zIndex = "10"; 




//randoming characters of the right

var img_character = new Array("./assets/images/character-right/a.svg", "./assets/images/character-right/b.svg",
"./assets/images/character-right/c.svg", "./assets/images/character-right/d.svg", "./assets/images/character-right/e.svg", 
"./assets/images/character-right/f.svg", "./assets/images/character-right/g.svg", "./assets/images/character-right/h.svg", 
"./assets/images/character-right/i.svg", "./assets/images/character-right/j.svg", "./assets/images/character-right/k.svg");

var character = img_character.length;

var rnd_no2 = Math.floor((Math.random() * 11));

document.r_img2.src = img_character[rnd_no2];

document.getElementById("character-right").style.zIndex = "20"; 


//randoming characters of the left

var img_character_left = new Array("./assets/images/character-left/y-1.svg", "./assets/images/character-left/y-2.svg",
"./assets/images/character-left/y-3.svg", "./assets/images/character-left/y-4.svg", "./assets/images/character-left/y-5.svg", 
"./assets/images/character-left/y-6.svg", "./assets/images/character-left/y-7.svg", "./assets/images/character-left/y-8.svg");

var character_left = img_character_left.length;

var rnd_no3 = Math.floor((Math.random() * 8));

document.r_img3.src = img_character_left[rnd_no3];

document.getElementById("character-left").style.zIndex = "20"; 





const reloadtButton = document.querySelector("#reload"); // pretty good...but I have to find a way to refresh only the displayer/images without exit...
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);





//pop up overlay

function on() {
    document.getElementById("displayer").style.display = "block";
  }

  //no use for the moment (to be attached on an exit cross)
  
  /*function off() {
    document.getElementById("displayer").style.display = "none";
  } */ 



  //2d pop up overlay for "KoolCake ? What Is It / Qu'est-ce que c'est ?"

function whatIsIt() {
  document.getElementById("whatisit").style.display = "block";
}

function offWhatisit() {  // closed when we click inside
    document.getElementById("whatisit").style.display = "none";
  } 



  
  
  //Want to improve : add sounds attached on the images