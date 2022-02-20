//date convertor elements
const dateForm = document.querySelector("#dateForm");
const datePicker1 = document.querySelector("#date1");
const datePicker2 = document.querySelector("#date2");
const dateResult = document.querySelector("#dateResult");

/* (function setMinDatetime() {
  const now = new Date();
  const currentDateString = now.toISOString().slice(0, -5);
  datePicker1.setAttribute("min", currentDateString);
  datePicker2.setAttribute("min", currentDateString);
})(); */

dateForm.onsubmit = submitDateForm;

function submitDateForm(e) {
  e.preventDefault();

  const date1 = new Date(datePicker1.value);
  const date2 = new Date(datePicker2.value);

  dateResult.textContent = dateToAtws(date1, date2);
}

function dateToAtws(date1, date2) {
  let ms = Math.abs(date2 - date1);
  let atws = ms / 60000 / 10.22;
  atws = Math.round((atws + Number.EPSILON) * 100) / 100;
  return atws;
}
