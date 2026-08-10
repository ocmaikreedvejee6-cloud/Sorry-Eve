// =========================
// GET ELEMENTS
// =========================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const response = document.getElementById("response");

const buttonArea =
    document.querySelector(".button-area");

const letters =
    document.getElementById("letters");


// =========================
// VARIABLES
// =========================

let yesSize = 17;

let noClicks = 0;


// =========================
// YES BUTTON
// =========================

yesBtn.addEventListener("click", () => {

    // Show response if it exists
    if (response) {

        response.innerHTML =
            "YAAAAAY! 🥹💗<br>" +
            "Thank you for forgiving me!";

    }


    // Change YES button
    yesBtn.innerHTML =
        "Thank you! 💗";


    // Hide NO
    noBtn.style.display =
        "none";


    // Show letters
    letters.style.display =
        "block";


    // Scroll to letters
    setTimeout(() => {

        letters.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 300);

});


// =========================
// NO BUTTON
// =========================

noBtn.addEventListener("click", (event) => {

    event.preventDefault();

    noClicks++;


    // Make YES bigger

    yesSize += 4;

    yesBtn.style.fontSize =
        yesSize + "px";


    yesBtn.style.padding =
        `${12 + noClicks}px ${22 + noClicks * 2}px`;


    // NO messages

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
        messages[
            Math.min(
                noClicks - 1,
                messages.length - 1
            )
        ];


    // Move NO

    moveNoButton();

});


// =========================
// MAKE NO ESCAPE
// =========================

function moveNoButton() {

    const areaWidth =
        buttonArea.clientWidth;

    const areaHeight =
        buttonArea.clientHeight;


    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    const padding = 10;


    const maxX =
        Math.max(
            padding,
            areaWidth -
            buttonWidth -
            padding
        );


    const maxY =
        Math.max(
            padding,
            areaHeight -
            buttonHeight -
            padding
        );


    const randomX =
        Math.random() *
        (maxX - padding) +
        padding;


    const randomY =
        Math.random() *
        (maxY - padding) +
        padding;


    noBtn.style.left =
        randomX +
        buttonWidth / 2 +
        "px";


    noBtn.style.top =
        randomY +
        buttonHeight / 2 +
        "px";


    noBtn.style.transform =
        "translate(-50%, -50%)";

}


// =========================
// MOBILE TOUCH
// =========================

noBtn.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        moveNoButton();

    },
    { passive: false }
);


// =========================
// LETTERS
// =========================

const envelopes =
    document.querySelectorAll(".envelope");


const letterModal =
    document.getElementById("letterModal");


const letterMessage =
    document.getElementById("letterMessage");


const closeLetter =
    document.getElementById("closeLetter");


// =========================
// OPEN LETTER
// =========================

envelopes.forEach((envelope) => {

    envelope.addEventListener("click", () => {

        const message =
            envelope.dataset.message;


        letterMessage.innerText =
            message;


        letterModal.classList.add("show");

    });

});


// =========================
// CLOSE LETTER
// =========================

closeLetter.addEventListener("click", () => {

    letterModal.classList.remove("show");

});


// =========================
// CLOSE LETTER OUTSIDE
// =========================

letterModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            letterModal
        ) {

            letterModal.classList.remove(
                "show"
            );

        }

    }
);


// =========================
// SUNFLOWER
// =========================

const sunflowerBtn =
    document.getElementById(
        "sunflowerBtn"
    );


const sunflowerModal =
    document.getElementById(
        "sunflowerModal"
    );


const closeSunflower =
    document.getElementById(
        "closeSunflower"
    );


// =========================
// OPEN SUNFLOWER
// =========================

sunflowerBtn.addEventListener(
    "click",
    () => {

        sunflowerModal.classList.add(
            "show"
        );

    }
);


// =========================
// CLOSE SUNFLOWER
// =========================

closeSunflower.addEventListener(
    "click",
    () => {

        sunflowerModal.classList.remove(
            "show"
        );

    }
);


// =========================
// CLOSE SUNFLOWER OUTSIDE
// =========================

sunflowerModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            sunflowerModal
        ) {

            sunflowerModal.classList.remove(
                "show"
            );

        }

    }
);
