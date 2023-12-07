$(document).ready(function () {
  hourHand2 = document.querySelector(".hour2"),
    minuteHand2 = document.querySelector(".minute2"),
    secondHand2 = document.querySelector(".second2"),
    modeSwitch2 = document.querySelector(".mode-switch2");

  const clockbody2 = document.querySelector("#clock2");
  const updateTime2 = () => {
    // Get current time and calculate degrees for clock hands

    let date2 = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" })),
      secToDeg2 = (date2.getSeconds() / 60) * 360,
      minToDeg2 = (date2.getMinutes() / 60) * 360,
      hrToDeg2 = (date2.getHours() / 12) * 360;
    // Rotate the clock hands to the appropriate degree based on the current time
    secondHand2.style.transform = `rotate(${secToDeg2}deg)`;
    minuteHand2.style.transform = `rotate(${minToDeg2}deg)`;
    hourHand2.style.transform = `rotate(${hrToDeg2}deg)`;
  };
  // call updateTime to set clock hands every second
  setInterval(updateTime2, 1000);
  //call updateTime function on page load
  updateTime2();

  function updateBackgroundColor2() {
    var currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
    var hours = currentTime.getHours();

    // Set background color based on time of day
    if (hours >= 6 && hours < 18) {
      $('#clock2').css('background-color', '#fff'); // Daylight color
      $('#clock2').css('--primary-color', '#242526');
      $('#clock2').css('--white-color', '#fff');
      $('#clock2').css('--black-color', '#000');
      $('#clock2').css('--red-color', '#e74c3c');
    } else {
      $('#clock2').css('background-color', '#000'); // Nighttime color
      $('#clock2').css('--primary-color', '#000');
      $('#clock2').css('--white-color', '#18191a');
      $('#clock2').css('--black-color', '#fff');
      $('#clock2').css('--red-color', '#e74c3c');
    }
  }

  // Update background color initially
  updateBackgroundColor2();

  // Update background color every 60 seconds
  setInterval(updateBackgroundColor2, 60000);
});