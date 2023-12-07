$(document).ready(function() {
hourHand3 = document.querySelector(".hour3"),
minuteHand3 = document.querySelector(".minute3"),
secondHand3 = document.querySelector(".second3"),
modeSwitch3 = document.querySelector(".mode-switch3");


const clockbody3 = document.querySelector("#clock3");
const updateTime3 = () => {
// Get current time and calculate degrees for clock hands

let date3 = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Argentina/Buenos_Aires"})),
  secToDeg3 = (date3.getSeconds() / 60) * 360,
  minToDeg3 = (date3.getMinutes() / 60) * 360,
  hrToDeg3 = (date3.getHours() / 12) * 360;
// Rotate the clock hands to the appropriate degree based on the current time
secondHand3.style.transform = `rotate(${secToDeg3}deg)`;
minuteHand3.style.transform = `rotate(${minToDeg3}deg)`;
hourHand3.style.transform = `rotate(${hrToDeg3}deg)`;
};
// call updateTime to set clock hands every second
setInterval(updateTime3, 1000);
//call updateTime function on page load
updateTime3();


  // Function to update background color based on time of day
  function updateBackgroundColor3() {
    var currentTime = new Date();
    var hours = currentTime.getHours();

    // Set background color based on time of day
    if (hours >= 6 && hours < 18) {
      $('#clock1').css('background-color', '#ffffcc'); // Daylight color
    } else {
      $('#clock1').css('background-color', '#000080'); // Nighttime color
    }
  }

  // Update background color initially
  updateBackgroundColor3();

  // Update background color every 60 seconds
  setInterval(updateBackgroundColor3, 60000);
});