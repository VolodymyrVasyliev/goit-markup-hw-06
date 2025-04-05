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
