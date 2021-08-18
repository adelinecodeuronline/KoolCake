
var img = document.createElement("img");
img.src = "./assets/images/bg/1.svg";

var block = document.getElementById("displayer");
block.appendChild(img);






//pop up overlay

function on() {
    document.getElementById("displayer").style.display = "block";
  }
  
  function off() {
    document.getElementById("displayer").style.display = "none";
  } 