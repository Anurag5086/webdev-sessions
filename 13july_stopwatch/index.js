const stopwatch = document.getElementById("time");

const playbtn = document.getElementById("playbtn");
const pausebtn = document.getElementById("pausebtn");
const resetbtn = document.getElementById("resetbtn");

// pausebtn.addEventListener("click", stopStopwatch);
// resetbtn.addEventListener("click", resetStopwatch);

let startTime;
let elapsedTime = 0;
let stopWatchInterval;

const startStopwatch = () => {
  startTime = Date.now() - elapsedTime;
};

playbtn.addEventListener("click", startStopwatch);
