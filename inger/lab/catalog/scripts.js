/* global $ */

$(document).ready(function(){
  console.log("The page loaded.");

    $(".locationtext").hide();
    $(".filter").hide();
});

$(document).ready(function(){
  
/*TUTORIAL*/
    $("#close").click(function(){
      $(".tutorialouter").remove();
      $(".tutorialinner").remove();
    });


/*FILTER TOGGLE*/
    $("#filterreligion").click(function(){
      console.log("The religion header toggled.");

      $("#filterOldGods").toggle();
      $("#filterFaithSeven").toggle();
      $("#filterDrownedGod").toggle();
      $("#filterHorseGod").toggle();

    });

    $("#filterallegiance").click(function(){
      console.log("The allegiance header toggled.");

      $("#filterStark").toggle();
      $("#filterArryn").toggle();
      $("#filterGreyjoy").toggle();
      $("#filterLannister").toggle();
      $("#filterBaratheon").toggle();
      $("#filterTargaryen").toggle();
      $("#filterNightsWatch").toggle();
      $("#filterRealm").toggle();

    });

    $("#filterrole").click(function(){
      console.log("The role header toggled.");

      $("#filterLords").toggle();
      $("#filterHeirs").toggle();
      $("#filterKnights").toggle();
      $("#filterAdvisors").toggle();
      $("#filterCrows").toggle();
      $("#filterWildlings").toggle();
      $("#filterCommoners").toggle();
      $("#filterAnimals").toggle();
      $("#filterOthers").toggle();

    });

    $("#filterhead").click(function(){
      console.log("The religion header toggled.");

      $(".filter").toggle();

    });


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

/*FILTERS*/

/*RELIGION*/
/*OLD GODS*/
    var clickedOldGods = false;
    $("#filterOldGods").click(function() {
      console.log("You clicked on oldgods.");

      if (clickedOldGods == false) {
        console.log("You made it!");

        $(".oldgods").hide("oldgods hidden!");
        $("#filterOldGods").css("text-decoration","line-through");

        clickedOldGods = true;

      } else{
        console.log("oldgods are back.");

        $("#filterOldGods").css("text-decoration","none");
        $(".oldgods").show("oldgods shown");

        clickedOldGods = false;
      }
    });

/*FAITH OF THE SEVEN*/
    var clickedFaithSeven = false;
    $("#filterFaithSeven").click(function() {
      console.log("You clicked on faithseven.");

      if (clickedFaithSeven == false) {
        console.log("You made it!");

        $(".faithseven").hide("faithseven hidden!");
        $("#filterFaithSeven").css("text-decoration","line-through");

        clickedFaithSeven = true;

      } else{
        console.log("faithseven are back.");

        $("#filterFaithSeven").css("text-decoration","none");
        $(".faithseven").show("faithseven shown");

        clickedFaithSeven = false;
      }
    });

/*DROWNED GOD*/
    var clickedDrownedGod = false;
    $("#filterDrownedGod").click(function() {
      console.log("You clicked on drownedgod.");

      if (clickedDrownedGod == false) {
        console.log("You made it!");

        $(".drownedgod").hide("drownedgod hidden!");
        $("#filterDrownedGod").css("text-decoration","line-through");

        clickedDrownedGod = true;

      } else{
        console.log("drownedgod are back.");

        $("#filterDrownedGod").css("text-decoration","none");
        $(".drownedgod").show("drownedgod shown");

        clickedDrownedGod = false;
      }
    });

/*HORSE GOD*/
    var clickedHorseGod = false;
    $("#filterHorseGod").click(function() {
      console.log("You clicked on horsegod.");

      if (clickedHorseGod == false) {
        console.log("You made it!");

        $(".horsegod").hide("horsegod hidden!");
        $("#filterHorseGod").css("text-decoration","line-through");

        clickedHorseGod = true;

      } else{
        console.log("horsegod are back.");

        $("#filterHorseGod").css("text-decoration","none");
        $(".horsegod").show("horsegod shown");

        clickedHorseGod = false;
      }
    });


/*ALLEGIANCE*/
/*STARK*/
    var clickedStark = false;
    $("#filterStark").click(function() {
      console.log("You clicked on stark.");

      if (clickedStark == false) {
        console.log("You made it!");

        $(".stark").hide("stark hidden!");
        $("#filterStark").css("text-decoration","line-through");

        clickedStark = true;

      } else{
        console.log("stark are back.");

        $("#filterStark").css("text-decoration","none");
        $(".stark").show("stark shown");

        clickedStark = false;
      }
    });

/*ARRYN*/
    var clickedArryn = false;
    $("#filterArryn").click(function() {
      console.log("You clicked on arryn.");

      if (clickedArryn == false) {
        console.log("You made it!");

        $(".arryn").hide("arryn hidden!");
        $("#filterArryn").css("text-decoration","line-through");

        clickedArryn = true;

      } else{
        console.log("arryn are back.");

        $("#filterArryn").css("text-decoration","none");
        $(".arryn").show("arryn shown");

        clickedArryn = false;
      }
    });

/*GREYJOY*/
    var clickedGreyjoy = false;
    $("#filterGreyjoy").click(function() {
      console.log("You clicked on greyjoy.");

      if (clickedGreyjoy == false) {
        console.log("You made it!");

        $(".greyjoy").hide("greyjoy hidden!");
        $("#filterGreyjoy").css("text-decoration","line-through");

        clickedGreyjoy = true;

      } else{
        console.log("greyjoy are back.");

        $("#filterGreyjoy").css("text-decoration","none");
        $(".greyjoy").show("greyjoy shown");

        clickedGreyjoy = false;
      }
    });

/*LANNISTER*/
    var clickedLannister = false;
    $("#filterLannister").click(function() {
      console.log("You clicked on lannister.");

      if (clickedLannister == false) {
        console.log("You made it!");

        $(".lannister").hide("lannister hidden!");
        $("#filterLannister").css("text-decoration","line-through");

        clickedLannister = true;

      } else{
        console.log("lannister are back.");

        $("#filterLannister").css("text-decoration","none");
        $(".lannister").show("lannister shown");

        clickedLannister = false;
      }
    });

/*BARATHEON*/
    var clickedBaratheon = false;
    $("#filterBaratheon").click(function() {
      console.log("You clicked on baratheon.");

      if (clickedBaratheon == false) {
        console.log("You made it!");

        $(".baratheon").hide("baratheon hidden!");
        $("#filterBaratheon").css("text-decoration","line-through");

        clickedBaratheon = true;

      } else{
        console.log("baratheon are back.");

        $("#filterBaratheon").css("text-decoration","none");
        $(".baratheon").show("baratheon shown");

        clickedBaratheon = false;
      }
    });

/*TARGARYEN*/
    var clickedTargaryen = false;
    $("#filterTargaryen").click(function() {
      console.log("You clicked on targaryen.");

      if (clickedTargaryen == false) {
        console.log("You made it!");

        $(".targaryen").hide("targaryen hidden!");
        $("#filterTargaryen").css("text-decoration","line-through");

        clickedTargaryen = true;

      } else{
        console.log("targaryen are back.");

        $("#filterTargaryen").css("text-decoration","none");
        $(".targaryen").show("targaryen shown");

        clickedTargaryen = false;
      }
    });

/*NIGHT'S WATCH*/
    var clickedNightsWatch = false;
    $("#filterNightsWatch").click(function() {
      console.log("You clicked on nightswatch.");

      if (clickedNightsWatch == false) {
        console.log("You made it!");

        $(".nightswatch").hide("nightswatch hidden!");
        $("#filterNightsWatch").css("text-decoration","line-through");

        clickedNightsWatch = true;

      } else{
        console.log("nightswatch are back.");

        $("#filterNightsWatch").css("text-decoration","none");
        $(".nightswatch").show("nightswatch shown");

        clickedNightsWatch = false;
      }
    });

/*THE REALM*/
    var clickedRealm = false;
    $("#filterRealm").click(function() {
      console.log("You clicked on realm.");

      if (clickedRealm == false) {
        console.log("You made it!");

        $(".realm").hide("realm hidden!");
        $("#filterRealm").css("text-decoration","line-through");

        clickedRealm = true;

      } else{
        console.log("realm are back.");

        $("#filterRealm").css("text-decoration","none");
        $(".realm").show("realm shown");

        clickedRealm = false;
      }
    });


/*ROLE:*/
/*LORDS*/
    var clickedLords = false;
    $("#filterLords").click(function() {
      console.log("You clicked on LORDS.");

      if (clickedLords == false) {
          console.log("You made it!");

            $(".lords").hide("Lords hidden!");
            $("#filterLords").css("text-decoration","line-through");

            clickedLords = true;

      } else{
          console.log("Lords are back.");

            $("#filterLords").css("text-decoration","none");
            $(".lords").show("Lords shown");

            clickedLords = false;
      }
    });

/*HEIRS*/
    var clickedHeirs = false;
    $("#filterHeirs").click(function() {
      console.log("You clicked on HEIRS.");

      if (clickedHeirs == false) {
        console.log("You made it!");

        $(".heirs").hide("Heirs hidden!");
        $("#filterHeirs").css("text-decoration","line-through");

        clickedHeirs = true;

      } else{
        console.log("Heirs are back.");

          $("#filterHeirs").css("text-decoration","none");
          $(".heirs").show("Heirs shown");

          clickedHeirs = false;
      }
    });

/*KNIGHTS*/
    var clickedKnights = false;
    $("#filterKnights").click(function() {
      console.log("You clicked on KNIGHTS.");

      if (clickedKnights == false) {
        console.log("You made it!");

        $(".knights").hide("Knights hidden!");
        $("#filterKnights").css("text-decoration","line-through");

        clickedKnights = true;

      } else{
        console.log("Knights are back.");

          $("#filterKnights").css("text-decoration","none");
          $(".knights").show("Knights shown");

          clickedKnights = false;
      }
    });

/*ADVISORS*/
    var clickedAdvisors = false;
    $("#filterAdvisors").click(function() {
      console.log("You clicked on ADVISORS.");

      if (clickedAdvisors == false) {
        console.log("You made it!");

        $(".advisors").hide("Advisors hidden!");
        $("#filterAdvisors").css("text-decoration","line-through");

        clickedAdvisors = true;

      } else{
        console.log("Knights are back.");

          $("#filterAdvisors").css("text-decoration","none");
          $(".advisors").show("Advisors shown");

          clickedAdvisors = false;
      }
    });

/*CROWS*/
    var clickedCrows = false;
    $("#filterCrows").click(function() {
      console.log("You clicked on KNIGHTS.");

      if (clickedCrows == false) {
        console.log("You made it!");

        $(".crows").hide("Crows hidden!");
        $("#filterCrows").css("text-decoration","line-through");

        clickedCrows = true;

      } else{
        console.log("Crows are back.");

          $("#filterCrows").css("text-decoration","none");
          $(".crows").show("Crows shown");

          clickedCrows = false;
      }
    });

/*COMMONERS*/
    var clickedCommoners = false;
    $("#filterCommoners").click(function() {
      console.log("You clicked on COMMONERS.");

      if (clickedCommoners == false) {
        console.log("You made it!");

        $(".commoners").hide("Commoners hidden!");
        $("#filterCommoners").css("text-decoration","line-through");

        clickedCommoners = true;

      } else{
        console.log("Commoners are back.");

        $("#filterCommoners").css("text-decoration","none");
        $(".commoners").show("Commoners shown");

        clickedCommoners = false;
      }
    });

/*WILDLINGS*/
    var clickedWildlings = false;
    $("#filterWildlings").click(function() {
      console.log("You clicked on wildlings.");

      if (clickedWildlings == false) {
        console.log("You made it!");

        $(".wildlings").hide("wildlings hidden!");
        $("#filterWildlings").css("text-decoration","line-through");

        clickedWildlings = true;

      } else{
        console.log("wildlings are back.");

          $("#filterWildlings").css("text-decoration","none");
          $(".wildlings").show("wildlings shown");

          clickedWildlings = false;
      }
    });

/*ANIMALS*/
    var clickedAnimals = false;
    $("#filterAnimals").click(function() {
      console.log("You clicked on animals.");

      if (clickedAnimals == false) {
        console.log("You made it!");

        $(".animals").hide("animals hidden!");
        $("#filterAnimals").css("text-decoration","line-through");

        clickedAnimals = true;

      } else{
        console.log("animals are back.");

          $("#filterAnimals").css("text-decoration","none");
          $(".animals").show("animals shown");

          clickedAnimals = false;
      }
    });

/*THE OTHERS*/
    var clickedOthers = false;
    $("#filterOthers").click(function() {
      console.log("You clicked on others.");

      if (clickedOthers == false) {
        console.log("You made it!");

        $(".others").hide("others hidden!");
        $("#filterOthers").css("text-decoration","line-through");

        clickedOthers = true;

      } else{
        console.log("others are back.");

          $("#filterOthers").css("text-decoration","none");
          $(".others").show("others shown");

          clickedOthers = false;
      }
    });



/*MARKER VIEW TOGGLE*/
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
    $("#textlhazareen.locationtext").mouseenter(function(){
      console.log("Lhazareen is known.");
      $("#textlhazareen").show();
    });

    $("#textlhazareen.locationtext").mouseleave(function(){
      console.log("Lhazareen is unknown.");
      $("#textlhazareen").hide();
    });
    $("#markerlhazareen.locationmarker").mouseleave(function(){
      console.log("Marker was ditched.");
      $("#textlhazareen").hide();
    });

});
