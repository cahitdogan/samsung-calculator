// Keyboard input control
const operationScreen = document.querySelector("input[type='text']");

operationScreen.addEventListener("input", function() {
    operationScreen.value = operationScreen.value.replace(/[^0-9+\-×÷()%.,]/g, "");
});