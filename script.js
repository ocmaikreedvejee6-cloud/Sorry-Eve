const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const buttonArea = document.querySelector(".button-area");

let yesSize = 17;
let noClicks = 0;


// =========================
// YES BUTTON
// =========================

yesBtn.addEventListener("click", () => {

    response.innerHTML =
        "YAAAAAY! 🥹💗<br>Thank you for forgiving me!";

    yesBtn.innerHTML = "Thank you! 💗";

    noBtn.style.display = "none";

});


// =========================
// NO BUTTON
// =========================

noBtn.addEventListener("click", (event) => {

    event.preventDefault();

    noClicks++;

    // Make YES bigger
    yesSize += 4;

    yesBtn.style.fontSize = yesSize + "px";

    yesBtn.style.padding =
        `${12 + noClicks}px ${22 + noClicks * 2}px`;


    // Change NO text
    const messages = [
        "Are you sure? 🥺",
        "Really? 😭",
        "Pleaseee 🥹",
        "Think again 😭",
        "One more chance? 🥺",
        "I'll do better 😭",
        "Pretty please? 💗",
        "Don't say nooo 😭"
    ];

    noBtn.innerText =
        messages[Math.min(noClicks - 1, messages.length - 1)];


    // Move the NO button
    moveNoButton();

});


// =========================
// MAKE NO BUTTON ESCAPE
// =========================

function moveNoButton() {

    const areaWidth = buttonArea.clientWidth;
    const areaHeight = buttonArea.clientHeight;

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Keep button inside the area
    const padding = 10;

    const maxX =
        areaWidth - buttonWidth - padding;

    const maxY =
        areaHeight - buttonHeight - padding;

    const minX = padding;
    const minY = padding;

    const randomX =
        Math.random() * (maxX - minX) + minX;

    const randomY =
        Math.random() * (maxY - minY) + minY;


    noBtn.style.left =
        randomX + buttonWidth / 2 + "px";

    noBtn.style.top =
        randomY + buttonHeight / 2 + "px";

    noBtn.style.transform =
        "translate(-50%, -50%)";

}


// =========================
// MOBILE TOUCH
// =========================

noBtn.addEventListener("touchstart", (event) => {

    event.preventDefault();

    moveNoButton();

});
