window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const countTimer = (deadline) => {
    let timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
    let dateStop = new Date(deadline).getTime(),
    dateNow = new Date().getTime(),
    timeRemaining = (dateStop - dateNow)/1000,
    seconds = Math.floor(timeRemaining % 60),
    minutes = Math.floor((timeRemaining / 60 % 60)),
    hours = Math.floor(timeRemaining / 60 / 60); 
    return {timeRemaining, hours, minutes, seconds};

    };
    //hours = Math.floor(timeRemaining / 60 / 60) % 24,
    //days = Math.floor(timeRemaining / 60 / 60 / 24);

    const updateClock = () => {
      let timer = getTimeRemaining();
    
        timerHours.textContent = timer.hours
        timerMinutes.textContent = timer.minutes
        timerSeconds.textContent = timer.seconds
      
        if (timer.timeRemaining < 0) { 
          timerHours.textContent = 0
          timerMinutes.textContent = 0
          timerSeconds.textContent = 0
      }
        if (timerHours.textContent.length === 1)  timerHours.textContent = '0' + timer.hours
        if (timerMinutes.textContent.length === 1)  timerMinutes.textContent = '0' + timer.minutes
        if (timerSeconds.textContent.length === 1)  timerSeconds.textContent = '0' + timer.seconds

      console.log(timerHours.textContent.length)
    }

    setInterval(updateClock, 1000)
  }

  countTimer('22 april 2022')
  //setInterval(countTimer, 1000, '01 may 2022')
})