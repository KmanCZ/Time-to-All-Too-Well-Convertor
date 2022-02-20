//time convertor elements
const hoursInput = document.querySelector("#hours");
const minutesInput = document.querySelector("#minutes");
const secondsInput = document.querySelector("#seconds");
const timeForm = document.querySelector("#timeForm");
const timeResult = document.querySelector("#timeResult");

//date convertor elements
const dateForm = document.querySelector("#dateForm");
const datePicker1 = document.querySelector("#date1");
const datePicker2 = document.querySelector("#date2");
const dateResult = document.querySelector("#dateResult");

//time convertor code
timeForm.onsubmit = submitTimeForm;

function submitTimeForm(e) {
  e.preventDefault();

  const hours = parseInt(hoursInput.value);
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);

  //converts time to minutes
  const resultTime = hours * 60 + minutes + seconds / 60;
  //converts minutes to atws and rounds it to 2 decimals
  const atws = Math.round((resultTime / 10.22 + Number.EPSILON) * 100) / 100;

  timeResult.textContent = atws;
}

/* (function setMinDatetime() {
  const now = new Date();
  const currentDateString = now.toISOString().slice(0, -5);
  datePicker1.setAttribute("min", currentDateString);
  datePicker2.setAttribute("min", currentDateString);
})(); */

//date convertor code
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
