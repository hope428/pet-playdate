// Calendar
const Calendar = document.querySelector('.datepicker');
M.Datepicker.init(Calendar,{
    format: 'mm/dd/yy',
    showClearBtn: true,
});
// Dropdown menu on playdate form
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});
// For hamburger menu
$(document).ready(function(){
  $('.sidenav').sidenav();
});
//   Fetch login page upon click  
const loginBtn = document.querySelector("#login-btn");

loginClick = (event) => {
  event.preventDefault();

  fetch("/login") 
    .then((res) => {
    if (res.ok) {
      window.location.href = "/login";
    } else {
        alert = "<span>Something went wrong. Please try again.</span>";
        M.toast({ html: alert });
    }
  });
};
