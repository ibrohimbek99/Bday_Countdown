
var bday = new Date(2022,8, 6, 00,00,00).getTime();
var x = setInterval(function countdown() {

var now = new Date().getTime();
var timeleft = bday - now;

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  document.querySelector(".day").innerHTML = days;
  document.querySelector(".hour").innerHTML = hours;
  document.querySelector(".minute").innerHTML = minutes;
  document.querySelector(".second").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Happy Birthday!!!";
  }
}, 1000);

