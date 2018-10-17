// Back-end logic:
var add = function(number1, number2, number3) {

  return number1 + number2 + number3;
};

var multiply = function(number1, number2, number3) {
  return number1 * number2 * number3;
};

var subtract = function(number1, number2, number3) {
  return number1 - number2 - number3;
};

var divide = function(number1, number2, number3) {
  return number1 / number2 / number3;
};

// Front-end logic:
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var number3 = parseInt($("#add3").val());
    var result = add(number1, number2, number3);
    $("#output").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var number3 = parseInt($("#multiply3").val());
    var result = multiply(number1, number2, number3);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var number3 = parseInt($("#subtract3").val());
    var result = subtract(number1, number2, number3);
    $("#output").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var number3 = parseInt($("#divide3").val());
    var result = divide(number1, number2, number3);
    $("#output").text(result);
  });

});

  // var number1 = parseInt(prompt("Enter a number:"));
  // var number2 = parseInt(prompt("Enter another number:"));
  // alert(multiply(number1, number2));
  //
  // var number1 = parseInt(prompt("Enter a number:"));
  // var number2 = parseInt(prompt("Enter another number:"));
  // alert(subtract(number1, number2));
  //
  // var number1 = parseInt(prompt("Enter a number:"));
  // var number2 = parseInt(prompt("Enter another number:"));
  // var result = divide(number1, number2);
  // alert(result);
