const logoutBtn = document.getElementById("logout-btn");
const logoutBtnMobile = document.getElementById("logout-btn-mobile");

const logout = () => {
  fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.ok) {
      document.location.replace("/home");
    } else {
      alert("couldn't log you out");
    }
  });
};
if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
}
if (logoutBtnMobile) {
    logoutBtnMobile.addEventListener("click", logout);
  }
