
// Всплывающие окно на странице каталога
if (document.querySelectorAll(".buy")) {
  var basketLink = document.querySelector(".buy");
  var basketPopup = document.querySelector(".modal-basket");
  var basketClose = basketPopup.querySelector(".modal-close-basket");

  basketLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      basketPopup.classList.add("modal-show-basket");
      basketPopup.classList.remove("modal-basket");
  });

  basketClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-show-basket");
      basketPopup.classList.add("modal-basket");
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
      evt.preventDefault();
      if (basketPopup.classList.contains("modal-show-basket")) {
        basketPopup.classList.remove("modal-show-basket");
      }
      }
  });
}