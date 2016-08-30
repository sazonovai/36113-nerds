var feedbackOpen = document.querySelector(".contacts-btn");

var feedbackPopup = document.querySelector(".popup-wrapper");
var feedbackClose = feedbackPopup.querySelector(".close");

feedbackOpen.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.toggle("show");
});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27 && feedbackPopup.classList.contains("show")) {
    feedbackPopup.classList.remove("show");
  }
});
