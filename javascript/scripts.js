var pingPong = function(number) {
  var range = [];
  var individualNumber = range.split("");
  for (var i = 1; i <= number; i += 1) {
    range.push(i);
    if ((individualNumber % 3 === 0) && (individualNumber % 15 !== 0)) {
      range.push("ping");
    } else if ((individualNumber % 5 === 0) && (individualNumber % 15 !== 0)) {
      range.push("pong");
    } else if (individualNumber % 15 === 0) {
      range.push("pingpong");
    } else {
      return individualNumber;
    };
  };
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var number = parsint($("input#number").val());

    $("#numerical-range").write(pingPong);
    event.preventdefault();
  });
});
//User should be able to enter new numbers and get new results every time
