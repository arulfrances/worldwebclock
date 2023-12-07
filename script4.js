$(document).ready(function() {
 hourHand4 = document.querySelector(".hour4"),
 minuteHand4 = document.querySelector(".minute4"),
 secondHand4 = document.querySelector(".second4");

 const clockbody4 = document.querySelector("#clock4");

const updateTime4 = () => {
 // Get current time and calculate degrees for clock hands  America/Detroit
 let date = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Detroit"})),
   secToDeg4 = (date.getSeconds() / 60) * 360,
   minToDeg4 = (date.getMinutes() / 60) * 360,
   hrToDeg4 = (date.getHours() / 12) * 360;
 // Rotate the clock hands to the appropriate degree based on the current time
 secondHand4.style.transform = `rotate(${secToDeg4}deg)`;
 minuteHand4.style.transform = `rotate(${minToDeg4}deg)`;
 hourHand4.style.transform = `rotate(${hrToDeg4}deg)`;
};
// call updateTime to set clock hands every second
setInterval(updateTime4, 1000);
//call updateTime function on page load
updateTime4();


  // Function to update background color based on time of day
  function updateBackgroundColor() {
    var currentTime = new Date();
    var hours = currentTime.getHours();

    // Set background color based on time of day
    if (hours >= 6 && hours < 18) {
      $('#clock4').css('background-color', '#ffffcc'); // Daylight color
    } else {
      $('#clock4').css('background-color', '#000080'); // Nighttime color
    }
  }

  // Update background color initially
  updateBackgroundColor();

  // Update background color every 60 seconds
  setInterval(updateBackgroundColor, 60000);
});