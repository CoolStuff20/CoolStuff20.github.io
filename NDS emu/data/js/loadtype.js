let gameCoreType = "null";
let gameName = "null";
let biosName = "null";


// 1 - 1000 = GBA
// 1001 - 2000 = NES
// 2001 - 3500 = SNES
// 3501 - 4500 = N64
// 4501 - 6000 = Gameboy
// 6001 - 7000 = Atari 5200
// 7001 - 9000 = DS
// 9001 - 10000 = PS1
// 10001 - 11000 = Sega MD
// 11001 - 12000 = Gameboy Color

savedGameTypeID = localStorage.getItem("gameTypeID");
gameTypeID = JSON.parse(savedGameTypeID);

function findGameType() {
    if (gameTypeID > 0 && gameTypeID < 1001) {
        gameCoreType = 'gba'; //gba
        setGbaGameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 1000 && gameTypeID < 2001) {
        gameCoreType = 'nes';
        setNesGameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 2000 && gameTypeID < 3501) {
        gameCoreType = 'snes';
        setSnesGameName()
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 3500 && gameTypeID < 4501) {
        gameCoreType = 'n64';
        setN64GameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 4500 && gameTypeID < 6001) {
        gameCoreType = 'gba'; //gameboy
        setGbGameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 6000 && gameTypeID < 7001) {
        gameCoreType = 'atari5200';
        setAtari52GameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 7000 && gameTypeID < 9001) {
        gameCoreType = 'nds';
        setNdsGameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 9000 && gameTypeID < 10001) {
        gameCoreType = 'psx';
        checkUserRam();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 10000 && gameTypeID < 11001) {
        gameCoreType = 'segaMD';
        setSegaMDGameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 11000 && gameTypeID < 12001) {
        gameCoreType = 'gba'; //gbc
        setGbcGameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }

}
findGameType();


function setPageTitle() {
    getLocalTextVal = localStorage.getItem("gameSetText");
    gameSetText = JSON.parse(getLocalTextVal);
    document.title = gameSetText;
    document.getElementsByTagName('meta')["description"].content = "Click here to try out: " + gameSetText + ". The game type is: " + gameCoreType;
    //Set meta desc with game name
} // omg title has set!!!!
setPageTitle();