
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function goofyFunnyFeelingDotOrg() {
    let maths = getRandomInt(10);
    console.log(maths);
    if (maths == 0) {
        alert("Bro got 0");
        document.getElementById("showN").style.display = "none";
    }
    if (maths == 1) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.getElementById("showN").style.display = "block";
    }
    if (maths == 2) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById("showN").style.display = "block";
    }
    if (maths == 3) {
        document.documentElement.setAttribute('data-theme', 'pink');
        localStorage.setItem('theme', 'pink');
        document.getElementById("showN").style.display = "none";
    }
    if (maths == 4) {
        document.documentElement.setAttribute('data-theme', 'green');
        localStorage.setItem('theme', 'green');
        document.getElementById("showN").style.display = "block";
    }
    if (maths == 5) {
        document.documentElement.setAttribute('data-theme', 'dark-green');
        localStorage.setItem('theme', 'dark-green');
        document.getElementById("showN").style.display = "none";
    }
    if (maths == 6) {
        document.documentElement.setAttribute('data-theme', 'black-white');
        localStorage.setItem('theme', 'black-white');
        document.getElementById("showN").style.display = "block";
    }
    if (maths == 7) {
        document.documentElement.setAttribute('data-theme', 'blue-pink');
        localStorage.setItem('theme', 'blue-pink');
        document.getElementById("showN").style.display = "none";
    }
    if (maths == 8) {
        document.documentElement.setAttribute('data-theme', 'charcoal-yellow');
        localStorage.setItem('theme', 'charcoal-yellow');
        document.getElementById("showN").style.display = "block";
    }
    if (maths == 9) {
        document.documentElement.setAttribute('data-theme', 'hotpink-cyan');
        localStorage.setItem('theme', 'hotpink-cyan');
        document.getElementById("showN").style.display = "none";
    }
}
  