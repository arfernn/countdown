document.addEventListener("DOMContentLoaded", (event) => init());

function init() {
  let dayshtml = document.querySelector("#days");
  let hourshtml = document.querySelector("#hours");
  let minuteshtml = document.querySelector("#minutes");
  let secondshtml = document.querySelector("#seconds");

  const TARGET = 3600 * 24 * 14;
  let targetDate = TARGET;

  setInterval(() => {
    targetDate -= 1;

    if (targetDate <= 0) {
      targetDate = TARGET;
    }
    let value = Math.floor(targetDate / (3600 * 24));
    dayshtml.innerHTML = value;

    value = Math.floor((targetDate % (3600 * 24)) / 3600);
    hourshtml.innerHTML = value;
    value = Math.floor((targetDate / 60) % 60);
    minuteshtml.innerHTML = value;
    value = targetDate % 60;
    secondshtml.innerHTML = value;
  }, 1000);
}
