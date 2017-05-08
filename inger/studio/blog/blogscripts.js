$(document).ready(function(){



    $('.portal').hide();
    $('.backgroundimagegone').hide(0);


    if (window.screen.width > 480) {
        console.log("The portal is not here rn.")

          var $win = $(window),
          w = 0,h = 0,
          rgb = [],
          getWidth = function() {
              w = $win.width();
              h = $win.height();
          };

          $win.resize(getWidth).mousemove(function(e) {

          rgb = [
              Math.round(e.pageX/w * 255),
              Math.round(e.pageY/h * 255),
              50
          ];
          $(document.body).css('background','rgb('+rgb.join(',')+')');
          $(document.body).css('background-image','url(background.png)');
          $(document.body).css('background-size','cover');
          $(document.body).css('background-blend-mode', 'screen');

          }).resize();


          /*NAVIGATION HOVER*/

          $('.post1').mousemove(function(e) {
                console.log("mousemove works");

              var $img = $("#" + $(this).data('image-id'))
              $img.show();
              $img.offset({
                  top: e.pageY - 15,
                  left: e.pageX + 20
              });
          }).mouseleave(function() {
              $img = $("#" + $(this).data('image-id'))
              $img.hide();
          });

          $('.post2').mousemove(function(e) {
                console.log("mousemove works");

              var $img = $("#" + $(this).data('image-id'))
              $img.show();
              $img.offset({
                  top: e.pageY - 15,
                  left: e.pageX + 20
              });
          }).mouseleave(function() {
              $img = $("#" + $(this).data('image-id'))
              $img.hide();
          });

          $('.post3').mousemove(function(e) {
                console.log("mousemove works");

              var $img = $("#" + $(this).data('image-id'))
              $img.show();
              $img.offset({
                  top: e.pageY - 15,
                  left: e.pageX + 20
              });
          }).mouseleave(function() {
              $img = $("#" + $(this).data('image-id'))
              $img.hide();
          });

          $('.post4').mousemove(function(e) {
                console.log("mousemove works");

              var $img = $("#" + $(this).data('image-id'))
              $img.show();
              $img.offset({
                  top: e.pageY - 15,
                  left: e.pageX + 20
              });
          }).mouseleave(function() {
              $img = $("#" + $(this).data('image-id'))
              $img.hide();
          });

          $('.post5').mousemove(function(e) {
                console.log("mousemove works");

              var $img = $("#" + $(this).data('image-id'))
              $img.show();
              $img.offset({
                  top: e.pageY - 15,
                  left: e.pageX + 20
              });
          }).mouseleave(function() {
              $img = $("#" + $(this).data('image-id'))
              $img.hide();
          });

          $('.post6').mousemove(function(e) {
                console.log("mousemove works");

              var $img = $("#" + $(this).data('image-id'))
              $img.show();
              $img.offset({
                  top: e.pageY - 15,
                  left: e.pageX + 20
              });
          }).mouseleave(function() {
              $img = $("#" + $(this).data('image-id'))
              $img.hide();
          });

          $('.post7').mousemove(function(e) {
                console.log("mousemove works");

              var $img = $("#" + $(this).data('image-id'))
              $img.show();
              $img.offset({
                  top: e.pageY - 15,
                  left: e.pageX + 20
              });
          }).mouseleave(function() {
              $img = $("#" + $(this).data('image-id'))
              $img.hide();
          });

          $('.post8').mousemove(function(e) {
                console.log("mousemove works");

              var $img = $("#" + $(this).data('image-id'))
              $img.show();
              $img.offset({
                  top: e.pageY - 15,
                  left: e.pageX + 20
              });
          }).mouseleave(function() {
              $img = $("#" + $(this).data('image-id'))
              $img.hide();
          });
      }


});

$(document).ready(function(){
  console.log("Hey.");



  //$(".post").hide();

  //  $(document).on ("click", "#blogbutton", function () {
  //      $(".post").toggle();


//Make blog button show the left navigation.

      $("a.post1").click(function(e) {
          e.preventDefault();

          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.post2").click(function(e) {
          e.preventDefault();

          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.post3").click(function(e) {
          e.preventDefault();

          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.post4").click(function(e) {
          e.preventDefault();

          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.post5").click(function(e) {
          e.preventDefault();

          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.post6").click(function(e) {
          e.preventDefault();

          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.post7").click(function(e) {
          e.preventDefault();

          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.post8").click(function(e) {
          e.preventDefault();

          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.about").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.backgroundimagegone').show(0);
          $(".postnavigation").css("display","none");
          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.blog").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.backgroundimagegone').show(0);
          $(".postnavigation").css("display","block");
          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.archive").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.backgroundimagegone').show(0);
          $(".postnavigation").css("display","none");
          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.black").click(function(e) {

          $(".postnavigation").css("display","none");
          $('.portal').hide();
      })










  });
