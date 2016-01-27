$(document).ready( function() {

  var keyboard = ["c", "d", "e", "f", "g", "a", "b"];
  var keycodes = {97: "a", 98: "b", 99: "c", 100: "d", 101: "e", 102: "f", 103: "g"};

  keyboard.forEach(function(key) {
    $('.' + key).click(function() {
      $('#' + key + 'Audio')[0].currentTime = 0;
      $('#' + key + 'Audio')[0].play();
    });
  });

  $(document).keypress(function(event) {
      var pressed_key = (event.keyCode ? event.keyCode : event.which);
      key = keycodes[pressed_key];
      $( "." + key ).trigger( "click" );
    });

});
