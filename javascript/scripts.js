var pingPong = function(integer) {
  var range = [];
  for (var i = 1; i <= integer; i += 1) {
    if ((i % 3 === 0) && (i % 15 !== 0)) {
      range.splice("ping");
    } else if ((i % 5 === 0) && (i % 15 !== 0)) {
      range.splice("pong");
    } else if (i % 15 === 0) {
      range.splice("pingpong");
    } else {
      range.push(i);
    };
  };
  return range;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var number = parsint($("input#number").val());

    $("#numerical-range").write(pingPong);
    event.preventdefault();
  });
});
//User should be able to enter new numbers and get new results every time
