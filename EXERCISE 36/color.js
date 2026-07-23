// Select elements
const colorPicker = document.getElementById("colorPicker");
const previewBox = document.getElementById("previewBox");
const colorHistory = document.getElementById("colorHistory");
const clearButton = document.getElementById("clearHistory");

// Update preview and add to history
colorPicker.addEventListener("input", function () {
    const selectedColor = colorPicker.value;

    // Change preview background
    previewBox.style.backgroundColor = selectedColor;
    previewBox.textContent = selectedColor;

    // Create history item
    const listItem = document.createElement("li");
    listItem.textContent = selectedColor;
    listItem.style.backgroundColor = selectedColor;

    // Add to history
    colorHistory.appendChild(listItem);
});

// Clear history
clearButton.addEventListener("click", function () {
    colorHistory.innerHTML = "";
});