/* global $ */

$(document).ready(function(){
  console.log("The page loaded.");

    $(".locationtext").hide();

    /*REGION TITLE*/

    $("img[src='images/mapWall.jpg']").mouseenter(function(){
      console.log("You entered the Wall img");
      $("#regionTitle").html("The Wall and Beyond")
    });
    $("img[src='images/mapNorth.jpg']").mouseenter(function(){
      console.log("You entered the North img");
      $("#regionTitle").html("The North")
    });
    $("img[src='images/mapRiverlands.jpg']").mouseenter(function(){
      console.log("You entered the Riverlands img");
      $("#regionTitle").html("The Riverlands")
    });
    $("img[src='images/mapSouth.jpg']").mouseenter(function(){
      console.log("You entered the South img");
      $("#regionTitle").html("The South")
    });
    $("img[src='images/mapShiveringSea.jpg']").mouseenter(function(){
      console.log("You entered the Sea img");
      $("#regionTitle").html("The Shivering Sea")
    });
    $("img[src='images/mapEssos.jpg']").mouseenter(function(){
      console.log("You entered the Essos img");
      $("#regionTitle").html("Essos")
    });

    /*FILTER*/
    $("#filterLords").click(function(){

          $("#filterLords").css("text-decoration", "line-through");
          $("#lords").each(function(){
            $(this).hide();
          });
      });


    /*WINTERFELL*/
    $("#markerwinterfell.locationmarker").mouseenter(function(){
      console.log("Marker was invaded.");
      $("#textwinterfell.locationtext").show();
      $("#textbar.locationtext").show();
    });
    $("#textwinterfell.locationtext").mouseenter(function(){
      console.log("Winterfell is known.");
      $("#textwinterfell.locationtext").show();
    });

    $("#textwinterfell.locationtext").mouseleave(function(){
      console.log("Winterfell is unknown.");
      $("#textwinterfell.locationtext").hide();
    });
    $("#markerwinterfell.locationmarker").mouseleave(function(){
      console.log("Marker was ditched.");
      $("#textwinterfell.locationtext").hide();
    });

    /*CASTLE BLACK*/
    $("#markerwall.locationmarker").mouseenter(function(){
      console.log("Marker was invaded.");
      $("#textwall").show();
    });
    $("#textwall.locationtext").mouseenter(function(){
      console.log("Castle Black is known.");
      $("#textwall").show();
    });

    $("#textwall.locationtext").mouseleave(function(){
      console.log("Castle Black is unknown.");
      $("#textwall").hide();
    });
    $("#markerwall.locationmarker").mouseleave(function(){
      console.log("Marker was ditched.");
      $("#textwall").hide();
    });

    /*PYKE*/
    $("#markerpyke.locationmarker").mouseenter(function(){
      console.log("Marker was invaded.");
      $("#textpyke").show();
    });
    $("#textpyke.locationtext").mouseenter(function(){
      console.log("Pyke is known.");
      $("#textpyke").show();
    });

    $("#textpyke.locationtext").mouseleave(function(){
      console.log("Pyke is unknown.");
      $("#textpyke").hide();
    });
    $("#markerpyke.locationmarker").mouseleave(function(){
      console.log("Marker was ditched.");
      $("#textpyke").hide();
    });

    /*THE EYRIE*/
    $("#markereyrie.locationmarker").mouseenter(function(){
      console.log("Marker was invaded.");
      $("#texteyrie").show();
    });
    $("#texteyrie.locationtext").mouseenter(function(){
      console.log("The Eyrie is known.");
      $("#texteyrie").show();
    });

    $("#texteyrie.locationtext").mouseleave(function(){
      console.log("The Eyrie is unknown.");
      $("#texteyrie").hide();
    });
    $("#markereyrie.locationmarker").mouseleave(function(){
      console.log("Marker was ditched.");
      $("#texteyrie").hide();
    });

    /*KING'S LANDING*/
    $("#markerkingslanding.locationmarker").mouseenter(function(){
      console.log("Marker was invaded.");
      $("#textkingslanding").show();
    });
    $("#textkingslanding.locationtext").mouseenter(function(){
      console.log("King's Landing is known.");
      $("#textkingslanding").show();
    });

    $("#textkingslanding.locationtext").mouseleave(function(){
      console.log("King's Landing is unknown.");
      $("#textkingslanding").hide();
    });
    $("#markerkingslanding.locationmarker").mouseleave(function(){
      console.log("Marker was ditched.");
      $("#textkingslanding").hide();
    });





});


    /*function filter(){
        var filter = $("#filter").val(),

            oldgods = $('#oldgods');

            lords = $('#lords');
            heirs = $('#heirs');
            knights = $('#knights');
            advisors = $('#advisors');
            commoners = $('#commoners');
            wildlings = $('#wildlings');
            animals = $('#animals');
            others = $('#others');

        lords.show();

        if (filter != '')
            lords.filter('.'+filter).hide();
            heirs.filter('.'+filter).hide();
          }


});
*/
