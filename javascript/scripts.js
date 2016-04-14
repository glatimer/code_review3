var pingPong = function(number) {
  var range = [];
  for (var i = 1; i <= number; i += 1) {
    if ((i % 3 === 0) && (i % 15 !== 0)) {
      range.push("<li>ping</li>");
    } else if ((i % 5 === 0) && (i % 15 !== 0)) {
      range.push("<li>pong</li>");
    } else if (i % 15 === 0) {
      range.push("<li>pingpong</li>");
    } else {
      range.push("<li>" + i + "</li>");
    };
  };
  return range;
};
$(document).ready(function() {
  $("form").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    $("#result").append(result);
  event.preventDefault();
  });
});
//User should be able to enter new numbers and get new results every time
