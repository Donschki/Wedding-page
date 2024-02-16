 function startCountdown(targetDate) {
   const timerElement = document.getElementById('timer');
   const daysElement = document.getElementById('days');
   const hoursElement = document.getElementById('hours');
   const minutesElement = document.getElementById('minutes');
   const secondsElement = document.getElementById('seconds');
 
   function updateTimer() {
     const currentDate = new Date();
     const timeDifference = targetDate - currentDate;
 
     if (timeDifference < 0) {
       timerElement.textContent = "Countdown expired!";
       timerElement.style.backgroundColor = "#e74c3c";
       return;
     }
 
     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
 
     daysElement.textContent = `${days} Days`;
     hoursElement.textContent = `${hours} Hours`;
     minutesElement.textContent = `${minutes} Minutes`;
     secondsElement.textContent = `${seconds} Seconds`;
   }
 
   // Initial call to display the timer immediately
   updateTimer();
 
   // Update the timer every second
   setInterval(updateTimer, 1000);
 }
 
 // Set the target date for the countdown (year, month (0-based), day, hour, minute, second)
 const targetDate = new Date(2024, 2, 24, 3, 0, 0); // January 1, 2023
 startCountdown(targetDate);