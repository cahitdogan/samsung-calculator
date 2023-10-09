const deleteButton = document.querySelector("#delete");
let deleteButtonState = false;

/*set state of the delete button. the button is inactive when the input text field is empty
and active when the input field is not empty*/
operationScreen.addEventListener("input", function() {
    /*.value property returns "" when the input has not any text.
     "this" blinds to listening object when using in a event handler*/
     if ((this.value !== "") && (deleteButtonState === false)) { 
        deleteButton.classList.add("active");
        deleteButton.style.opacity = "1";
        deleteButton.style.cursor = "pointer";
        deleteButtonState = true;
    } else if ((this.value === "") && (deleteButtonState === true)) { 
        deleteButton.classList.remove("active");
        deleteButton.style.opacity = "0.4";
        deleteButton.style.cursor = "default";
        deleteButtonState = false;
    }
}); 


/*behaviours of the delete button*/
deleteButton.addEventListener("click", function() { //this works for one charatcher or selection delete. you need to find another solution so that it continues deleting even when you press and hold it.
    if (deleteButtonState === true) {

        navigator.vibrate(65);
        
        let caretPosition = operationScreen.selectionStart; //returns position of the caret and start position of the selection

        if ((operationScreen.selectionStart - operationScreen.selectionEnd) === 0) { //delete and focus functions for the caret
            if (caretPosition > 0) {
                operationScreen.value = operationScreen.value.substring(0, caretPosition - 1) +
                                        operationScreen.value.substring(caretPosition, 200);
                operationScreen.setSelectionRange(caretPosition - 1, caretPosition - 1);
                operationScreen.focus();
            } else if (caretPosition === 0) { 
                operationScreen.focus();
            }
        } else { //delete and focus functions for the selection
            operationScreen.value = operationScreen.value.substring(0, operationScreen.selectionStart) +
                                    operationScreen.value.substring(operationScreen.selectionEnd, operationScreen.value.lenght);
            operationScreen.setSelectionRange(caretPosition, caretPosition);
            operationScreen.focus();
        }

        if (operationScreen.value === "") { 
            deleteButton.classList.remove("active");
            deleteButton.style.opacity = "0.4";
            deleteButton.style.cursor = "default";
            deleteButtonState = false;
        }
    }
});


//click eventinin değiştirilmesi haricinde bu kod üzerinde değiştirilmesi gereken başka bir şey yok.