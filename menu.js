 document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerIcon = document.querySelector("#burger-icon");
  const navLinks = document.querySelector(".nav1");

  let isMenuOpen = false; // Track the state of the menu

  burgerMenu.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      // Open the menu and slide it down
      navLinks.classList.add("active");
      navLinks.classList.remove("closing"); // Ensure closing animation is removed
      burgerIcon.src = "graphics/close.svg"; // Change to close icon
    } else {
      // Close the menu and slide it up
      navLinks.classList.add("closing");
      navLinks.classList.remove("active"); // Ensure active class is removed
      burgerIcon.src = "graphics/menu.svg"; // Change back to burger icon
    }
  });
});