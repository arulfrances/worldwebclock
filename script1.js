// Get references to DOM elements
$(document).ready(function () {
  const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second");

  const clockbody1 = document.querySelector("#clock1");

  const updateTime1 = () => {


    let date = new Date(),
      secToDeg = (date.getSeconds() / 60) * 360,
      minToDeg = (date.getMinutes() / 60) * 360,
      hrToDeg = (date.getHours() / 12) * 360;
    // Rotate the clock hands to the appropriate degree based on the current time
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
  };
  // call updateTime to set clock hands every second
  setInterval(updateTime1, 1000);
  //call updateTime function on page load
  updateTime1();



  // Function to update background color based on time of day
  function updateBackgroundColor() {

    var currentTime = new Date();
    var hours = currentTime.getHours();


    // $(this).css("background-color", "#00ccff");

    // Set background color based on time of day ffffcc 000080
    if (hours >= 6 && hours < 18) {
      $('#clock1').css('background-color', '#fff'); // Daylight color
      $('#clock1').css('--primary-color', '#242526');
      $('#clock1').css('--white-color', '#fff');
      $('#clock1').css('--black-color', '#000');
      $('#clock1').css('--red-color', '#e74c3c');
    } else {
      $('#clock1').css('background-color', '#000'); // Nighttime color
      $('#clock1').css('--primary-color', '#000');
      $('#clock1').css('--white-color', '#000');
      $('#clock1').css('--black-color', '#fff');
      $('#clock1').css('--red-color', '#e74c3c');
    }
  }

  // Update background color initially
  updateBackgroundColor();

  // Update background color every 60 seconds
  setInterval(updateBackgroundColor, 1000);
});