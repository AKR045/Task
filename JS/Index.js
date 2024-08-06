var picker = document.getElementById("color");
var sec = document.querySelector(".GetStart");

picker.addEventListener(`input`, (e) => {
  var color = e.target.value;
  sec.style.backgroundColor = color;
});
