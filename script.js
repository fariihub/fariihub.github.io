// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("confirmation").innerText = "Thank you! We'll get back to you shortly.";
  this.reset();
});

// Appointment popup
const popup = document.getElementById("appointmentPopup");
const btn = document.getElementById("appointmentBtn");
const span = document.querySelector(".close");

btn.onclick = () => popup.style.display = "flex";
span.onclick = () => popup.style.display = "none";
window.onclick = (e) => {
  if (e.target == popup) popup.style.display = "none";
};

// Appointment form
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("appointmentConfirm").innerText = "Appointment booked successfully!";
  this.reset();
});

