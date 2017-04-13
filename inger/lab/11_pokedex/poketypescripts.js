var container = document.getElementById("container");

  var letters = {
      KeyA: {
        lowerUrl: "pokedex/a.png",
        upperUrl: "pokedex/aa.png",
      },
      KeyB: {
        lowerUrl: "pokedex/b.png",
        upperUrl: "pokedex/bb.png",
      },
      KeyC: {
        lowerUrl: "pokedex/c.png",
        upperUrl: "pokedex/cc.png",
      },
      KeyD: {
        lowerUrl: "pokedex/d.png",
        upperUrl: "pokedex/dd.png",
      },
      KeyE: {
        lowerUrl: "pokedex/e.png",
        upperUrl: "pokedex/ee.png",
      },
      KeyF: {
        lowerUrl: "pokedex/f.png",
        upperUrl: "pokedex/ff.png",
      },
      KeyG: {
        lowerUrl: "pokedex/g.png",
        upperUrl: "pokedex/gg.png",
      },
      KeyH: {
        lowerUrl: "pokedex/h.png",
        upperUrl: "pokedex/hh.png",
      },
      KeyI: {
        lowerUrl: "pokedex/i.png",
        upperUrl: "pokedex/ii.png",
      },
      KeyJ: {
        lowerUrl: "pokedex/j.png",
        upperUrl: "pokedex/jj.png",
      },
      KeyK: {
        lowerUrl: "pokedex/k.png",
        upperUrl: "pokedex/kk.png",
      },
      KeyL: {
        lowerUrl: "pokedex/l.png",
        upperUrl: "pokedex/ll.png",
      },
      KeyM: {
        lowerUrl: "pokedex/m.png",
        upperUrl: "pokedex/mm.png",
      },
      KeyN: {
        lowerUrl: "pokedex/n.png",
        upperUrl: "pokedex/nn.png",
      },
      KeyO: {
        lowerUrl: "pokedex/o.png",
        upperUrl: "pokedex/oo.png",
      },
      KeyP: {
        lowerUrl: "pokedex/p.png",
        upperUrl: "pokedex/pp.png",
      },
      KeyQ: {
        lowerUrl: "pokedex/q.png",
        upperUrl: "pokedex/qq.png",
      },
      KeyR: {
        lowerUrl: "pokedex/r.png",
        upperUrl: "pokedex/rr.png",
      },
      KeyS: {
        lowerUrl: "pokedex/s.png",
        upperUrl: "pokedex/ss.png",
      },
      KeyT: {
        lowerUrl: "pokedex/t.png",
        upperUrl: "pokedex/tt.png",
      },
      KeyU: {
        lowerUrl: "pokedex/u.png",
        upperUrl: "pokedex/uu.png",
      },
      KeyV: {
        lowerUrl: "pokedex/v.png",
        upperUrl: "pokedex/vv.png",
      },
      KeyW: {
        lowerUrl: "pokedex/w.png",
        upperUrl: "pokedex/ww.png",
      },
      KeyX: {
        lowerUrl: "pokedex/x.png",
        upperUrl: "pokedex/xx.png",
      },
      KeyY: {
        lowerUrl: "pokedex/y.png",
        upperUrl: "pokedex/yy.png",
      },
      KeyZ: {
        lowerUrl: "pokedex/z.png",
        upperUrl: "pokedex/zz.png",
      },
    };



document.addEventListener("keydown", function(event) {

  if(event.keyCode >= 65 && event.keyCode <= 90) {

    var img = document.createElement('img');
    img.classList.add('letter');

    if (event.shiftKey == true) {
      console.log(letters[event.code].upperUrl);
      img.src = letters[event.code].upperUrl;

    } else {
      console.log(letters[event.code].lowerUrl);
      img.src = letters[event.code].lowerUrl;
     }

 container.appendChild(img);

 } else if (event.keyCode == 32) {

     var div = document.createElement('div');
     div.classList.add('space');
     container.appendChild(div);

  } else if (event.keyCode == 8) {
     container.removeChild(container.lastChild);
   }

});
