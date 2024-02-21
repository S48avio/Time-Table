function profilecard(button, textbox) {
    if (button.innerText === "BDA") {
        textbox.style.display = textbox.style.display === 'none' ? 'flex' : 'none';
    }
}

const mButtons = document.querySelectorAll("#m");
const mButton = document.querySelectorAll("#t");
const mButto = document.querySelectorAll("#w");
const mButt = document.querySelectorAll("#th");
const mBut = document.querySelectorAll("#f");
const textbox1 = document.querySelector(".BDA");
const back = document.querySelector("#back");

back.addEventListener("click", () => {
    textbox1.style.display = 'none'; // Corrected the value to 'none'
});

mButtons.forEach((button) => {
    button.addEventListener("click", () => {
        profilecard(button, textbox1); // Pass textbox1 as an argument
    });
});
mButton.forEach((button) => {
    button.addEventListener("click", () => {
        profilecard(button, textbox1); // Pass textbox1 as an argument
    });
});
mButto.forEach((button) => {
    button.addEventListener("click", () => {
        profilecard(button, textbox1); // Pass textbox1 as an argument
    });
});
mButt.forEach((button) => {
    button.addEventListener("click", () => {
        profilecard(button, textbox1); // Pass textbox1 as an argument
    });
});
mBut.forEach((button) => {
    button.addEventListener("click", () => {
        profilecard(button, textbox1); // Pass textbox1 as an argument
    });
});