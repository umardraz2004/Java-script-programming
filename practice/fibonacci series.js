var container = document.getElementById("fibonacci-container");
var printBtn = document.getElementById('print-btn');
var deleteBtn = document.getElementById('del-btn');
var sequenceLimit = document.getElementById('seq-lim');

printBtn.addEventListener('click' ,function(event) {
    container.style.display = 'block';
    container.style.whiteSpace = 'pre-line';
    if(sequenceLimit.value == '' || sequenceLimit.value == 0 || isNaN(sequenceLimit.value)) {
        container.innerHTML = `Enter a valid input start form 1 to so on`;
        sequenceLimit.value = "";
    } else {
        let a = 0, b = 1, sum, fibSequence = [];
        fibSequence.push(a);
        fibSequence.push(b);
        for (let i = 2; i < sequenceLimit.value ; i++) {
            sum = a + b;
            fibSequence.push(sum);
            a = b;
            b = sum;
        }
        if(sequenceLimit.value == 1) {
        container.innerHTML = `Fibonacci series:\n\n${fibSequence[0]}`;
        sequenceLimit.value = "";
        } else {
            container.innerHTML = `Fibonacci series:\n\n${fibSequence}`;
            sequenceLimit.value = "";
        }
    }
});

deleteBtn.addEventListener('click', function(event) {
    container.style.display = 'none';
});


