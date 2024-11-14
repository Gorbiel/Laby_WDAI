let seconds = 0;
let interval = null;

function updateDisplay() {
    let minutes = Math.floor(seconds / 60);
    let displaySeconds = seconds % 60;
    if (minutes > 0) {
        document.getElementById('display').textContent = `${minutes}min ${displaySeconds}s`;
    } else {
        document.getElementById('display').textContent = `${displaySeconds}s`;
    }
}

function startStopwatch() {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(interval);
    interval = null;
}

function resetStopwatch() {
    stopStopwatch();
    seconds = 0;
    updateDisplay();
}