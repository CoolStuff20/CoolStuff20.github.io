let CACHE_NAME = 'V1';
let urlsToCache = [
    './',
    './emulator.html',
    './export.html',
    './gb.html',
    './gba-2.html',
    './gba.html',
    './gbc.html',
    './gbindex.html',
    './index_beta.html',
    './info.html',
    './n64.html',
    './nds.html',
    './nds2.html',
    './nes.html',
    './nesindex.html',
    './offline.html',
    './recommendations.html',
    './romindex.html',
    './segamd.html',
    './settings.html',
    './snes.html',
    './testlaunch.html',
    './update.html',

    './user_css/home.css',
    './user_css/index.css',
    './user_css/main.css',
    './user_css/player.css',
    './user_css/popup.css',
    './user_css/rec.css',
    './user_css/themes.css',

    './user_scripts/theme.js',
    './user_scripts/player-theme.js',
    './user_scripts/popup.js',

    './data/js/loadgame/loadGbagame.js',
    './data/js/loadgame/loadGbgame.js',
    './data/js/loadgame/loadGbcgame.js',
    './data/js/loadgame/loadAtari52game.js',
    './data/js/loadgame/loadN64game.js',
    './data/js/loadgame/loadNdsgame.js',
    './data/js/loadgame/loadNesgame.js',
    './data/js/loadgame/loadPsxgame.js',
    './data/js/loadgame/loadSnesgame.js',
    './data/js/loadgame/loadSegaMDgame.js',
    './data/js/type.js',
    './data/js/loadtype.js',
    './data/js/swap.js',
    './data/loader.js',

    './IodineGBA/includes/TypedArrayShim.js',
    './IodineGBA/core/Cartridge.js',
    './IodineGBA/core/DMA.js',
    './IodineGBA/core/Emulator.js',
    './IodineGBA/core/Graphics.js',
    './IodineGBA/core/RunLoop.js',
    './IodineGBA/core/Memory.js',
    './IodineGBA/core/IRQ.js',
    './IodineGBA/core/JoyPad.js',
    './IodineGBA/core/Serial.js',
    './IodineGBA/core/Sound.js',
    './IodineGBA/core/Timer.js',
    './IodineGBA/core/Wait.js',
    './IodineGBA/core/CPU.js',
    './IodineGBA/core/Saves.js',
    './IodineGBA/core/sound/FIFO.js',
    './IodineGBA/core/sound/Channel1.js',
    './IodineGBA/core/sound/Channel2.js',
    './IodineGBA/core/sound/Channel3.js',
    './IodineGBA/core/sound/Channel4.js',
    './IodineGBA/core/CPU/ARM.js',
    './IodineGBA/core/CPU/THUMB.js',
    './IodineGBA/core/CPU/CPSR.js',
    './IodineGBA/core/graphics/Renderer.js',
    './IodineGBA/core/graphics/RendererProxy.js',
    './IodineGBA/core/graphics/BGTEXT.js',
    './IodineGBA/core/graphics/BG2FrameBuffer.js',
    './IodineGBA/core/graphics/BGMatrix.js',
    './IodineGBA/core/graphics/AffineBG.js',
    './IodineGBA/core/graphics/ColorEffects.js',
    './IodineGBA/core/graphics/Mosaic.js',
    './IodineGBA/core/graphics/OBJ.js',
    './IodineGBA/core/graphics/OBJWindow.js',
    './IodineGBA/core/graphics/Window.js',
    './IodineGBA/core/graphics/Compositor.js',
    './IodineGBA/core/memory/DMA0.js',
    './IodineGBA/core/memory/DMA1.js',
    './IodineGBA/core/memory/DMA2.js',
    './IodineGBA/core/memory/DMA3.js',
    './IodineGBA/core/cartridge/SaveDeterminer.js',
    './IodineGBA/core/cartridge/SRAM.js',
    './IodineGBA/core/cartridge/FLASH.js',
    './IodineGBA/core/cartridge/EEPROM.js',
    './user_scripts/XAudioJS/swfobject.js',
    './user_scripts/XAudioJS/resampler.js',
    './user_scripts/XAudioJS/XAudioServer.js',
    './user_scripts/IodineGBAROMLoadGlueCode.js',
    './user_scripts/IodineGBAJoyPadGlueCode.js',
    './user_scripts/IodineGBASavesGlueCode.js',
    './user_scripts/IodineGBAGraphicsGlueCode.js',
    './user_scripts/IodineGBAAudioGlueCode.js',
    './user_scripts/IodineGBACoreGlueCode.js',
    './user_scripts/base64.js',

    './Binaries/gb.ico'
    ];

self.addEventListener('install', function(event) {
// Perform install steps
// Perform install steps


    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});


self.addEventListener("activate", event => {
  // delete any unexpected caches
  event.waitUntil(
    caches
      .keys()
      .then(keys => keys.filter(key => key !== CACHE_NAME))
      .then(keys =>
        Promise.all(
          keys.map(key => {
            console.log(`Deleting cache ${key}`);
            return caches.delete(key);
          })
        )
      )
  );
});
