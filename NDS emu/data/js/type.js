var gameTypeID = 0;
var gameSetText = null;

function gameType(gameTypeID) {
    localStorage.setItem("gameTypeID", JSON.stringify(gameTypeID));
}

function setNameTxt(clickedElement) {
    gameSetText = clickedElement.textContent;
    localStorage.setItem("gameSetText", JSON.stringify(gameSetText));
}

function setRecTxt(clickedElement) {
    clickedElement.querySelectorAll("*:not(li, h1, strong)").forEach(function(v){v.remove()});
    console.log(clickedElement.innerText);
    localStorage.setItem("gameSetText", JSON.stringify(clickedElement.innerText));
}

function loadParams() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      let gameval = params.gameID; 
      let titleval = params.gametitle;
      gameSetText = titleval;
      gameTypeID = gameval;
      localStorage.setItem("gameSetText", JSON.stringify(gameSetText));
      localStorage.setItem("gameTypeID", JSON.stringify(gameTypeID));
      console.log(gameval);
}

function gameStarSelected() {
    doTheySetFav = 1;
    localStorage.setItem("doTheyFav", JSON.stringify(doTheySetFav));
    }


function checkParam() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    let checkPar = params.fav;
    if (checkPar == "true") {
        loadParams();
    }
}
checkParam();

function copyFunction() {
    let savedGameTypeID = localStorage.getItem("gameTypeID");
    let gameID = JSON.parse(savedGameTypeID);

    let savedGameTxt = localStorage.getItem("gameSetText");
    let gameTitle = JSON.parse(savedGameTxt);
    var copyData = document.getElementById("inputText");

    copyData.value = "https://math-study.github.io/gba/launchpad.html?gameID=" + gameID + "&gametitle=" + gameTitle + "&fav=true";
    copyData.select();
    navigator.clipboard.writeText(copyData.value);
    alert("Copied link to clipboard: " + copyData.value);
    
    }

function embedCopy() {
    let savedGameTypeID = localStorage.getItem("gameTypeID");
    let gameID = JSON.parse(savedGameTypeID);

    let savedGameTxt = localStorage.getItem("gameSetText");
    let gameTitle = JSON.parse(savedGameTxt);
    var copyData = document.getElementById("inputText");

    var embedCode = "<iframe src='https://math-study.github.io/gba/launchpad.html?gameID='" + gameID + "&gametitle=" + gameTitle + "&fav=true";

    copyData.value = embedCode + ' width="100%" height="500" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://math-study.github.io/gba" target="_blank">math-study.github.io/gba</a>'
    copyData.select();
    navigator.clipboard.writeText(copyData.value);
    alert("Copied embed to clipboard: " + copyData.value);
    
}

