//Detecting button press.
var allButtons = document.querySelectorAll(".drum");
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

  //Detecting keyboard press.
  document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  //function to make sound.
 function makeSound(key){
  switch (key) {
    case "w":
      var snare= new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;
    case "s":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "k":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "l":
      var tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
      default:console.log(buttonInnerHTML);
  }
 }

 //added animation to each button.
function buttonAnimation(currentKey){
  var activebutton=document.querySelector("."+currentKey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },800);
}
}
