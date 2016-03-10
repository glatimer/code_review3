var number = 
var PingPong = function(number) {
  //Numbers divisible by 3 are replaced with "ping"
  if (number % 3 === 0) {
    return "ping"
  //Numbers divisible by 5 are replaces with "pong"
  } else if (number % 5 === 0) {
    return "pong"
  //Numbers divisible by 15 are replaced with "pingpong"
  } else if (number % 15 === 0) {
    return "pingpong"
  } else {
    return number
  }
}


//User should be able to enter new numbers and get new results every time
