// ---------- I----------
document.addEventListener(`DOMContentLoaded`, () => {
  // Variables
  const header = document.querySelector(`header`);
  const body = document.querySelector(`body`);
  const heartButtons = document.querySelectorAll(`.circle__heart`);
  const contactButton = document.querySelector(`.btn--contact`);
  const closeButton = document.querySelector(`.fa-xmark`);
  const modal = document.querySelector(`.modal`);
  const contactForm = document.querySelector(`.form__elements`);

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

  // Close Modal
  closeButton.addEventListener(`click`, () => {
    modal.classList.add(`modal__hidden`);
    body.classList.remove(`scroll--disable`);
    contactForm.reset();
  });

  // Get form datas
  //    Preventing default behaviour
  //    Variables
  //    Connect to backend and send data
  //    Conditions :
  //      If success closing Modal
  //      If missing parameters => alert msg
  //      If server pb => alert msg & clean form
  contactForm.addEventListener(`submit`, async (event) => {
    event.preventDefault();

    const firstname = document.querySelector(`#firstname`).value;
    const lastname = document.querySelector(`#lastname`).value;
    const email = document.querySelector(`#email`).value;
    const message = document.querySelector(`#message`).value;

    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: message,
    };

    try {
      const response = await axios.post(`http://localhost:3000/form`, data);

      if (response.data.status === 200) {
        alert(`Votre formulaire a bien été envoyé`);
        contactForm.reset();
        modal.classList.add(`modal__hidden`);
        body.classList.remove(`scroll--disable`);
      }
    } catch (error) {
      if (error.response.data.message === `Missing parameters`) {
        alert(`Veuillez remplir tous les champs`);
      } else {
        alert(`Une erreur est survenue`);
        contactForm.reset();
      }
    }
  });
});
