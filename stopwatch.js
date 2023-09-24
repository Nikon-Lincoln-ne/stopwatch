let [hour, minute, second, millisecond] = [0, 0, 0, 0];
let time = document.getElementById("timer");
let interval = null;

function start() {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(timer);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  [hour, minute, second, millisecond] = [0, 0, 0, 0];
  time.innerHTML = "00:00:00:00";
}

function timer() {
  millisecond += 1;
  if (millisecond === 80) {
    millisecond = 0;
    second++;
    if (second === 60) {
      second = 0;
      minute++;
      if (minute === 60) {
        minute = 0;
        hour++;
      }
    }
  }
  let h = hour < 10 ? "0" + hour : hour;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  let ms = millisecond < 10 ? "0" + millisecond : millisecond;
  time.innerHTML = `${h}:${m}:${s}:``${ms}`;
}
