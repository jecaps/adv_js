// document.body.children[1].children[0].href = "https:/google.com"; // the href attribute of a (anchor element) child of p (paragraph element) which is a child of the body element

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-id"); // can select elements in different ways (element tag, classes, or id)
anchorElement.href = "https://academind.com";
