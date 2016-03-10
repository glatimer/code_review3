var number;
var pingPong = function(number) {
    if ((number % 3 === 0) && (number % 15 !== 0)) {
      return "ping"
    } else if ((number % 5 === 0) && (number % 15 !== 0)) {
      return "pong"
    } else if (number % 15 === 0) {
      return "pingpong"
    } else {
      return number
  }
}
$(document).ready(function() {
  
})
//User should be able to enter new numbers and get new results every time
