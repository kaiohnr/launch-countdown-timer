setInterval(function () {
  const daysElements = document.getElementById('days__remaining');
  const hoursElement = document.getElementById('hours__remaining');
  const minutesElement = document.getElementById('minutes__remaining');
  const secondsElement = document.getElementById('seconds__remaining');

  // Get the future date
  const countDownTime = new Date('May 10, 2022 15:37:25').getTime();

  // Get the current date
  const dateNow = new Date().getTime();

  const dateDifference = countDownTime - dateNow;

  // 1000 * 60 = 60 seconds
  // 60 seconds * 60 = 60 minutes
  // 60 minutes * 24 = 24 hours

  const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

  // Check if a number is less than 10, so that we insert a 0 in front of it.

  daysElements.textContent = days < 10 ? days.toString().padStart(2, '0') : days;

  hoursElement.textContent = hours < 10 ? hours.toString().padStart(2, '0') : hours;
  minutesElement.textContent =
    minutes < 10 ? minutes.toString().padStart(2, '0') : minutes;

  secondsElement.textContent =
    seconds < 10 ? seconds.toString().padStart(2, '0') : seconds;
}, 1000);
