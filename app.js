function myFunction() {
  document.getElementById("myDIV").style.animationDuration = "5s";
  document.getElementById("myDIV").style.animationTimingFunction = "linear";
  document.getElementById("myDIV").style.animationDirection = "reverse";

}
function myPlayFunction() {
  document.getElementById("myDIV").style.animationPlayState = "running";
}

function myPauseFunction() {
  document.getElementById("myDIV").style.animationPlayState = "paused";
}
