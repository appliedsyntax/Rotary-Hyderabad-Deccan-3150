document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".main-header");

  // Fix mobile header position
  if (window.innerWidth <= 767) {
    let lastScrollTop = 0;
    const fixHeader = () => {
      header.style.position = 'fixed';
      header.style.top = '0';
    };

    window.addEventListener('scroll', fixHeader, { passive: true });
    window.addEventListener('resize', fixHeader, { passive: true });
    fixHeader();
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
