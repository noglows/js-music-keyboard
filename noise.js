$(document).ready( function() {

  var keyboard = ["c", "d", "e", "f", "g", "a", "b"];

  keyboard.forEach(function(key) {
    $('.' + key).click(function() {
      $('#' + key + 'Audio')[0].currentTime = 0;
      $('#' + key + 'Audio')[0].play();
    });
  });

});
