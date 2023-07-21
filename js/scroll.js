window.onload = () => {
  const scrollBtn = document.querySelector(".is-show");

  window.onscroll = () => {
    if (window.scrollY > 700) {
      scrollBtn.classList.remove("is-show_hide");
    } else if (window.scrollY < 700) {
      scrollBtn.classList.add("is-show_hide");
    }
  };

  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };
};
