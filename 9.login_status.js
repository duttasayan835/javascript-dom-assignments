function login() {
  localStorage.setItem("auth", true);
  window.location.reload();
}
function logout() {
  localStorage.setItem("auth", false);
  window.location.reload();
}
const heading = document.getElementById("login-status");
const loginStatus = localStorage.getItem("auth");
if (loginStatus === "true") {
  heading.innerText = "User is logged in";
} else {
  heading.innerText = "User Has not logged in";
}
