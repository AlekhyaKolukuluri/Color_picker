let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let selectedColorHexCodeElement = document.getElementById("selectedColorHexCode");

function changeBgToGreyAndUpdateText() {
    colorPickerContainerElement.style.backgroundColor = "#FFB6C1";
    selectedColorHexCodeElement.textContent = "#FFB6C1";
}

function changeBgToGreenAndUpdateText() {
    colorPickerContainerElement.style.backgroundColor = "#008080";
    selectedColorHexCodeElement.textContent = "#008080";
}

function changeBgToBlueAndUpdateText() {
    colorPickerContainerElement.style.backgroundColor = "#40E0D0";
    selectedColorHexCodeElement.textContent = "#40E0D0";
}

function changeBgToPurpleAndUpdateText() {
    colorPickerContainerElement.style.backgroundColor = "#808080";
    selectedColorHexCodeElement.textContent = "#808080";
}
