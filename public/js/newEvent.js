const dateField = document.getElementById("new-date");
let alert;
// TODO: zip code drop down selector
// TODO: button selector 

const createNewDate = () => {
  event.preventDefault();
  fetch("/new-playdate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
    // TODO: location: zip code goes here,
    // TODO: pet_id: current pet id will go here,
      date: dateField.value,
    },
  }).then((res) => {
    if(!res.ok){
        //this should create alert on page if form didn't submit
        alert = '<span>Something went wrong. Could not submit form</span><button class="btn-flat toast-action">X</button>'
        M.toast({html: alert});
        dateField.value = ""
        //TODO: clear zipcode selector as well
    } else {
      //this should create alert on page if form submitted successfully
      alert = '<span>New playdate created!</span><button class="btn-flat toast-action">X</button>'
      M.toast({html: alert});
    }
  });
};

//TODO: button add event listener, calls createNewDate
