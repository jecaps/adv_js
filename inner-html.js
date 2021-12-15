// innerHTML

console.log(firstParagraph.innerHTML); // .innerHTML is like .textContent that includes both texts and html elements

firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>"; // <strong></strong> is interpreted as html element with .innerHTML
