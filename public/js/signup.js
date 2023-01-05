const signupBtn = document.getElementById("signup-btn");
const newUsername = document.getElementById("new-username");
const newPassword = document.getElementById("new-password");
const petName = document.getElementById("pet_name");
const petAge = document.getElementById("pet_age");
const species = document.getElementById("species");
const activityLevel = document.getElementById("activity_level");
let signupAlert;
let petUrl;

var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "dyrbwr67u",
    uploadPreset: "pet_playdate",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      petUrl = result.info.url
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);

const signup = (event) => {
  event.preventDefault();
  //gets values from form
  const loginUserVal = newUsername.value;
  const loginPasswordVal = newPassword.value;
  const petNameVal = petName.value;
  const petAgeVal = petAge.value;
  const speciesVal = species.value;
  const genderVal = document.querySelector('input[name="gender"]:checked').value
  const activityLevelVal = activityLevel.value;
  const fixedVal = document.querySelector('input[name="fixed"]:checked').value;
  const petImage = petUrl

  fetch("/api/users/signup", {
    method: "POST",
    body: JSON.stringify({
      email: loginUserVal,
      password: loginPasswordVal,
      pet_name: petNameVal,
      pet_age: petAgeVal,
      species: speciesVal,
      gender: genderVal,
      activity_level: activityLevelVal,
      fixed: fixedVal,
      pet_img: petImage
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    if (res.ok) {
      window.location.assign("/dashboard")
    } else {
      const data = await res.json()
      console.log(data);
      if(data.errors[0].message === "Validation len on password failed"){
        signupAlert = "Your password must be at least 6 characters!"
        M.toast({ html: signupAlert, classes: 'toast'});
      } else if (data.errors[0].message === "email must be unique") {
        signupAlert = "Email already registered!"
        M.toast({ html: signupAlert, classes: 'toast'});
      }
    }
  });
};
signupBtn.addEventListener("click", signup);
