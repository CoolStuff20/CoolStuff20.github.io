let doPopup = false;
let showAgain = true;
let showAgain1 = true;
let doPopup1 = false;
let showAgainStuffDat1 = localStorage.getItem("showAgainStuff1");
if (showAgainStuffDat1 == "true") {
    let test1234 = localStorage.getItem("showAgain1");
    showAgain1 = JSON.parse(test1234);
}
let showAgainStuffDat = localStorage.getItem("showAgainStuff");
if (showAgainStuffDat == "true") {
    let test123 = localStorage.getItem("showAgain");
    showAgain = JSON.parse(test123);
}
let showAgainStuff = JSON.parse(showAgainStuffDat);
let showAgainStuff1 = JSON.parse(showAgainStuffDat1);
if (/\bCrOS\b/.test(navigator.userAgent)) {
    doPopup = true;
} else {
    doPopup = false;
}

if (gameCoreType == 'gba') { 
  doPopup1 = true;
} else {
  doPopup1 = false;
}


function surveyInitialize() {
    if (doPopup == true) {
        let userOS = 1;
        localStorage.setItem("userOS", JSON.stringify(userOS));
    }
    if (doPopup == false) {
        let userOS = 0;
        localStorage.setItem("userOS", JSON.stringify(userOS));
    }
    if (doPopup1 == true) {
        let userGame = 1;
        localStorage.setItem("userGame", JSON.stringify(userGame));
    }
    if (doPopup1 == false) {
        let userGame = 0;
        localStorage.setItem("userGame", JSON.stringify(userGame));
    }
}

function surveyBuild() {
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

function surveyBuild2() {
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  }

function surveyCheck() {
    let userOS = JSON.parse(localStorage.getItem("userOS"));
    if (userOS == 1) {
      if (showAgain == true) {
        surveyBuild();
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
      }
    }
    let userGame = JSON.parse(localStorage.getItem("userGame"));
    if (userGame == 1) {
      if (showAgain1 == true) {
        surveyBuild2();
        var modal1 = document.getElementById("myModal1");
        modal1.style.display = "block";
      }
    }
}
surveyCheck();
surveyInitialize();

function dontShowAgain() {
    let showAgain = false;
    let showAgain1 = false;
    showAgainStuff = true
    showAgainStuff1 = true;
    localStorage.setItem("showAgainStuff1", JSON.stringify(showAgainStuff1));
    localStorage.setItem("showAgain1", JSON.stringify(showAgain1));
    localStorage.setItem("showAgainStuff", JSON.stringify(showAgainStuff));
    localStorage.setItem("showAgain", JSON.stringify(showAgain));
    var modal = document.getElementById("myModal");
        modal.style.display = "none";
    var modal1 = document.getElementById("myModal1");
        modal1.style.display = "none";
}

