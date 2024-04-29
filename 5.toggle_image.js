const heading = document.getElementById("heading");
const btn = document.getElementById("btn");
const image = document.getElementById("image");
heading.innerText = "The image is visible";
function toggle() {
  if (image.style.opacity == 0) {
    image.style.opacity = 100;
    heading.innerText = "The image is visible";
    btn.innerText = "Click to make image invisible";
  } else {
    image.style.opacity = 0;
    heading.innerText = "The image is invisible";
    btn.innerText = "Click to make image visible";
  }
}
