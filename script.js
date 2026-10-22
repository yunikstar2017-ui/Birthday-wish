const pins = document.querySelectorAll(".pin");


// CHECK LOGIN STATUS WHEN PAGE LOADS
window.addEventListener("DOMContentLoaded", () => {

    const unlocked = sessionStorage.getItem("birthdayUnlocked");

    if (unlocked === "true") {

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("homePage").style.display = "flex";

    }

});


// AUTO MOVE TO NEXT PIN BOX

pins.forEach((pin, index) => {

    pin.addEventListener("input", () => {

        pin.value = pin.value.replace(/\D/g, "");

        if (pin.value && index < pins.length - 1) {

            pins[index + 1].focus();

        }

    });


    pin.addEventListener("keydown", (event) => {

        if (
            event.key === "Backspace" &&
            pin.value === "" &&
            index > 0
        ) {

            pins[index - 1].focus();

        }


        if (event.key === "Enter") {

            checkPin();

        }

    });

});


function checkPin() {

    let enteredPin = "";

    pins.forEach(pin => {

        enteredPin += pin.value;

    });


    const correctPin = "0919";


    const loginBox =
        document.querySelector(".login-box");

    const error =
        document.getElementById("errorMessage");


    if (enteredPin === correctPin) {

        // REMEMBER LOGIN FOR THIS TAB SESSION
        sessionStorage.setItem("birthdayUnlocked", "true");


        error.style.color = "#3c9b62";

        error.innerText =
            "Correct ❤️ Opening your surprise...";


        setTimeout(() => {

            document.getElementById("loginPage")
                .style.display = "none";

            document.getElementById("homePage")
                .style.display = "flex";

        }, 700);

    }

    else {

        error.style.color = "#d9365c";

        error.innerText =
            "Hmm... that's not our secret code 😏";


        loginBox.classList.add("shake");


        setTimeout(() => {

            loginBox.classList.remove("shake");

        }, 400);


        pins.forEach(pin => pin.value = "");

        pins[0].focus();

    }

}
const memories = [

    {
        image: "images/memory1.jpg",
        title: "Where It All Started ❤️",
        text: "One of the moments I will always keep close to my heart."
    },

    {
        image: "images/memory2.jpg",
        title: "One of My Favorite Days 🥰",
        text: "I remember looking at you and realizing how lucky I am to have you."
    },

    {
        image: "images/memory3.jpg",
        title: "That Smile ❤️",
        text: "I could probably look at this picture forever."
    },

    {
        image: "images/memory4.jpg",
        title: "Us Being Us 😂",
        text: "Some of my favorite memories are the random and silly ones with you."
    },

    {
        image: "images/memory5.jpg",
        title: "More Memories To Come 💕",
        text: "This is only a small part of our story. I can't wait for everything still ahead of us."
    }

];


let currentMemory = 0;


const image = document.getElementById("memoryImage");

const title = document.getElementById("memoryTitle");

const text = document.getElementById("memoryText");

const number = document.getElementById("memoryNumber");

const dotsContainer = document.getElementById("memoryDots");


function showMemory(index) {

    const card = document.querySelector(".memory-card");


    card.classList.add("memory-changing");


    setTimeout(() => {

        image.src = memories[index].image;

        title.innerText = memories[index].title;

        text.innerText = memories[index].text;

        number.innerText =
            `Memory ${index + 1} of ${memories.length}`;


        createDots();


        card.classList.remove("memory-changing");

    }, 250);

}


function nextMemory() {

    currentMemory++;

    if (currentMemory >= memories.length) {

        currentMemory = 0;

    }

    showMemory(currentMemory);

}


function previousMemory() {

    currentMemory--;

    if (currentMemory < 0) {

        currentMemory = memories.length - 1;

    }

    showMemory(currentMemory);

}


function createDots() {

    dotsContainer.innerHTML = "";


    memories.forEach((memory, index) => {

        const dot = document.createElement("span");

        dot.classList.add("memory-dot");


        if (index === currentMemory) {

            dot.classList.add("active-dot");

        }


        dot.onclick = () => {

            currentMemory = index;

            showMemory(currentMemory);

        };


        dotsContainer.appendChild(dot);

    });

}


createDots();

showMemory(currentMemory);

const reasons = [

    "You have one of the kindest hearts I know.",

    "Your smile can completely change my day.",

    "You're stronger than you realize.",

    "You care deeply about the people around you.",

    "You're beautiful without even trying.",

    "You make ordinary moments feel special.",

    "Your laugh is one of my favorite sounds.",

    "You have dreams worth believing in.",

    "You always find ways to make people feel loved.",

    "You're incredibly thoughtful.",

    "You make the world around you warmer.",

    "You are capable of doing amazing things.",

    "You're cute even when you're annoyed 😂.",

    "You deserve every good thing coming your way.",

    "You make people feel comfortable being themselves.",

    "You're unique in ways you probably don't even notice.",

    "You have so much ahead of you.",

    "You continue growing into an amazing person.",

    "Your presence makes life better.",

    "You inspire me to become better too.",

    "There is nobody else exactly like you.",

    "And most importantly — you're you. ❤️"

];


let currentReason = 0;


function nextReason() {

    const text =
        document.getElementById("reasonText");

    const number =
        document.getElementById("reasonNumber");

    const progress =
        document.getElementById("reasonProgress");

    const heart =
        document.getElementById("reasonHeart");


    if (
        currentReason <
        reasons.length
    ) {

        text.innerText =
            reasons[currentReason];

        number.innerText =
            `Reason ${currentReason + 1}`;

        currentReason++;

        progress.innerText =
            `${currentReason} / ${reasons.length}`;


        heart.classList.remove(
            "heart-pop"
        );


        void heart.offsetWidth;


        heart.classList.add(
            "heart-pop"
        );

    }

    else {

        number.innerText =
            "All 22 ❤️";

        text.innerText =
            "Happy Birthday, beautiful. Never forget how special you are.";

        progress.innerText =
            "22 / 22";

    }

}