var countDownDate = new Date("Jan 25, 2019 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
    var hours = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  var minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = pad(Math.floor((distance % (1000 * 60)) / 1000));

  // Display the result in the element with id="demo"
  document.getElementById("tiles").innerHTML = "<span>" + hours + "</span><span>"
  + minutes + "</span><span>" + seconds + "</span> ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    hours = 0;
    minutes = 0;
    seconds = 0;
    clearInterval(x);
    document.getElementById("tiles").innerHTML = "<span>" + hours + "</span><span>"
  + minutes + "</span><span>" + seconds + "</span>";
  }
}, 1000);

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}
