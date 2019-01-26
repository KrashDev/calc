$(document).ready(function() {


  //append numbers function
  var i = 0;
  for (i = 0; i < 10; i++) {
    $('.numbers').append('<button class="' + i + '">' + i + '</button>');
  }

});