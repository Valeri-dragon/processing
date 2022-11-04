document.addEventListener("DOMContentLoaded", () => {
  const btnMobMenu = document.querySelector(".btn__mob-menu");
  const btnMenuM = document.querySelector(".btn__m-menu");
  const menuList = document.querySelector(".links");
  const cover = document.querySelector(".menuCover");
  const toggleIcon = () => {
    if (btnMenuM.classList.contains("btn__m-menu")) {
      btnMenuM.classList.remove("btn__m-menu");
      btnMenuM.classList.add("btn__m-menu-active");
      menuList.classList.add("is-open__mob-menu");
      cover.classList.add("cover");
    } else {
      menuList.classList.remove("is-open__mob-menu");
      btnMenuM.classList.remove("btn__m-menu-active");
      cover.classList.remove("cover");
      btnMenuM.classList.add("btn__m-menu");
    }
  };
  btnMobMenu.addEventListener("click", toggleIcon);
  cover.addEventListener("click", (event) => {
    if (event.target == btnMenuM || event.target == cover) {
      toggleIcon();
    }
  });
});
