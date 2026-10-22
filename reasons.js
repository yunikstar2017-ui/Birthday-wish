const reasons = [
    "You have one of the kindest hearts I know. ❤️",

    "Your smile can completely change my day. 😊",

    "You are stronger than you probably realize. 💪",

    "You care deeply about the people around you. 🌷",

    "You are beautiful inside and out. ✨",

    "You make ordinary moments feel special. 💕",

    "Your laugh is one of my favorite sounds. 😂",

    "You have dreams that are worth chasing. 🌙",

    "You always find ways to make the people you love feel cared for. 💗",

    "You are thoughtful in ways you probably don't even notice. 🥹",

    "You bring warmth wherever you go. ☀️",

    "You are capable of doing amazing things. 🌟",

    "You are somehow still cute even when you're annoyed. 😂❤️",

    "You deserve every good thing that comes your way. 🎁",

    "You make people feel comfortable being themselves. 🌸",

    "There are little things about you that make you completely unique. 💫",

    "You have so many beautiful experiences waiting for you. ✈️",

    "You keep growing into an even more amazing person. 🌱",

    "Your presence makes life better. 💕",

    "You inspire me to keep becoming a better person too. ❤️",

    "There is nobody else in this world exactly like you. 👑",

    "And the biggest reason of all — you are simply you, and that is more than enough. ❤️"
];

let currentReason = 0;

function nextReason() {
    const reasonText = document.getElementById("reasonText");
    const reasonNumber = document.getElementById("reasonNumber");
    const reasonProgress = document.getElementById("reasonProgress");
    const heart = document.getElementById("reasonHeart");
    const button = document.querySelector(".reason-button");

    if (currentReason < reasons.length) {

        reasonText.innerText = reasons[currentReason];

        reasonNumber.innerText =
            `Reason ${currentReason + 1}`;

        currentReason++;

        reasonProgress.innerText =
            `${currentReason} / ${reasons.length}`;

        // Restart heart animation
        heart.classList.remove("heart-pop");
        void heart.offsetWidth;
        heart.classList.add("heart-pop");


        // Change button text near the end
        if (currentReason === reasons.length) {
            button.innerText = "One More ❤️";
        }

    } else {

        reasonNumber.innerText = "All 22 ❤️";

        reasonText.innerText =
            "Happy 22nd Birthday, beautiful. Never forget how special you are. ❤️";

        reasonProgress.innerText = "22 / 22";

        button.innerText = "Start Again ↻";

        button.onclick = restartReasons;

        heart.innerText = "🎂";

        heart.classList.remove("heart-pop");
        void heart.offsetWidth;
        heart.classList.add("heart-pop");
    }
}


function restartReasons() {

    currentReason = 0;

    const reasonText = document.getElementById("reasonText");
    const reasonNumber = document.getElementById("reasonNumber");
    const reasonProgress = document.getElementById("reasonProgress");
    const heart = document.getElementById("reasonHeart");
    const button = document.querySelector(".reason-button");

    reasonNumber.innerText = "Ready?";

    reasonText.innerText =
        "Click below to reveal your first one.";

    reasonProgress.innerText = "0 / 22";

    heart.innerText = "💗";

    button.innerText = "Reveal One ❤️";

    button.onclick = nextReason;
}