savedGameTypeID = localStorage.getItem("gameTypeID");
gameTypeID = JSON.parse(savedGameTypeID);



function setPsxGameName() {
const gameNameTypeID = 
['https://www.googleapis.com/drive/v3/files/1nXVuAlQZyYjBoY489BZvFEQz1yABK28j?alt=media&key=AIzaSyC3wrM3jy8YRBk7NYIGI3oHdPh5ihv2Ya8',




]

function returnLast(arr) {
    return arr.at(gameTypeID - 9001);
  }
const getGameNameFromAr = returnLast(gameNameTypeID);

gameName = getGameNameFromAr;
}

function checkUserRam() {
  let ram = navigator.deviceMemory
  if (ram < 6) {
    alert("Your device does not have enough RAM to play this game. Please try a different game. Solution: download more ram");
    window.location.href = "index.html";
  }
  if (ram > 6) {
    setPsxGameName(); 
  }
}
