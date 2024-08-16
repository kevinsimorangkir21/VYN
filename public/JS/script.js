const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Inisialisasi nilai default jika tidak ada di localStorage
let secValue = localStorage.getItem("secValue") ? parseInt(localStorage.getItem("secValue")) : 11;
let minValue = localStorage.getItem("minValue") ? parseInt(localStorage.getItem("minValue")) : 2;
let hourValue = localStorage.getItem("hourValue") ? parseInt(localStorage.getItem("hourValue")) : 7;
let dayValue = localStorage.getItem("dayValue") ? parseInt(localStorage.getItem("dayValue")) : 0;

const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 24;
  }

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }

  // Update tampilan waktu
  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;

  // Simpan nilai saat ini ke localStorage
  localStorage.setItem("secValue", secValue);
  localStorage.setItem("minValue", minValue);
  localStorage.setItem("hourValue", hourValue);
  localStorage.setItem("dayValue", dayValue);
}, 1000); // 1000ms = 1s
