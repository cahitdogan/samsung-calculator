// Keyboard input control
const operationScreen = document.querySelector("#operation-screen");

operationScreen.addEventListener("input", function() {
    operationScreen.value = operationScreen.value.replace(/[^0-9+\-×÷()%.,]/g, "");
});

const deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("onMouseDown", function(event) {
    event.preventDefault();
})