let startTime = 0;
let elapsedTime = 0;
let interval;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("startBtn").onclick = start;
document.getElementById("stopBtn").onclick = stop;
document.getElementById("resetBtn").onclick = reset;
document.getElementById("lapBtn").onclick = addLap;

function start() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsedTime;

    interval = setInterval(update, 10);
  }
}

function stop() {
  running = false;
  clearInterval(interval);
}

function reset() {
  running = false;
  clearInterval(interval);
  startTime = 0;
  elapsedTime = 0;
  display.textContent = "00:00:00.00";
  laps.innerHTML = "";
}

function update() {
  elapsedTime = Date.now() - startTime;

  let ms = Math.floor((elapsedTime % 1000) / 10);
  let sec = Math.floor((elapsedTime / 1000) % 60);
  let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let hr = Math.floor(elapsedTime / (1000 * 60 * 60));

  display.textContent =
    (hr < 10 ? "0" + hr : hr) + ":" +
    (min < 10 ? "0" + min : min) + ":" +
    (sec < 10 ? "0" + sec : sec) + "." +
    (ms < 10 ? "0" + ms : ms);
}

function addLap() {
  if (!running) return;

  const li = document.createElement("li");
  li.textContent = display.textContent;
  laps.appendChild(li);
}
