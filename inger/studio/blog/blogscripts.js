$(document).ready(function(){



    $('.portal').hide();
    $('.portal2').hide();
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
              100
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

          $('.queerthumb').mousemove(function(e) {
                console.log("mousemove works");

              var $div = $("#" + $(this).data('data-id'))
              $div.show();
              $div.offset({
                  top: e.pageY - 15,
                  left: e.pageX + 20
              });
          }).mouseleave(function() {
              $div = $("#" + $(this).data('data-id'))
              $div.hide();
          });
      }



});

$(document).ready(function(){
  console.log("Hey.");



  //$(".post").hide();

  //  $(document).on ("click", "#blogbutton", function () {
  //      $(".post").toggle();



      $("#post1shadow").hide();
      $("#post2shadow").hide();
      $("#post3shadow").hide();
      $("#post4shadow").hide();
      $("#post5shadow").hide();
      $("#post6shadow").hide();
      $("#post7shadow").hide();
      $("#post8shadow").hide();

      $("#post1nav").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").show();
          $("#post2shadow").hide();
          $("#post3shadow").hide();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
          $("#post6shadow").hide();
          $("#post7shadow").hide();
          $("#post8shadow").hide();
      })

      $("#post2nav").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").show();
          $("#post3shadow").hide();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
          $("#post6shadow").hide();
          $("#post7shadow").hide();
          $("#post8shadow").hide();
      })

      $("#post3nav").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").hide();
          $("#post3shadow").show();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
          $("#post6shadow").hide();
          $("#post7shadow").hide();
          $("#post8shadow").hide();
      })

      $("#post4nav").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").hide();
          $("#post3shadow").hide();
          $("#post4shadow").show();
          $("#post5shadow").hide();
          $("#post6shadow").hide();
          $("#post7shadow").hide();
          $("#post8shadow").hide();
      })

      $("#post5nav").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").hide();
          $("#post3shadow").hide();
          $("#post4shadow").hide();
          $("#post5shadow").show();
          $("#post6shadow").hide();
          $("#post7shadow").hide();
          $("#post8shadow").hide();
      })

      $("#post6nav").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").hide();
          $("#post3shadow").hide();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
          $("#post6shadow").show();
          $("#post7shadow").hide();
          $("#post8shadow").hide();
      })

      $("#post7nav").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").hide();
          $("#post3shadow").hide();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
          $("#post6shadow").hide();
          $("#post7shadow").show();
          $("#post8shadow").hide();
      })

      $("#post8nav").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").hide();
          $("#post3shadow").hide();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
          $("#post6shadow").hide();
          $("#post7shadow").hide();
          $("#post8shadow").show();
      })

      $("a.about").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $('.backgroundimagegone').show(0);
          $(".postnavigation").css("display","none");
          $("#portal").attr("src", $(this).attr("href"));
          $("#navshadow").hide();
      })

      $("a.blog").click(function(e) {
          e.preventDefault();

          $('.portal2').show();
          $('.portal').hide();
          $('.backgroundimagegone').show(0);
          $("#postnavigation").css("display","block");
      })

      $("a.archive").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $('.backgroundimagegone').show(0);
          $(".postnavigation").css("display","none");
          $("#portal").attr("src", $(this).attr("href"));
          $("#navshadow").hide();
      })

      $("a.black").click(function(e) {

          $(".postnavigation").css("display","none");
          $('.portal').hide();
          $('.portal').hide();
      })

      /*BLOG THUMBNAILS*/

      $("a.post1thumb").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").show();
          $("#post2shadow").hide();
          $("#post3shadow").hide();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
      })

      $("a.post11thumb").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").show();
          $("#post2shadow").hide();
          $("#post3shadow").hide();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
      })

      $("a.post2thumb").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").show();
          $("#post3shadow").hide();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
      })

      $("a.post22thumb").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").show();
          $("#post3shadow").hide();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
      })

      $("a.post3thumb").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").hide();
          $("#post3shadow").show();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
      })

      $("a.post33thumb").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").hide();
          $("#post3shadow").show();
          $("#post4shadow").hide();
          $("#post5shadow").hide();
      })

      $("a.post4thumb").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").hide();
          $("#post3shadow").hide();
          $("#post4shadow").show();
          $("#post5shadow").hide();
      })

      $("a.post44thumb").click(function(e) {
          e.preventDefault();

          $('.portal').show();
          $('.portal2').hide();
          $("#portal").attr("src", $(this).attr("href"));
          $("#post1shadow").hide();
          $("#post2shadow").hide();
          $("#post3shadow").hide();
          $("#post4shadow").show();
          $("#post5shadow").hide();
      })


      /*THUMBNAIL EXCERPTS*/


      $("a.queerthumb").mouseenter(function(){
        console.log('excerpt here');
        $(this).css('mix-blend-mode','screen');
      })
      $("a.queerthumb").mouseleave(function(){
        console.log('excerpt gone');
        $(this).css('mix-blend-mode','normal');
      })








      if (window.screen.width <= 480){

        $("a.blog").click(function(){
          $(".navigation").hide();
        });



      }






  });
