/* global $ */

$(document).ready(function(){
  console.log("The page loaded.");

    $(".locationtext").hide();

    var oldGodsHide = false;
    var sevenHide = false;
    var drownedGodHide = false;
    var horseGodHide = false;
    var starkHide = false;
    var arrynHide = false;
    var greyjoyHide = false;
    var lannisterHide = false;
    var baratheonHide = false;
    var nightswatchHide = false;
    var lordsHide = false;
    var heirsHide = false;
    var knightsHide = false;
    var advisorsHide = false;

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
    var clicked = false;

    $("#filterLords").click(function() {
      console.log("You clicked on LORDS.");

      if (clicked == false) {
          console.log("You made it!");

          $("#lords").each(function(){
            $(this).hide("Lords hidden!");
          });
          $("#filterLords").css("text-decoration","line-through");

          clicked = true;

      } else{
          console.log("Lords are back.");

          $("#filterLords").css("text-decoration","none");
          $("#lords").show("Lords shown");

          clicked = false;
      }
    });

    $("#filterHeirs").click(function() {
      console.log("You clicked on HEIRS.");

      if (clicked == false) {
            console.log("You made it past HEIRS!");

            $("#heirs").each(function(){
              $(this).hide("Heirs hidden!");
            });
            $("#filterHeirs").css("text-decoration","line-through");

            clicked = true;

        } else{
            console.log("Heirs are back.");

            $("#filterHeirs").css("text-decoration","none");
            $("#heirs").show("Heirs shown");

            clicked = false;
        }
    });

    $("#filterAdvisors").click(function() {
      console.log("You clicked on ADVISORS.");

      if (clicked == false) {
            console.log("You made it past ADVISORS!");

            $("#advisors").html(function(){
              $(this).hide("Advisors hidden!");
            });
            $("#filterAdvisors").css("text-decoration","line-through");

            clicked = true;

        } else{
            console.log("Advisors are back.");

            $("#filterAdvisors").css("text-decoration","none");
            $("#advisors").show("Advisors shown");

            clicked = false;
        }
    });


    /*WINTERFELL*/
    $("#markerwinterfell.locationmarker").mouseenter(function(){
      console.log("Marker was invaded.");
      $("#textwinterfell.locationtext").show();
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
      $("#textbar.locationtext").show();
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
      $("#textbar.locationtext").show();
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
      $("#textbar.locationtext").show();
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

    /*THE TWINS*/
    $("#markertwins.locationmarker").mouseenter(function(){
      console.log("Marker was invaded.");
      $("#texttwins").show();
      $("#textbar.locationtext").show();
    });
    $("#texttwins.locationtext").mouseenter(function(){
      console.log("The Twins is known.");
      $("#texttwins").show();
    });

    $("#texttwins.locationtext").mouseleave(function(){
      console.log("The Twins is unknown.");
      $("#texttwins").hide();
    });
    $("#markertwins.locationmarker").mouseleave(function(){
      console.log("Marker was ditched.");
      $("#texttwins").hide();
    });

    /*KING'S LANDING*/
    $("#markerkingslanding.locationmarker").mouseenter(function(){
      console.log("Marker was invaded.");
      $("#textkingslanding").show();
      $("#textbar.locationtext").show();
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

    /*PENTOS*/
    $("#markerpentos.locationmarker").mouseenter(function(){
      console.log("Marker was invaded.");
      $("#textpentos").show();
      $("#textbar.locationtext").show();
    });
    $("#textpentos.locationtext").mouseenter(function(){
      console.log("Pentos is known.");
      $("#textpentos").show();
    });

    $("#textpentos.locationtext").mouseleave(function(){
      console.log("Pentos is unknown.");
      $("#textpentos").hide();
    });
    $("#markerpentos.locationmarker").mouseleave(function(){
      console.log("Marker was ditched.");
      $("#textpentos").hide();
    });

    /*DOTHRAKI SEA*/
    $("#markerdothrakisea.locationmarker").mouseenter(function(){
      console.log("Marker was invaded.");
      $("#textdothrakisea").show();
      $("#textbar.locationtext").show();
    });
    $("#textdothrakisea.locationtext").mouseenter(function(){
      console.log("Dothrak is known.");
      $("#textdothrakisea").show();
    });

    $("#textdothrakisea.locationtext").mouseleave(function(){
      console.log("Dothrak is unknown.");
      $("#textdothrakisea").hide();
    });
    $("#markerdothrakisea.locationmarker").mouseleave(function(){
      console.log("Marker was ditched.");
      $("#textdothrakisea").hide();
    });

    /*VILLAGE OF THE LHAZAREEN*/
    $("#markerlhazareen.locationmarker").mouseenter(function(){
      console.log("Marker was invaded.");
      $("#textlhazareen").show();
      $("#textbar.locationtext").show();
    });
    $("#textkingslanding.locationtext").mouseenter(function(){
      console.log("Lhazareen is known.");
      $("#textlhazareen").show();
    });

    $("#textkingslanding.locationtext").mouseleave(function(){
      console.log("Lhazareen is unknown.");
      $("#textlhazareen").hide();
    });
    $("#markerlhazareen.locationmarker").mouseleave(function(){
      console.log("Marker was ditched.");
      $("#textlhazareen").hide();
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
