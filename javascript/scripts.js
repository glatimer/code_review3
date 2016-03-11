var pingPong = function(number) {
  for (var i = 1; i <= number; i += 1) {
  };
  return i
};




var pingPong = function(number) {
  var count = [];
  for (var i = 1; i <= number; count += 1) {
    return
    if ((number % 3 === 0) && (number % 15 !== 0)) {
      count.push("ping");
    } else if ((number % 5 === 0) && (number % 15 !== 0)) {
      count.push("pong");
    } else if (number % 15 === 0) {
      count.push("pingpong");
    } else {
      return number
    }
  }
}
$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    var number = parsint($("input#number").val());

    $("#results").write();
    event.preventdefault();
  });
});
//User should be able to enter new numbers and get new results every time
