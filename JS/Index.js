var picker = document.getElementById("color");
var sec = document.querySelector(".GetStart");

picker.addEventListener(`input`, (e) => {
  var color = e.target.value;
  localStorage.setItem("color",color);
  sec.style.backgroundColor = localStorage.getItem("color");
  console.log(localStorage.getItem("color"));
//   picker.onload(()=>{
// e.style.backgroundColor=localStorage.getItem("color");
//   })
});
document.addEventListener("DOMContentLoaded" , ()=>{
sec.style.backgroundColor=localStorage.getItem("color") ;

})