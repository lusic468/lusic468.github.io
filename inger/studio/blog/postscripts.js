$(document).ready(function(){
  console.log("Hey again.");



  $('.orlandobook').mousemove(function(e) {
        console.log("mousemove works");

      var $img = $("#" + $(this).data('image-id'))
      $img.show();
      $img.offset({
          top: e.pageY + 20,
          left: e.pageX + 20
      });
  }).mouseleave(function() {
      $img = $("#" + $(this).data('image-id'))
      $img.hide();
  });

  $('.orlandoscene').mousemove(function(e) {
        console.log("mousemove works");

      var $img = $("#" + $(this).data('image-id'))
      $img.show();
      $img.offset({
          top: e.pageY + 20,
          left: e.pageX + 20
      });
  }).mouseleave(function() {
      $img = $("#" + $(this).data('image-id'))
      $img.hide();
  });

  $('.laszlo').mousemove(function(e) {
        console.log("mousemove works");

      var $img = $("#" + $(this).data('image-id'))
      $img.show();
      $img.offset({
          top: e.pageY + 20,
          left: e.pageX + 20
      });
  }).mouseleave(function() {
      $img = $("#" + $(this).data('image-id'))
      $img.hide();
  });

  $('.roomessay').mousemove(function(e) {
        console.log("mousemove works");

      var $img = $("#" + $(this).data('image-id'))
      $img.show();
      $img.offset({
          top: e.pageY + 20,
          left: e.pageX + 20
      });
  }).mouseleave(function() {
      $img = $("#" + $(this).data('image-id'))
      $img.hide();
  });

});
