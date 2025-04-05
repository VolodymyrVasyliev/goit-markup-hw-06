const form = document.querySelector(".review-form");
console.log(form);

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
