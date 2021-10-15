// 1. Create `textarea` variable
const textarea = document.querySelector("tweet");
// 2. Create `counter` variable
const counter = document.querySelector("counter");
// 3. Create character `limit` variable
const limit = document.querySelector("maxlength");
// 4. Create event listener to update `counter`


function getCount (textArea) {
    return textArea.value.length;
  }
  function updateCount () {
    counter.textContent = getCount(this);
  }
  tweet.addEventListener("input", updateCount);
  

function countWords() {
  const value = textArea.value.trim();
  if (!value) return 0;
  return value.split(/\s+/).length;
}

function countChars() {
  return textArea.value.length;
}

function updateCount() {
  
  const numChars = countChars();

  count.textContent = `
    You've written ${numWords.toString(10)} words
    and ${numChars.toString(10)} characters.
  `;
}

updateCount();

textArea.addEventListener('input', updateCount);