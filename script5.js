// Get references to DOM elements
$(document).ready(function() {
hourHand5 = document.querySelector(".hour5"),
minuteHand5 = document.querySelector(".minute5"),
secondHand5 = document.querySelector(".second5"),
modeSwitch5 = document.querySelector(".mode-switch5");

const clockbody5 = document.querySelector("#clock5");

const updateTime5 = () => {
// Get current time and calculate degrees for clock hands  America/Detroit
let date = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Riyadh"})),
  secToDeg5 = (date.getSeconds() / 60) * 360,
  minToDeg5 = (date.getMinutes() / 60) * 360,
  hrToDeg5 = (date.getHours() / 12) * 360;
// Rotate the clock hands to the appropriate degree based on the current time
secondHand5.style.transform = `rotate(${secToDeg5}deg)`;
minuteHand5.style.transform = `rotate(${minToDeg5}deg)`;
hourHand5.style.transform = `rotate(${hrToDeg5}deg)`;
};
// call updateTime to set clock hands every second
setInterval(updateTime5, 1000);
//call updateTime function on page load
updateTime5();



  // Function to update background color based on time of day
  function updateBackgroundColor() {
    var currentTime = new Date();
    var hours = currentTime.getHours();

    // Set background color based on time of day
    if (hours >= 6 && hours < 18) {
      $('#clock5').css('background-color', '#ffffcc'); // Daylight color
    } else {
      $('#clock5').css('background-color', '#000080'); // Nighttime color
    }
  }

  // Update background color initially
  updateBackgroundColor();

  // Update background color every 60 seconds
  setInterval(updateBackgroundColor, 60000);
});