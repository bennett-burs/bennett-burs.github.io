// function clickedBtn() {
//   alert(event.target.id);
// }
// var modal = document.getElementById("myModal");
// var btn = document.getElementById(clickedBtn());
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

$(document).ready(function () {
    $('#dtDynamicVerticalScrollExample').DataTable({
      "scrollY": "50vh",
      "scrollCollapse": true,
    });
    $('.dataTables_length').addClass('bs-select');
  });