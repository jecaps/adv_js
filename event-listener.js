let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
  paragraphElement.textContent = "Clicked!";
  console.log("Paragraph clicked!");
  console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  // let enteredText = inputElement.value;
  let enteredText = event.target.value; // shows every charachter added
  // let enteredText = event.data; // shows only the character added => This is different from the two methods above
  console.log(enteredText);
  console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
