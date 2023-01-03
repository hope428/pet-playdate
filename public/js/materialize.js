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
