const alertBtn = document.querySelector("[data-btn]");
const alertCard = document.querySelector("[data-alert]");
const alertClose = document.querySelector("[data-close]");

alertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alertCard.classList.add("animate-showSlide");
});

alertClose.addEventListener("click", (e) => {
  e.preventDefault();
  alertCard.classList.remove("animate-showSlide");
});
