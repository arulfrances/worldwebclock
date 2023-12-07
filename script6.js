// Get references to DOM elements
$(document).ready(function() {
hourHand6 = document.querySelector(".hour6"),
minuteHand6 = document.querySelector(".minute6"),
secondHand6 = document.querySelector(".second6"),
modeSwitch6 = document.querySelector(".mode-switch6");
// check if the mode is already set to "Dark Mode" in localStorage

const updateTime6 = () => {
// Get current time and calculate degrees for clock hands  America/Detroit
let date = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})),
  secToDeg6 = (date.getSeconds() / 60) * 360,
  minToDeg6 = (date.getMinutes() / 60) * 360,
  hrToDeg6 = (date.getHours() / 12) * 360;
// Rotate the clock hands to the appropriate degree based on the current time
secondHand6.style.transform = `rotate(${secToDeg6}deg)`;
minuteHand6.style.transform = `rotate(${minToDeg6}deg)`;
hourHand6.style.transform = `rotate(${hrToDeg6}deg)`;
};
// call updateTime to set clock hands every second
setInterval(updateTime6, 1000);
//call updateTime function on page load
updateTime6();

 // Function to update background color based on time of day
 function updateBackgroundColor() {
  var currentTime = new Date();
  var hours = currentTime.getHours();

  // Set background color based on time of day
  if (hours >= 6 && hours < 18) {
    $('#clock6').css('background-color', '#ffffcc'); // Daylight color
  } else {
    $('#clock6').css('background-color', '#000080'); // Nighttime color
  }
}

// Update background color initially
updateBackgroundColor();

// Update background color every 60 seconds
setInterval(updateBackgroundColor, 60000);
});