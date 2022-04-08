var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    sounds(buttonInnerHTML);
    buttonPress(buttonInnerHTML);
    console.log(buttonInnerHTML);
    var test = document.querySelector('.' + buttonInnerHTML.toLowerCase());
    console.log(test);
  });
}
document.addEventListener("keypress", function(event){
  var keypress = event.key.toUpperCase();
  console.log(keypress)
  sounds(keypress);
  buttonPress(keypress);
})
function sounds(key){
  console.log(key);
  switch (key) {
    case "W":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
     case "A":

       var tom2= new Audio('sounds/tom-2.mp3');
       tom2.play();
       break;
      case "S":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "D":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case "J":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "K":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      case "I":
        var snare= new Audio('sounds/snare.mp3');
        snare.play();
        break;
    default: console.log('----');

  }
}

 function buttonPress(current){
   var active = document.querySelector("." +current);
   active.classList.add(".pressed");
   setTimeout(function(){
     active.classList.remove("pressed");
   },100);
 }
