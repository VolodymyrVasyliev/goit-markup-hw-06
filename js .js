// mobile window
const mobile = document.querySelector(".mobile-menu-wrapper");
const buttonMobile = document.querySelector(".mobile-menu-close-btn");

buttonMobile.addEventListener("click", handleClickMobile);

function handleClickMobile(event) {
  console.log("puch button");
  mobile.classList.remove("is-open");
}

// modal menu
const modal = document.querySelector(".backdrop");
const bottonModal = document.querySelector(".modal-close-button");

bottonModal.addEventListener("click", handleClickModale);

function handleClickModale(event) {
  console.log(event);

  modal.classList.remove("is-open");
}

