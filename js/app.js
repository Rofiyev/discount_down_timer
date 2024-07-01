'use strict';

// Akisya tugash kuni!
const deadline = '2024-08-01';

function getTimeRemaining(endTime) {
  const timer = Date.parse(endTime) - Date.parse(new Date);
  const days = Math.floor(timer / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timer / (1000 * 60)) % 60);
  const secounds = Math.floor((timer / 1000) % 60);

  return { timer, days, hours, minutes, secounds };
}

const getZero = n => n < 10 && n >= 0 ? `0${n}` : n;

function setClock(selector, endTime) {
  const timer = document.querySelector(selector);
  const daysElm = timer.querySelector('#day');
  const hourElm = timer.querySelector('#hour');
  const minuteElm = timer.querySelector('#minute');
  const secoundElm = timer.querySelector('#secound');
  const timeIntervalFunc = setInterval(updateClock, 1000);
  updateClock();

  function updateClock() {
    const time = getTimeRemaining(endTime);

    daysElm.innerHTML = getZero(time.days);
    hourElm.innerHTML = getZero(time.hours);
    minuteElm.innerHTML = getZero(time.minutes);
    secoundElm.innerHTML = getZero(time.secounds);

    if (time.timer <= 0) {
      clearInterval(timeIntervalFunc);
    }
  }
}

setClock('.timer', deadline);
