const toggleState = 1;
localStorage.setItem("isNet", JSON.stringify(0));
localStorage.setItem("isCheck", JSON.stringify(0));
localStorage.setItem("is1Check", JSON.stringify(0));
console.log(localStorage.getItem("isNet"), localStorage.getItem("isCheck"), localStorage.getItem("is1Check"));
function themeValue(toggleState) {
    if (toggleState == 1) {
        document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    if (toggleState == 2) {
        document.documentElement.setAttribute('data-theme', 'dark');
      
      localStorage.setItem('theme', 'dark');
    }
    if (toggleState == 3) {
        document.documentElement.setAttribute('data-theme', 'pink');
      
      localStorage.setItem('theme', 'pink');
    }
    if (toggleState == 4) {
      document.documentElement.setAttribute('data-theme', 'green');

    localStorage.setItem('theme', 'green');
  }
  if (toggleState == 5) {
    document.documentElement.setAttribute('data-theme', 'dark-green');

  localStorage.setItem('theme', 'dark-green');
}
if (toggleState == 6) {
  document.documentElement.setAttribute('data-theme', 'black-white');

localStorage.setItem('theme', 'black-white');
}
if (toggleState == 7) {
  document.documentElement.setAttribute('data-theme', 'blue-pink');

localStorage.setItem('theme', 'blue-pink');
}
if (toggleState == 8) {
  document.documentElement.setAttribute('data-theme', 'charcoal-yellow');

localStorage.setItem('theme', 'charcoal-yellow');
}
if (toggleState == 9) {
  document.documentElement.setAttribute('data-theme', 'hotpink-cyan');

localStorage.setItem('theme', 'hotpink-cyan');
}
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
document.documentElement.setAttribute('data-theme', currentTheme);

function searchBar() {
    // Declare variables
    const warning = document.getElementsByClassName("warning")[0];
    var filter, a, i, txtValue;
    const input = document.getElementById('search1');
    const ul = document.getElementById("searchGames");
    const li = ul.getElementsByTagName('li');
    filter = input.value.toUpperCase();
  
    // Loop through all list items, and hide those who don't match the search query
    const searchRegex = new RegExp(filter, 'i');

    const liArray = Array.from(li);
    liArray.forEach((item) => {
      const a = item.getElementsByTagName("a")[0];
      if (a) {
        const txtValue = a.textContent || a.innerText;
        if (searchRegex.test(txtValue)) {
          item.style.display = "";
          ul.style.display = "block";
          warning.innerHTML = '';
        } else {
          item.style.display = "none";
        }
      }
    });
    
    }


    function activateCHost() {

      if (is1Check == 0) {
        is1Check = 1;
        localStorage.setItem("is1Check", JSON.stringify(is1Check));
      } else {
      is1Check = 0;
      localStorage.setItem("is1Check", JSON.stringify(is1Check));
    }
    
    console.log(is1Check);
    }


    var coll = document.getElementsByClassName("collapsible-theme");
    var FL113;
    
    for (FL113 = 0; FL113 < coll.length; FL113++) {
      coll[FL113].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    function buttonLoad() {
      let isCheckdata = localStorage.getItem("isCheck");
      isCheck = JSON.parse(isCheckdata);
      if (isCheck == 1) {
      document.getElementById("swapSet").checked = true;
      }
  }
  buttonLoad();
function button1Load() {
  let is1Checkdata = localStorage.getItem("is1Check");
  is1Check = JSON.parse(is1Checkdata);
  if (is1Check == 1) {
    document.getElementById("swapSet1").checked = true;
  }
}
button1Load();
let useCust = false;

function getCustInput() {
  
  if (is1Check == 1) {
    let custInput = document.getElementById("customHost").value;
    useCust = true;
    localStorage.setItem("custHost", JSON.stringify(custInput));
    localStorage.setItem("useCust", JSON.stringify(useCust));

  }
  if (is1Check == 0) {
    useCust = false;
    localStorage.setItem("useCust", JSON.stringify(useCust));
  }
 }

 function buttonProvid() {
  let isCheckdata = localStorage.getItem("isCheck");
  let isCheck = JSON.parse(isCheckdata);
 
  if (isCheck == 0) {
      isCheck = 1;
  } else {
  isCheck = 0;
  }
  localStorage.setItem("isCheck", JSON.stringify(isCheck));
}

function netPlay() {
  let isNetdata = localStorage.getItem("isNet");
  let isNet = JSON.parse(isNetdata);
 
  if (isNet == 0) {
      isNet = 1;
  } else {
  isNet = 0;
  }
  localStorage.setItem("isNet", JSON.stringify(isNet));
  console.log(isNet);
}

let doGitHack = 0;
let gitHackDat = localStorage.getItem("doGitHack");
doGitHack = JSON.parse(gitHackDat);

function gitHack() {
  console.log("real")
  doGitHack = localStorage.getItem("doGitHack");
  if (doGitHack == 1) {
    doGitHack = 0;
    console.log("swapped1");
  } else {
    doGitHack = 1;
    console.log("Swapped");
  }
  localStorage.setItem("doGitHack", JSON.stringify(doGitHack));
}

function buttonLoad2() {
  let isNetdata = localStorage.getItem("isNet");
  isNet = JSON.parse(isNetdata);
  if (isNet == 1) {
  document.getElementById("swapNet").checked = true;
  }
}
buttonLoad2();

function buttonLoad3() {
  let isDoGitHackData = localStorage.getItem("doGitHack");
  doGitHack = JSON.parse(isDoGitHackData);
  if (doGitHack == 1) {
  document.getElementById("swapHack").checked = true;
  }
}
buttonLoad3();