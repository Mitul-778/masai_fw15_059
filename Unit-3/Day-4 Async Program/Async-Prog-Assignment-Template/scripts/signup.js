document.querySelector("form").addEventListener("submit", userDetail);
var detail = JSON.parse(localStorage.getItem("user_Data")) || [];

function userDetail(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var number = document.querySelector("#num").value;
  var email = document.querySelector("#mail").value;
  var password = document.querySelector("#password").value;

  function userData(name, number, email, password){
    (this.usName = name),
    (this.usNum = number),
    (this.usMail = email),
    (this.usPass = password)
  };

  let x = new userData(name, number, email, password);
  console.log(x)
  detail.push(x);
  localStorage.setItem("user_Data", JSON.stringify(detail));

  if (name == "" || number == "" || email == "" || password == "") {
    alert("Enter all Details !");
  } else {
    alert("SignUp Success !");
    window.location.href = "login.html";
  }
}
