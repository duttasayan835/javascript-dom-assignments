const text = document.getElementById("text");
const btn = document.getElementById("btn");
function toggle() {
  const color = document.body.style.backgroundColor;
  if (color === "black") {
    document.body.style.backgroundColor = "white";
    text.innerText = "This is Light mode";
    text.style.color = "#202020";
    btn.innerText = "Go to Dark mode";
    btn.style.color = "#202020";
  } else {
    document.body.style.backgroundColor = "black";
    text.innerText = "This is Dark mode";
    text.style.color = "#ffffff";
    btn.innerText = "Go to Light mode";
    btn.style.color = "#202020";
  }
}
