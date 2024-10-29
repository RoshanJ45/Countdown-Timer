const timeDisplay = document.getElementById('time');
const msDisplay = document.getElementById('ms');
const circle = document.querySelector('.circle div');
let totalTime = 10 * 60 * 1000;
let timeLeft = totalTime;
function updateTimer() {
const minutes = Math.floor(timeLeft / 60000);
const seconds = Math.floor((timeLeft % 60000) / 1000);
const milliseconds = timeLeft % 1000;
timeDisplay.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.<span class="milliseconds">${String(milliseconds).padStart(3, '0')}</span>`;
const percent = (totalTime - timeLeft) / totalTime;
circle.style.setProperty('--percent', percent);
if (timeLeft > 0) {
timeLeft -= 10;
setTimeout(updateTimer, 10);
}
}
updateTimer();
