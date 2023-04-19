// navigator.registerProtocolHandler("web+gba", "launchpad.html?gameID=%s&gametitle=%s&fav=%s", "GBA handler"); // last title arg included for compatibility
// navigator.registerProtocolHandler("web+nes", "launchpad.html?gameID=%s&gametitle=%s&fav=%s", "NES handler"); // last title arg included for compatibility
// navigator.registerProtocolHandler("web+snes", "launchpad.html?gameID=%s&gametitle=%s&fav=%s", "SNES handler"); // last title arg included for compatibility
// navigator.registerProtocolHandler("web+sega", "launchpad.html?gameID=%s&gametitle=%s&fav=%s", "Sega handler"); // last title arg included for compatibility

document.querySelector('button').addEventListener('click', () => {
    navigator.registerProtocolHandler("web+gba", "https://math-study.github.io/gba/gba.html", "GBA handler"); // last title arg included for compatibility
navigator.registerProtocolHandler("web+nes", "%s", "NES handler"); // last title arg included for compatibility
navigator.registerProtocolHandler("web+snes", "%s", "SNES handler"); // last title arg included for compatibility
navigator.registerProtocolHandler("web+sega", "%s", "Sega handler"); // last title arg included for compatibility
  });