document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".main-header");
  if (header) {
    const toggleHeaderBackground = () => {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    toggleHeaderBackground();
    window.addEventListener("scroll", toggleHeaderBackground, { passive: true });
  }

  if (window.Swiper) {
    new Swiper(".projects-swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: false,
      centeredSlides: false,
      navigation: {
        nextEl: ".projects-button-next",
        prevEl: ".projects-button-prev",
      },
      pagination: {
        el: ".projects-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          spaceBetween: 24,
        },
        1200: {
          spaceBetween: 32,
        },
      },
    });
  }
});
