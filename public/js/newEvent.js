const dateField = document.getElementById("new-date");
const locationField = document.getElementById("location-zip");
const submitBtn = document.getElementById("enroll");
const petId = document.getElementById("enroll").dataset.petid

let alert;

const createNewDate = (event) => {
  event.preventDefault();
  const payload = {
    location: locationField.value,
    pet_id: petId,
    date: dateField.value,
  }
  fetch("/api/playdates/new-playdate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((res) => {
    if (!res.ok) {
      //this should create alert on page if form didn't submit
      alert = "<span>Something went wrong. Could not submit form</span>";
      M.toast({ html: alert, classes: 'toast'});
      dateField.value = "";
      locationField.value = "";
    } else {
      //this should create alert on page if form submitted successfully
      alert = "<span>New playdate created!</span>";
      M.toast({ html: alert, classes: 'toast'});
      dateField.value = "";
      locationField.value = "";
    }
  });
};

submitBtn.addEventListener("click", createNewDate);