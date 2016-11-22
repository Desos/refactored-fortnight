const katex = require('katex')


document.getElementById("update").onclick = function () {UpdateMath()}

function UpdateMath () {
  var mathin = document.getElementById("math-input").value
  console.log(mathin)
  var math = katex.renderToString(mathin,{ displayMode: true })
  console.log(math)
  document.getElementById("math-output").innerHTML = math
}