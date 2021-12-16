const spanElement = document.getElementById("remaining-chars");

// spanElement.className = "warning"; // overwrites existing classes in the HTML document; add existing class after a space if it shouldn't be overwritten
spanElement.classList.add("warning"); // to add class name without overwriting the existing class name
spanElement.classList.remove("warning"); // to remove a specific class name
