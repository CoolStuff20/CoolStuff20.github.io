//let savedGameTypeID = localStorage.getItem("gameTypeID");
//gameTypeID = JSON.parse(savedGameTypeID);
let savedGameTxt = localStorage.getItem("gameSetText");
gameSetText = JSON.parse(savedGameTxt);
let doTheySetFav = 0;
//let savedGameCoreType = localStorage.getItem("gameCoreType");
//let gameCoreType = JSON.parse(savedGameCoreType);

let favBarContent = document.getElementById('favorite-bar-text');
function setContentForBar() {
    let savedFavBar = localStorage.getItem("favbarinfo");
    document.getElementById("favorite-bar-text").innerHTML = JSON.parse(savedFavBar);
    console.log(favBarContent);
}
setContentForBar();

function setFavs() {
    let doTheyFavDat = localStorage.getItem("doTheyFav");
    let doTheyFav = JSON.parse(doTheyFavDat)

    if (doTheyFav == 1) {
    let title = gameSetText;
    let savedGameTypeID = localStorage.getItem("gameTypeID");
    gameID = JSON.parse(savedGameTypeID);
    let savedGameCoreType = localStorage.getItem("gameCoreType");
    let gameType = JSON.parse(savedGameCoreType);

    let favoriteBar = document.getElementById('favorite-bar-text');

        const createGameNameBar = document.createElement('h1');
        const createGameLinkBar = document.createElement('a');
        const linkNode = document.createTextNode("Launch " + title + " now!");
        const createGameIdBar = document.createElement('p');
        const createGameTypeBar = document.createElement('p');
        const createGameIdNode = document.createTextNode("The game ID is: " + gameID);
        const createGameTypeNode = document.createTextNode("Game type: " + gameType);

        createGameLinkBar.appendChild(linkNode);
        createGameLinkBar.href = "launchpad.html?gameID=" + gameID + "&gametitle=" + title + "&fav=true";

        const barNode = document.createTextNode(title);
        createGameNameBar.appendChild(barNode);
        favoriteBar.appendChild(createGameNameBar);
        createGameLinkBar.appendChild(linkNode);
        favoriteBar.appendChild(createGameLinkBar);
        favoriteBar.appendChild(createGameIdBar);
        favoriteBar.appendChild(createGameTypeBar);
        createGameIdBar.appendChild(createGameIdNode);
        createGameTypeBar.appendChild(createGameTypeNode);
    

    console.log(gameID);
    console.log(gameType);
    console.log(linkNode);
    console.log(barNode);

    let saveinfo = document.getElementById('favorite-bar-text').innerHTML;
    localStorage.setItem("favbarinfo", JSON.stringify(saveinfo));
    console.log(favoriteBar);
    }
    doTheyFav = 0;
    localStorage.setItem("doTheyFav", JSON.stringify(doTheyFav));
}

function theyClearFavs() {
    let saveinfo = document.getElementById('favorite-bar-text').innerHTML;
    saveinfo = '';
    localStorage.setItem("favbarinfo", JSON.stringify(saveinfo));
}