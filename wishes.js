// ========================================
// EMAILJS SETTINGS
// ========================================

const PUBLIC_KEY = "6M4nGTlZkdsDyf5A0";
const SERVICE_ID = "Birthday_wishes";
const TEMPLATE_ID = "template_isaywg9";


// Start EmailJS
emailjs.init({
    publicKey: PUBLIC_KEY
});


// ========================================
// ELEMENTS
// ========================================

const wishForm =
    document.getElementById("wishForm");

const wishMessage =
    document.getElementById("wishMessage");

const wishCount =
    document.getElementById("wishCount");

const wishButton =
    document.getElementById("wishButton");

const wishSuccess =
    document.getElementById("wishSuccess");

const wishError =
    document.getElementById("wishError");


// ========================================
// CHARACTER COUNTER
// ========================================

wishMessage.addEventListener("input", () => {

    wishCount.innerText =
        wishMessage.value.length;

});


// ========================================
// SEND WISH
// ========================================

wishForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();

        const wish =
            wishMessage.value.trim();


        if (!wish) {

            wishError.innerText =
                "You have to make a wish first 👀";

            return;
        }


        wishError.innerText = "";

        wishButton.disabled = true;

        wishButton.innerText =
            "Sending your wish... ✨";


        try {

            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                wishForm
            );


            // Hide form
            wishForm.style.display =
                "none";


            // Show success message
            wishSuccess.style.display =
                "block";


            createWishConfetti();

        }

        catch (error) {

            console.error(
                "Wish failed:",
                error
            );


            wishError.innerText =
                "Hmm... your wish got lost for a second. Try again ❤️";


            wishButton.disabled = false;

            wishButton.innerText =
                "Send My Wish ✨";

        }

    }
);


// ========================================
// CONFETTI
// ========================================

function createWishConfetti() {

    const emojis = [
        "💗",
        "✨",
        "🎀",
        "🌸",
        "💖",
        "⭐"
    ];


    for (let i = 0; i < 35; i++) {

        const confetti =
            document.createElement("span");


        confetti.classList.add(
            "wish-confetti"
        );


        confetti.innerText =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.animationDuration =
            2 +
            Math.random() * 3 +
            "s";


        confetti.style.fontSize =
            14 +
            Math.random() * 20 +
            "px";


        document.body.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}