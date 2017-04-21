

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

          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.blog").click(function(e) {
          e.preventDefault();

          $("#portal").attr("src", $(this).attr("href"));
      })

      $("a.archive").click(function(e) {
          e.preventDefault();

          $("#portal").attr("src", $(this).attr("href"));
      })


  });

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

  });  




/*var clickedONE = false;
$("#post1").click(function() {
  console.log("You clicked on post8.");

  if (clickedONE == false) {
    console.log("You made it!");

    $('#post1').attr('src', 'postone.html');

    clickedBlog = true;

  } else{
    console.log("Posts are gone.");

    $(".post").css("display", "none");

    clickedBlog = false;
  }
});
*/
