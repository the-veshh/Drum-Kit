for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var pressedButton = this.innerHTML;

    makeSound(pressedButton);
    buttonAnimate(pressedButton);

  });
}

//when keys are pressed
document.addEventListener("keydown", function(pressedKey)
{
  makeSound(pressedKey.key);
  buttonAnimate(pressedKey.key);
})

//to play sound
function makeSound(e)
{
  switch (e) {

    case 'w':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();

      break;

    case 'a':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();

      break;

    case 's':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();

      break;

    case 'd':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();

      break;

    case 'j':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();

      break;

    case 'k':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();

      break;

    case 'l':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();

      break;

    default:

  }
}

//to animate button
function buttonAnimate(e)
{
  document.querySelector("."+e).classList.add("pressed");

  setTimeout(function() {
      document.querySelector("."+e).classList.remove('pressed');
    }, 100);
}
