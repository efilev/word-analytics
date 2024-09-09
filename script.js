const textareaEl = document.querySelector(".textarea");
const charsNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  // input validation
  if (textareaEl.value.includes("<script>")) {
    alert("You cannot use <script> in your text");
    // replace with empty text
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  // determine new numbers
  const numChars = textareaEl.value.length;
  const twitterChars = 280 - numChars;
  const facebookChars = 2200 - numChars;

  // split string at space
  let numWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    numWords = 0;
  }

  // set new numbers
  charsNumberEl.textContent = numChars;
  twitterNumberEl.textContent = twitterChars;
  facebookNumberEl.textContent = facebookChars;
  wordsNumberEl.textContent = numWords;
};

textareaEl.addEventListener("input", inputHandler);
