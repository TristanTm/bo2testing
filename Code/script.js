
var modal = document.getElementById("Scherm1");


var btn = document.getElementById("Knop1");


var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


