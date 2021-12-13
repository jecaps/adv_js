// document.body.children[1].children[0].href = "https:/google.com"; // the href attribute of a (anchor element) child of p (paragraph element) which is a child of the body element

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-link"); // can select elements in different ways (element tag, classes, or id)
anchorElement.href = "https://academind.com";

// Add an element
// 1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google!";

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);
