
$(document).ready(function(){

  ("#checkerboard").click(function(){
    console.log("hello");

    function checkerBoarder(width, height) {

      var checkerBoard = "";

      for (j = 0; j < height; j++){
        if (j % 5) {
          for (i = 0; i < width; i++) {
            if (i % 5) {
              checkerBoard = checkerBoard + "#";
            } else {
              checkerBoard = checkerBoard + " ";
            }
          }
          checkerBoard = checkerBoard + "\n";
        }
        else {
          for (i = 0; i < width; i++) {
            if (i % 5) {
              checkerBoard = checkerBoard + " ";
            } else {
              checkerBoard = checkerBoard + "#";
            }
          }
          checkerBoard = checkerBoard + "\n";
        }
      }
      console.log(checkerBoard);
    }
  });

  ("#pyramid").click(function(){

    function pyramider(height) {

      var pyramid = "";

      for (j = 0; j < 6; j++){
        if (j % 6) {
          pyramid = pyramid + "#";
        } else {

        }


        }
      }
      console.log(pyramid);
    });
