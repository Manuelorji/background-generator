const h2 = document.querySelector("h2");
const body = document.querySelector("body");
const firstGradientColor = document.getElementById("color-1");
const secondGradientColor = document.getElementById("color-2");
const copyBtn = document.getElementById("copy-btn");

function setGradient() {
  copyBtn.style.display = "block";
  body.style.background =
    "linear-gradient(to right," +
    firstGradientColor.value +
    "," +
    secondGradientColor.value +
    ")";

  h2.textContent = body.style.background;
}

firstGradientColor.addEventListener("input", setGradient);
secondGradientColor.addEventListener("input", setGradient);

//copy current linear gradient color

function copyTextHandler() {
  /* Get the text content */
  const copyText = h2.textContent;

  /* Add text to clipboard*/
  navigator.clipboard.writeText(copyText);

  /* Alert the copied text */
  alert("Copied: " + copyText);
}

copyBtn.addEventListener("click", copyTextHandler);
