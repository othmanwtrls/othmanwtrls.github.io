//Get the button:

var GoTopButton = document.getElementById("GoTop");
var GoIngButton = document.getElementById("GoIng");
var GoGlobButton = document.getElementById("GoGlob");
var ListButton = [GoTopButton, GoIngButton, GoGlobButton];

var EngiSect = document.getElementById("EngineeringSection");
var GlobSect = document.getElementById("GlobalSection");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    ListButton.forEach( item => {item.style.display = "block"});
  } else {
    ListButton.forEach( item => {item.style.display = "none"});
  }

  if (document.documentElement.scrollTop > (GlobSect.offsetTop-100)) {
    GoGlobButton.style.opacity = "100%";
    GoIngButton.style.opacity = "40%";
  }else if (document.documentElement.scrollTop > (EngiSect.offsetTop-100)) {
    GoGlobButton.style.opacity = "40%";
    GoIngButton.style.opacity = "100%";
  }else {
    GoGlobButton.style.opacity = "100%";
    GoIngButton.style.opacity = "100%";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
