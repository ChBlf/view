import '../index.css';

let rr = Math.round(Math.random()*256)
let rg = Math.round(Math.random()*256)
let rb = Math.round(Math.random()*256)

function RGBToHex(r, g, b) {
    r = parseInt(r).toString(16);
    g = parseInt(g).toString(16);
    b = parseInt(b).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return r + g + b;
}


let RandomColor = RGBToHex(rr, rg, rb)

export default RandomColor