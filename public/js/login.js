// need to remember to create these IDs in the template
const loginBtn = document.getElementById("#login-btn");
const username = document.getElementById("#username");
const password = document.getElementById("#password");

let alert;

login = (event) => {
  event.preventDefault();

  const loginUser = username.value;
  const loginPassword = password.value;

  username.value = "";
  password.value = "";

  //   Attempting to login
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
      alert = "<span>Something went wrong. Please try again.</span>";
      M.toast({ html: alert });
      username.value = "";
      password.value = "";
  }});
};

loginBtn.addEventListener("click",login);
