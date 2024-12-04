let i = 0;
let txt = [ "F", "u", "l","l"," ",
  "S",
  "t",
  "a",
  "c",
  "k",
  " ",
  `<br>`,
  "D",
  "e",
  "v",
  "e",
  "l",
  "o",
  "p",
  "e",
  "r",
  ".",
];
let speed = 110;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("user-detail-name").style.color = "white";
    document.getElementById("demo1").innerHTML += txt[i];
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // reset the index when it reaches the end of the text
    i = 0;
    // clear the text
  //give the person time for reading whole text
    setTimeout(() => {
      document.getElementById("demo1").innerHTML = "";
      document.getElementById("user-detail-name").style.color = "#71e281";
      setTimeout(typeWriter, speed);
    }, 1000);    
    // make the recursive call
  }
}

var myNav = document.getElementById("nav-menu");
var myNav2 = document.getElementById("main");
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 15) {
    myNav.classList.add("nav-colored");
    myNav2.classList.add("nav-colored");
    // myNav.classList.remove("nav-transparent");
  } else {
    // myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    myNav2.classList.remove("nav-colored");
  }
};

GitHubCalendar(".calendar", "srjizhere", {
  responsive: true,
  global_stats: false,
  tooltips: true,
});

document.getElementById("resume-button-1").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1wLRO85Y3cXvrL9jNLuyZkg3qMsDtLsqa/view?usp=sharing"
  );
};

document.getElementById("resume-button-2").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1wLRO85Y3cXvrL9jNLuyZkg3qMsDtLsqa/view?usp=sharing"
  );
};

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.display = "block";
}
