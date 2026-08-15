/* =================================
   TYPING ANIMATION
================================= */

const words = [
    "Python Lover 🐍",
    "Coder 💻",
    "Web Developer 🌐",
    "Computer Enthusiast 🚀"
];

let wordIndex = 0;
let letterIndex = 0;

const typingElement =
    document.getElementById("typing");


function typeEffect() {

    if (letterIndex < words[wordIndex].length) {

        typingElement.textContent +=
            words[wordIndex].charAt(letterIndex);

        letterIndex++;

        setTimeout(typeEffect, 100);

    }

    else {

        setTimeout(deleteEffect, 1500);

    }

}


function deleteEffect() {

    if (letterIndex > 0) {

        typingElement.textContent =
            words[wordIndex].substring(
                0,
                letterIndex - 1
            );

        letterIndex--;

        setTimeout(deleteEffect, 50);

    }

    else {

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

        setTimeout(typeEffect, 300);

    }

}


typeEffect();



/* =================================
   DARK MODE
================================= */

const darkButton =
    document.getElementById("darkMode");


darkButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            darkButton.textContent = "☀️";

        }

        else {

            darkButton.textContent = "🌙";

        }

    }
);



/* =================================
   BACK TO TOP
================================= */

const topButton =
    document.getElementById("topButton");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 400) {

            topButton.style.display =
                "block";

        }

        else {

            topButton.style.display =
                "none";

        }

    }
);


topButton.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(
        function (element) {

            const windowHeight =
                window.innerHeight;

            const elementTop =
                element.getBoundingClientRect().top;

            if (
                elementTop <
                windowHeight - 100
            ) {

                element.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* =================================
   GAME BUTTON
================================= */

function gameMessage() {

    alert(
        "🐍 Your Snake Game can be connected here! " +
        "When you have the game file, we can add it to this portfolio."
    );

}



/* =================================
   WELCOME MESSAGE
================================= */

console.log(
    "🚀 Welcome to Anik Singh's Portfolio!"
);