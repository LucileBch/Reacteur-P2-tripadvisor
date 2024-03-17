// ---------- I----------
document.addEventListener(`DOMContentLoaded`, () => {
  console.log(`DOM loaded`);

  // Variables
  const header = document.querySelector(`header`);
  const body = document.querySelector(`body`);
  const heartButtons = document.querySelectorAll(`.circle__heart`);
  const contactButton = document.querySelector(`.btn--contact`);
  const modal = document.querySelector(`.modal`);

  // Header's border bottom display conditions
  window.addEventListener(`scroll`, () => {
    if (window.scrollY) {
      header.classList.add(`header__border`);
    } else {
      header.classList.remove(`header__border`);
    }
  });

  // EventListener on Heart button
  heartButtons.forEach((heartButton) => {
    heartButton.addEventListener(`click`, () => {
      heartButton.classList.toggle(`circle__heart--full`);
    });
  });

  // Display Modal and stop scroll
  contactButton.addEventListener(`click`, () => {
    modal.classList.remove(`modal__hidden`);
    body.classList.add(`scroll--disable`);
  });
});
