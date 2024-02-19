const head = document.querySelector(".head");
const buttonHeight = 50;
const buttonWidth = 150;
const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

function checkAnswer(answer) {
  if (answer === "yes") {
    document.querySelector(".head").textContent = "I Knew it 😂🤦🏽‍♂";
  }
}
const button = document.getElementById("button");

button.addEventListener("click", () => {
  button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + "px ";
  button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px ";
});
