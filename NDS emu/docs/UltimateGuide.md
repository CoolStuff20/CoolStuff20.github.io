## How to add games. The Ultimate Guide! ~~(Made at 12:30AM by cattn Re-Made Later)~~ Nail Edit

### Step 1
Upload your rom to data/roms/ 

### Step 2
Fill in this sample code and add to index.html or any other game page (i.e. nes.html, segaMD.html, etc.)

```html
<p><a href="launchpad.html" onclick="gameType(x); setNameTxt(this);">Your Game Name Here</a></p>
```
Replace the letter x in gameType(x) with a ID that corresponds with the game you are uploading. Here is a chart:
```
 1 - 1000 = GBA
 1001 - 2000 = NES
 2001 - 3500 = SNES
 3501 - 4500 = N64
 4501 - 6000 = Gameboy
 6001 - 7000 = Atari 5200
 7001 - 8000 = DS
 8001 - 9000 = PS1
 ```
Each game MUST have a unique ID. Please include 1 in gba, 1001 in nes, etc.
Also, please make sure to start from the beginning of the ranges and count up. Do not skip.
If there are already entries for that game type, just increment by one. Do not go over the value range though. 
Then fill in your Game Name 

### Step 3
Navigate to emulatorjs/data/js/loadgame folder, and find the one that corresponds with the game you are trying to add.

Next, navigate to line 8 on any of them, and then put in your game according to the example below.
```js
['data/roms/PokemonSaph.gba', // First ID
'../Binaries/007.gba', // place in order from first ID // Second ID
'../Binaries/0994.gba', // Third ID
'filepath/exampleGame.ext', // example format (would be the fourth ID)

]
```
Just use a linebreak, and add the path to the file 'Path/to/Filename', <--- Make sure to have the comma
File extension is needed, also do not start the path with a /, just start with data/roms/

 >Example of our GBA games. Notice how there are multiple file path directories, so if a rom is saved somewhere else, it will be acceptable.
 >You can also use  remote server link! just start with an `https://`. For example `https://.subdomain.example.com/filepath/exampleGame.ext`
 >Please do not link to servers you don;t have explicit permission for.



## You are now finished! Submit a pull request if you wish. 
