function myFunction(this) {
  var x = button.id;

  var btn = document.getElementById(hover(x));
  var y = "";

  if (btn == "one") {
    y = "first";
  } else if (btn == "two") {
    y = "second";
  } else if (btn == "three") {
    y = "third";
  } else {
    console.log("Unknown");
  }
  var modal = document.getElementById(x);

  btn.onclick = function () {
    modal.style.display = "block";
  };
}

// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function () {
//   modal.style.display = "block";
// };
// span.onclick = function () {
//   modal.style.display = "none";
// };
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
