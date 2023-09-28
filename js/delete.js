const deleteButton = document.querySelector("#delete");
let deleteButtonState = false;

/*set state of the delete button. the button is inactive when the input text field is empty
and active when the input field is not empty*/
operationScreen.addEventListener("input", function() {
    /*.value property returns "" when the input has not any text.
     "this" blinds to listening object when using in a event handler*/
     if ((this.value !== "") && (deleteButtonState === false)) { 
        deleteButton.classList.add("active"); // Q: why not work? A:  
        deleteButton.style.backgroundImage = "url(images/delete-active.svg)";
        deleteButtonState = true;
    } else if ((this.value === "") && (deleteButtonState === true)) { 
        deleteButton.classList.remove("active");
        deleteButton.style.backgroundImage = "url(images/delete.svg)";
        deleteButtonState = false;
    }
}); 

/*behaviours of the delete button*/
deleteButton.addEventListener("click", function() {
        navigator.vibrate(50);

    let caretPosition = operationScreen.selectionStart; //returns position of the caret and positions of selections

    if ((operationScreen.selectionStart - operationScreen.selectionEnd) === 0) { //delete and focus functions for the caret
        if (caretPosition > 0) {
            operationScreen.value = operationScreen.value.substring(0, caretPosition - 1) +
                                    operationScreen.value.substring(caretPosition, 200);
            operationScreen.setSelectionRange(caretPosition - 1, caretPosition - 1);
            operationScreen.focus();
        } else if (caretPosition === 0) { 
            operationScreen.setSelectionRange(0, 0);
            operationScreen.focus();
        }
    } else { //delete and focus functions for the selection
        operationScreen.value = operationScreen.value.substring(0, operationScreen.selectionStart) +
                                operationScreen.value.substring(operationScreen.selectionEnd, operationScreen.value.lenght);
        operationScreen.setSelectionRange(caretPosition, caretPosition);
        operationScreen.focus();
    }

    if ((operationScreen.value === "") && (deleteButtonState === true)) { 
        deleteButton.classList.remove("active");
        deleteButton.style.backgroundImage = "url(images/delete.svg)";
        deleteButtonState = false;
    }
});
