var pingPong = function(number) {
  var range = [];
  for (var i = 1; i <= number; i += 1) {
    if ((i % 3 === 0) && (i % 15 !== 0)) {
      range.push("ping");
    } else if ((i % 5 === 0) && (i % 15 !== 0)) {
      range.push("pong");
    } else if (i % 15 === 0) {
      range.push("pingpong");
    } else {
      range.push(i);
    };
  };
  var string = range.toString();
  return string;
};
$(document).ready(function() {
  $("form").submit(function(event) {
    var number = parseInt($("input#number").val());

  $("#result").text(pingPong);
  event.preventDefault();
  });
});
//User should be able to enter new numbers and get new results every time
