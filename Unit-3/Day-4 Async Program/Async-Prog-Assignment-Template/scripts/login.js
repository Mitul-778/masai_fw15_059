document.querySelector("form").addEventListener("submit", signIn);
var regdUser = JSON.parse(localStorage.getItem("user_Data")) || [];

function signIn(event) {
  event.preventDefault();

  var eM = document.querySelector("#mai").value;
  var passw = document.querySelector("#pass").value;

  for (let i = 0; i < regdUser.length; i++) {
    if (regdUser[i].usMail == eM && regdUser[i].usPass == passw) {
      alert("Login Successful !");
      window.location.href = "index.html";
    } else {
      alert("invalid Credentials !");
      break;
    }
  }
}
