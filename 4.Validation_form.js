function Validate(event) {
    event.preventDefault();
    console.log("Entered");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if (name.value.length >= 3 && password.value.length >= 8) {
      alert("Form Validation Successful");
    } else {
      alert("Form validation not successful");
    }
  }