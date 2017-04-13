var container = document.getElementById("container");

var letters = {
    KeyA: {},
    KeyB: {},
    KeyC: {},
    KeyD: {},
    KeyE: {},
    KeyF: {},
    KeyG: {},
    KeyH: {},
    KeyI: {},
    KeyJ: {},
    KeyK: {},
    KeyL: {},
    KeyM: {},
    KeyN: {},
    KeyO: {},
    KeyP: {},
    KeyQ: {},
    KeyR: {},
    KeyS: {},
    KeyT: {},
    KeyU: {},
    KeyV: {},
    KeyW: {},
    KeyX: {},
    KeyY: {},
    KeyZ: {},
};

var backgroundHue = 0;

for (key in letters) {
  backgroundHue += Math.floor( 360 / (Object.keys(letters).length) );
  letters[key].bgColor = "hsl(" + backgroundHue + ", 100%, 50%)";
};

document.addEventListener("keydown", function(event){

  if(event.keyCode >= 65 && event.keyCode <= 90) {

    var div = document.createElement('div');
    div.classList.add('letter');

    if (event.shiftKey == true) {
      div.classList.add('capital');
    };


    div.style.backgroundColor = letters[event.code].bgColor;
    container.appendChild(div);

    //eg: a, b, c
    //console.log("key: " + event.key);

    //eg: KeyA, KeyB, keyC
    //console.log('code: ' + event.code);

    //eg: 65, 66, 67
    //console.log('key code: ' + event.keyCode);

    //console.log("key:" + event.key);
    //console.log("code:" + event.code);
    console.log("color: " + letters[event.code]);

    //change the background color
      //document.documentElement.style.backgroundColor = letters[event.code].bgColor;

    //add a letter to the container
      //container.innerHTML += event.key;

  } else if (event.keyCode == 32) {

    var div = document.createElement('div');
    div.classList.add('space');
    container.appendChild(div);

  } else if (event.keyCode == 8) {

    container.removeChild(container.lastChild);
  }

});
