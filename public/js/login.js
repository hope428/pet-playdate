// need to remember to create these IDs in the template
const loginBtn = document.getElementById("#login-btn");
const username = document.getElementById("#username");
const password = document.getElementById("#password");

login = () => {
  event.preventDefault();

  username.value = "";
  password.value = "";

  const loginUser = username.value;
  const loginPassword = password.value;

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
      alert("Login failed. Please try again");
      // Maybe a modal here?
    }
  });
};

loginBtn.addEventListener("click",login);
