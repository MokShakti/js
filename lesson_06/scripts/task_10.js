'use strict'

if (confirm(`Shall we start the test?`)) {
   let startTime = parseInt(prompt(`Enter the start time of the school day (in hours):`));
   let lessonDuration = parseInt(prompt(`Enter the duration of each lesson (in minutes):`));
   let numberOfLessons = parseInt(prompt(`Enter the number of lessons:`));

   let currentTime = startTime * 60;

   for (let i = 1; i <= numberOfLessons; i++) {
      let hour = Math.floor(currentTime / 60);
      let minute = currentTime % 60;

      let formattedHour = hour;
      let formattedMinute = minute;

      if (hour < 10) {
         formattedHour = `0` + hour;
      }

      if (minute < 10) {
         formattedMinute = `0` + minute;
      }

      document.write(`Lesson ` + i + ` starts at: ` + formattedHour + `:` + formattedMinute + `<br>`);

      currentTime += lessonDuration;
   }
}