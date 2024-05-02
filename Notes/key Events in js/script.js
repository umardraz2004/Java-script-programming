const myBox = document.getElementById('box');
let increment  = 10;
let x = 0;
let y = 0;

document.addEventListener('keydown', event => {
    myBox.textContent = "😱";
    myBox.style.backgroundColor = "tomato";
    if(event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch(event.key) {
            case "ArrowUp": 
                y -= increment;
                break;
            case "ArrowDown": 
                y += increment;
                break;
            case "ArrowLeft": 
                x -= increment;
                break;
            case "ArrowRight": 
                x += increment;
                break;
        }
        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`
    }
});

document.addEventListener('keyup', event => {
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "lightBlue";
});