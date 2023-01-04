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
// Login button on homepage
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });