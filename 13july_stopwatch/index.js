const stopwatch = document.getElementById("time");

const playbtn = document.getElementById("playbtn");
const pausebtn = document.getElementById("pausebtn");
const resetbtn = document.getElementById("resetbtn");

let startTime;
let elapsedTime = 0;
let stopWatchInterval;

const updateTime = (elapsedTime) => {
  let hh = elapsedTime / 3600000;
  let hrs = Math.floor(hh);

  let hhstr;
  if (hrs < 10) {
    hhstr = `0${hrs.toString()}`;
  } else {
    hhstr = `${hrs.toString()}`;
  }

  let mm = (hh - hrs) * 60;
  let mins = Math.floor(mm);

  let mmstr;
  if (mins < 10) {
    mmstr = `0${mins.toString()}`;
  } else {
    mmstr = `${mins.toString()}`;
  }

  let ss = (mm - mins) * 60;
  let secs = Math.floor(ss);

  let ssstr;
  if (secs < 10) {
    ssstr = `0${secs.toString()}`;
  } else {
    ssstr = `${secs.toString()}`;
  }

  let ms = (ss - secs) * 1000;
  let milisec = Math.floor(ms);

  let milistr;
  if (milisec < 10) {
    milistr = `0${milisec.toString()}`;
  } else {
    milistr = `${milisec.toString()}`;
  }

  stopwatch.innerText = `${hhstr}:${mmstr}:${ssstr}:${milistr}`;
};

const startStopwatch = () => {
  startTime = Date.now() - elapsedTime;
  playbtn.style.display = "none";
  pausebtn.style.display = "block";

  stopWatchInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;

    updateTime(elapsedTime);
  }, 1);
};

const stopStopwatch = () => {
  clearInterval(stopWatchInterval);
  playbtn.style.display = "block";
  pausebtn.style.display = "none";
};

const resetStopwatch = () => {
  clearInterval(stopWatchInterval);
  stopwatch.innerText = "00:00:00:000";
  elapsedTime = 0;
  playbtn.style.display = "block";
  pausebtn.style.display = "none";
};

playbtn.addEventListener("click", startStopwatch);
pausebtn.addEventListener("click", stopStopwatch);
resetbtn.addEventListener("click", resetStopwatch);
