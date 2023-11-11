
var is_show=false;
var btn= document.querySelector("nav");

function showSide() {
  btn.classList.toggle("not-show");
  document.querySelector(".btn-show").classList.toggle("showed");
}