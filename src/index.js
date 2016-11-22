
  
var mjAPI = require("mathjax-node/lib/mj-single.js")
var fs = require("fs")
mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  }
});
mjAPI.start();

document.getElementById("Update").onclick = function () {UpdateMath()}

function UpdateMath () {
  const math = document.getElementById("math-input")
  mjAPI.typeset({
  math: math,
  format: "TeX", // "inline-TeX", "MathML"
  mml:true, //  svg:true,
  }, function (data) {
    if (!data.errors) {console.log(data.mml)}
  });

}