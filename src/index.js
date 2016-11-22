
  document.getElementById("Update").onclick = function () {UpdateMath()}
  function UpdateMath (){
    var math = MathJax.Hub.getAllJax("MathOutput")[0];
    MathJax.Hub.Queue(["Text",math,"MathInput"]);   
  }
