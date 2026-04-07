const countElement = document.getElementById("counter");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

let count = Number(localStorage.getItem('count')) || 0;
countElement.textContent = count;

incBtn.addEventListener("click" , function () {
    count++;
    countElement.textContent = count;
    localStorage.setItem('count', count);
});
decBtn.addEventListener("click" , function () {
    if (count > 0){
        count--;
        countElement.textContent = count;
        localStorage.setItem('count', count);
    }
});
resetBtn.addEventListener("click" , function () {
    count = 0;
    countElement.textContent = count;
    localStorage.setItem('count', count);
});