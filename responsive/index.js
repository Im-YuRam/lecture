(() => {
  let hamburger;
  let navModal;

  const cacheElements = () => {
    hamburger = document.getElementById("hamburger");
    navModal = document.getElementById("navModal");
  };

  const toggleHamburgerMenu = () => {
    if (hamburger.classList.contains("hamburger--active")) {
      hamburger.classList.remove("hamburger--active");
      navModal.classList.remove("nav-modal--active");
    } else {
      hamburger.classList.add("hamburger--active");
      navModal.classList.add("nav-modal--active");
    }
  };

  const attachClickHandlers = () => {
    hamburger.addEventListener("click", toggleHamburgerMenu);
    navModal.addEventListener("click", toggleHamburgerMenu);
  };

  const init = () => {
    cacheElements();
    attachClickHandlers();
  };

  init();
})();
