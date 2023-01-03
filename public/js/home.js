const loginBtn = document.querySelector("#login-btn");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const dropDown = document.querySelector(".dropdown-trigger")
var instance = M.Dropdown.getInstance(elem);

login = (event) => {
  event.preventDefault();

  const loginUser = username.value;
  const loginPassword = password.value;

  username.value = "";
  password.value = "";

  //   For separate login page
  fetch("/login", {
    method: "POST",
    body: JSON.stringify({
      loginUser,
      loginPassword,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      window.location.href = "/dashboard";
    } else {
        alert = "<span>Something went wrong. Could not submit form</span>";
        M.toast({ html: alert });
    }
  });
};
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });
loginBtn.addEventListener("click",login);
