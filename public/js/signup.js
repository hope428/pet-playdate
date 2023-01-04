// need to remember to create these IDs in the template
const signupBtn = document.getElementById("#signup-btn");
const username = document.getElementById("#username");
const password = document.getElementById("#password");
const petName = document.getElementById("#pet-name");
const pet_age = document.getElementById("#pet-age");
const species = document.getElementById("#species");
const gender = document.getElementById("#gender");
const activityLevel = document.getElementById("#activity-level");
const fixed = document.getElementById("#fixed");

signup = (event) => {
  event.preventDefault();

  const loginUser = username.value;
  const loginPassword = password.value;
  const name = petName.value;
  const age = pet_age.value;
  const species = species.value;
  const gender = gender.value;
  const activityLevel = activityLevel.value;
  const fixed = fixed.value;
  
  username.value = "";
  password.value = "";
  petName.value = "";
  pet_age.value = "";
  species.value = "";
  gender.value = "";
  activityLevel.value = "";
  fixed.value = "";

  fetch("/signup", {
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
      alert("Failed to sign you up. Please try again");
      // Maybe a modal here?
    }
  });
};
signupBtn.addEventListener("click", signup);
