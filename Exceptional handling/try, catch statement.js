var inputField = document.getElementById('myInput')
inputField.addEventListener("keypress" , function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        const inputValue = inputField.value;
        inputField.value = "";
        try {
            if(isNaN(inputValue)) {
                throw inputValue;
            }
            else {
                let num = document.getElementById('entered');
                num.innerHTML = `You entered ${inputValue}`;
            }
        } catch (error) {
            let valid = document.getElementById('entered');
            valid.innerHTML = `You entered (${error}) please enter a integer number`;
        }
    }
});