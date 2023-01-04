const loginSubmit = document.getElementById("submit");
const email = document.getElementById("username");
const password = document.getElementById("password");

let alert;

login = (event) => {
  event.preventDefault();
  console.log('clicked')
// gets values from user submission
  const loginUser = email.value;
  const loginPassword = password.value;

  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: loginUser,
      password: loginPassword,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      window.location.href = "/dashboard";
    } else {
      alert = "<span>Something went wrong. Please try again.</span>";
      M.toast({ html: alert, classes: 'toast'});
      username.value = "";
      password.value = "";
  }});
  };

loginSubmit.addEventListener("click",login);