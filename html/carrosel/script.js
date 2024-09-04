let count = 1;
let intervalId = setInterval(next, 2000);

document.getElementById('radio1').checked = true;

function next() {
    count++;
    if (count > 5) {
        count = 1;
    }
    document.getElementById('radio' + count).checked = true;
}

for (let i = 1; i <= 5; i++) {
    document.getElementById('radio' + i).addEventListener('click', () => {
        clearInterval(intervalId);
    });
}