document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu__item");
  const hamburgar = document.querySelector(".button__hamburger");
  const closeIcon = document.querySelector(".menu__closeIcon");
  const menuIcon = document.querySelector(".menu__menuIcon");

  const toggleMenu = () => {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  };

  hamburgar.addEventListener("click", toggleMenu);

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  });
});
