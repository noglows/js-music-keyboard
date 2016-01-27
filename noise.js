$(document).ready( function() {

  var keyboard = ["c", "d", "e", "f", "g", "a", "b"];
  var keycodes = {65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g"};

  keyboard.forEach(function(key) {
    $('.' + key).click(function() {
      $('#' + key + 'Audio')[0].currentTime = 0;
      $('#' + key + 'Audio')[0].play();
    });
  });

  $(document).keydown(function(event) {
    var pressed_key = (event.keyCode ? event.keyCode : event.which);
    key = keycodes[pressed_key];
    $("." + key).trigger( "click" );
    $("." + key).addClass('active');
  });

  $(document).keyup(function(event) {
    var pressed_key = (event.keyCode ? event.keyCode : event.which);
    key = keycodes[pressed_key];
      $("." + key).removeClass('active');
    });
});
