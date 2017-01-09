function randomNumber() {
  var list = []
  var quantity = document.getElementById ("input_quantity").value;
  var rangeA = +document.getElementById("input_rangeA").value;
  var rangeB = +document.getElementById("input_rangeB").value;
  if (rangeA > rangeB){
    alert("Minimum range bigger than maximum range. Please invert them.");
  }
  else {
    while (list.length < quantity){
  var x = Math.floor (Math.random() * (rangeB-rangeA+1) + rangeA);
  list [list.length] = x;
  document.getElementById("result").innerHTML = "<span>" + list.join(" ") + "</span>";
    }
    }
}
function erase(){
  document.getElementById('result').innerHTML = "";
}
