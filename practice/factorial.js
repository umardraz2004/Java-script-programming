function getValue() {
    let num = document.getElementById('myInput');
    facCal(num.value);
}

function facCal(val) {
    let fac = 1;
    for (let i = val; i != 0; i--) {
        fac = fac * i;
    }
    console.log(fac);
    document.getElementById('display').innerHTML = 'Factorial of number ' + val + ' is ' + fac;
    document.getElementById('reload').innerHTML = '<button>Reset</button>';
}

function loadAgain() {
    location.reload();
}