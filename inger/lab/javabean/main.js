console.log("Hello world.")


//NUMBERS AND STRINGS

var myStudentDebt = 800;
myStudentDebt = myStudentDebt - 100;

var myLuckyNumbers = [ 4, 7, 8, 16];
// console.log(myLuckyNumbers);
// console.log(myLuckyNumbers[0]);

myLuckyNumbers[2] = 36;
// console.log(myLuckyNumbers[2]);


//FUNCTIONS

function addFive(x) {
  return x + 5;
}

addFive(10);
console.log(addFive(10));

function add(x, y) {
  console.log(x + y);
}

add(8, 9);

var myAge = 20;

if (myAge < 21) {
  console.log("You can party regardless.");
} else {
  console.log("You can party.");
}


//LOOPS

var hamburgers = 0;

for (var i = 0; i < 10; i = i + 1) {
  hamburgers++;
  console.log(hamburgers);
}


//CONDITIONAL AND LOOPS

/*
console.log("Mr Owl, how many licks does it take to get to the Tootsie Roll center of a Tootsie Pop?");

console.log("Let's find out . . .");

for (var licks = 1; licks <= 4; licks++) {
  if (licks < 4) {
    console.log("ah " + licks);
  } else {
    console.log("CRUNCH!")
  }
}

function askMrOwl(numOfLicks) {
  for (var licks = 1; licks <= numOfLicks; licks++) {
    if (licks < numOfLicks) {
      console.log("ah " + licks);
    } else {
      console.log("CRUNCH!")
    }
  }
}

askMrOwl(18);
*/

function checkerBoarder(width, height) {

  var checkerBoard = "";

  for (j = 0; j < height; j++){
    if (j % 2) {
      for (i = 0; i < width; i++) {
        if (i % 2) {
          checkerBoard = checkerBoard + "#";
        } else {
          checkerBoard = checkerBoard + " ";
        }
      }
      checkerBoard = checkerBoard + "\n";
    }
    else {
      for (i = 0; i < width; i++) {
        if (i % 2) {
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
