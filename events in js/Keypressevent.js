//My first event Listener code by myself
const inputField = document.getElementById('myInput');  
inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const inputValue = inputField.value;
        console.log("Input stuff ", inputValue);
        inputField.value = "";
    }
});

function loadAgain(){
    location.reload();
}