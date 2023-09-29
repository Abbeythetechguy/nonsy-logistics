const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobMenuClose = document.getElementById("mobMenuClose");
const hamburgerMenuElem = document.getElementById("hamburgerMenu");


hamburgerBtn.addEventListener("click", showMobileMenu);
mobMenuClose.addEventListener("click", closeMobileMenu);

function showMobileMenu() {
  hamburgerMenuElem.classList.add("open")
}
function closeMobileMenu() {
    hamburgerMenuElem.classList.remove("open")
}

let randomNum = Math.random() * 50;
randomNum = Math.floor(randomNum);

let dummyText = [
  "Fast, reliable, and honestly everything I need in a logi company.",
  "They seem to care about my packages more than I do.",
  "Best Logistics Company ever!!",
  "Never have to worry about the safety of my goods anymore",
  "Better than GIG Logistics #GIGOUT",
  "Ronaldo is the Real GOAT #AbbeySaysSo",
];
let randomText = Math.random() * 5;
randomText = Math.floor(randomText) + 1;

// to hide the loader
function hideloader() {
  document.getElementById("loader").style.display = "none";
}

const commentApiUrl = `https://dummyjson.com/comments/${randomNum}`;

async function getApi(url) {
  try {
    const response = await fetch(url);

    let commentData = await response.json();
    if (response) {
      hideloader();
      document.getElementById(
        "randomComment"
      ).innerText = `${commentData.body}. ${dummyText[randomText]}`;
      document.getElementById("randUsername").innerText = `${commentData.user.username}`;
    }
  } catch (err) {
    console.log(err);
  }
}

getApi(commentApiUrl);