// слайдер на главной странице - блок преимущества
var slideIndex = 1;
showSlides(slideIndex);
// показывает следующй слайд
function plusSlide() {
    showSlides(slideIndex += 1);
}
// показывает предыдущий слайд
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
// Устанавливает текущий слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
}
// слайдер
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-item");
    var dots = document.getElementsByClassName("current");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("current", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "current";
}

// Слайдер сервис

const services = document.querySelector(".services");
const servicesControlList = services.querySelector(".services-control-list");
const servicesSlideList = services.querySelector(".services-slide-list");

const buttonDilivery = servicesControlList.querySelector("[href='#delivery']");
const buttonGarant = servicesControlList.querySelector("[href='#guaranty']");
const buttonCredit = servicesControlList.querySelector("[href='#credit']");

const slideDilivery = servicesSlideList.querySelector("#delivery");
const slideGarant = servicesSlideList.querySelector("#guaranty");
const slideCredit = servicesSlideList.querySelector("#credit");

buttonDilivery.addEventListener ("click", function (evt) {
  evt.preventDefault();

  if (buttonDilivery.classList.contains("select") === false) {
    buttonDilivery.classList.add("select");
  };

  if (slideDilivery.classList.contains("select") === false) {
    slideDilivery.classList.add("select");
  };

  if (buttonGarant.classList.contains("select") === true) {
    buttonGarant.classList.remove("select");
  };

  if (slideGarant.classList.contains("select") === true) {
    slideGarant.classList.remove("select");
  };
  
  if (buttonCredit.classList.contains("select") === true) {
    buttonCredit.classList.remove("select");
  };

  if (slideCredit.classList.contains("select") === true) {
    slideCredit.classList.remove("select");
  };
});

buttonGarant.addEventListener ("click", function (evt) {
    evt.preventDefault();

    if (buttonGarant.classList.contains("select") === false) {
      buttonGarant.classList.add("select");
    };

    if (slideGarant.classList.contains("select") === false) {
      slideGarant.classList.add("select");
    };
    
    if (buttonDilivery.classList.contains("select") === true) {
      buttonDilivery.classList.remove("select");
    };

    if (slideDilivery.classList.contains("select") === true) {
      slideDilivery.classList.remove("select");
    };
    
    if (buttonCredit.classList.contains("select") === true) {
      buttonCredit.classList.remove("select");
    };

    if (slideCredit.classList.contains("select") === true) {
      slideCredit.classList.remove("select");
    };
});

buttonCredit.addEventListener ("click", function (evt) {
  evt.preventDefault();

  if (buttonCredit.classList.contains("select") === false) {
    buttonCredit.classList.add("select");
  };

  if (slideCredit.classList.contains("select") === false) {
    slideCredit.classList.add("select");
  };

  if (buttonDilivery.classList.contains("select") === true) {
    buttonDilivery.classList.remove("select");
  };

  if (slideDilivery.classList.contains("select") === true) {
    slideDilivery.classList.remove("select");
  };
  
  if (buttonGarant.classList.contains("select") === true) {
    buttonGarant.classList.remove("select");
  };

  if (slideGarant.classList.contains("select") === true) {
    slideGarant.classList.remove("select");
  };
});



// добавить событие открытия кнопки
// Модальное окно карта
if (document.querySelector(".button-map")) {
  var mapLink = document.querySelector(".button-map");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
      mapPopup.classList.remove("modal-map");
  });

  mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
      mapPopup.classList.add("modal-map");
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
          mapPopup.classList.remove("modal-show");
      }
      }
  });
}
  /* Форма обратной связи */
if (document.querySelector(".contacts-button")) {
  var userLink = document.querySelector(".contacts-button");
  var userPopup = document.querySelector(".modal-user");
  var userClose = userPopup.querySelector(".modal-close-user");

  userLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      userPopup.classList.add("modal-show-user");
      userPopup.classList.remove("modal-user");
  });

  userClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      userPopup.classList.remove("modal-show-user");
      userPopup.classList.add("modal-user");
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
      evt.preventDefault();
      if (userPopup.classList.contains("modal-show-user")) {
          userPopup.classList.remove("modal-show-user");
      }
      }
  });
}

// Всплывающие окно на странице каталога
if (document.querySelector(".buy")) {
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