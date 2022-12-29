const dateField = document.getElementById("new-date");
// zip code drop down selector
// button selector 

const createNewDate = () => {
  event.preventDefault();
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
    //   location: zip code goes here,
    // pet_id: current pet id will go here,
      date: dateField.value,
    },
  }).then((res) => {
    if(!res.ok){
        //maybe create alert on page here?
        dateField.value = ""
        //clear zipcode selector as well
        console.log("Something went wrong. Could not submit form");
    } else {
        console.log("New playdate created!");
    }
  });
};

//button add event listener, calls createNewDate
