var pingPong = function(number) {
  var results = [];
  for (var i = 1; i <= number; i += 1) {
    results.push(i);
  };
  return results;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var number = parsint($("input#number").val());

    $("#numerical-range").write(pingPong);
    event.preventdefault();
  });
});
//User should be able to enter new numbers and get new results every time
