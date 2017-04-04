$(document).ready(function(){
  console.log("ready to go");

    $(".about").show();
    $(".clockcontainer").show();


    $(".clockcontainer").mouseenter(function(){
      console.log("About was invaded.");
      $(".leftcircle").css("border", "transparent");
      $(".rightcircle").css("border", "transparent");
      $(".minutes").css("background", "transparent");
      $(".seconds").css("background", "transparent");
      $(".about").css("color", "black");
      $(".dot").css("background", "transparent");
    });

    $(".clockcontainer").mouseleave(function(){
      console.log("About is evaded.");
      $(".leftcircle").css("border", "10px solid blue");
      $(".rightcircle").css("border", "10px solid blue");
      $(".minutes").css("background", "blue");
      $(".seconds").css("background", "blue");
      $(".about").css("color", "white");
      $(".dot").css("background", "blue");
    });

});
