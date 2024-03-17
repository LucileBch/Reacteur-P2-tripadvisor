// ---------- I----------
document.addEventListener(`DOMContentLoaded`, () => {
  // Variables
  const header = document.querySelector(`header`);
  const heartButtons = document.querySelectorAll(`.circle__heart`);

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
});
