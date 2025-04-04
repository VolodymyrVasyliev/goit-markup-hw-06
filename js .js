// mobile window
const mobile = document.querySelector(".mobile-menu-wrapper");
const buttonMobileClose = document.querySelector(".mobile-menu-close-btn");
const buttonMobileOpen = document.querySelector(".mobile-menu-open-btn");

buttonMobileOpen.addEventListener("click", handleOpenMobile);
buttonMobileClose.addEventListener("click", handleCloseMobile);

function handleOpenMobile(event) {
  console.log("puch botton open mobile");
  mobile.classList.toggle("is-open");
}

function handleCloseMobile(event) {
  console.log("puch button close mobile");
  mobile.classList.toggle("is-open");
}

// modal menu
const modal = document.querySelector(".backdrop");
const bottonCloseModal = document.querySelector(".modal-close-button");
const buttonOpenModal = document.querySelector("[data-action='open-modal']");

bottonCloseModal.addEventListener("click", handleClickModaleClose);
buttonOpenModal.addEventListener("click", handleOpenModal);

function handleOpenModal(event) {
  console.log("puch button open modal");
  modal.classList.add("is-open");
}

function handleClickModaleClose(event) {
  console.log("puch button close modal");
  modal.classList.remove("is-open");
}
