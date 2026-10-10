// Opens a project screenshot in a larger window when you click it.
const dialog = document.querySelector(".lightbox");
const bigImage = dialog.querySelector("img");
const caption = dialog.querySelector(".lightbox-caption");
const closeButton = dialog.querySelector(".lightbox-close");

document.querySelectorAll(".thumb").forEach(function (button) {
  button.addEventListener("click", function () {
    const small = button.querySelector("img");
    bigImage.src = small.currentSrc || small.src;
    bigImage.alt = small.alt;
    caption.textContent = small.alt;
    dialog.showModal();
  });
});

closeButton.addEventListener("click", function () {
  dialog.close();
});

// clicking the dark area outside the picture also closes it
// (the Esc key closes it automatically)
dialog.addEventListener("click", function (event) {
  if (event.target === dialog) {
    dialog.close();
  }
});