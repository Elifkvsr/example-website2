const programsBtns = document.querySelectorAll(".programs-btn");

programsBtns.forEach((programsBtn) => {
  programsBtn.addEventListener("click", () => {
    programsBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    programsBtn.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const programTabs = document.querySelectorAll(".programs-tab-item");
  const programContents = document.querySelectorAll(".tab-content");

  function initTabs() {
    programContents.forEach((content, index) => {
      if (index !== 0) {
        content.style.display = "none";
      }
    });

    programTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        programTabs.forEach((btn) => {
          btn.classList.remove("active");
        });

        tab.classList.add("active");

        const tabId = tab.getAttribute("data-tab") + "Content";

        programContents.forEach((content) => {
          content.style.display = "none";
        });

        const activeContent = document.getElementById(tabId);
        if (activeContent) {
          activeContent.style.display = "block";

          if (
            activeContent.querySelector(".swiper") &&
            activeContent.querySelector(".swiper").swiper
          ) {
            activeContent.querySelector(".swiper").swiper.update();
          }
        }
      });
    });
  }

  function initSwipers() {
    new Swiper("#birthPreparationContent .swiper", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: "#birthPreparationContent .programs-btn.next",
        prevEl: "#birthPreparationContent .programs-btn.prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    new Swiper("#babyCareContent .swiper", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: "#babyCareContent .programs-btn.next",
        prevEl: "#babyCareContent .programs-btn.prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    new Swiper("#nutritionContent .swiper", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: "#nutritionContent .programs-btn.next",
        prevEl: "#nutritionContent .programs-btn.prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    new Swiper("#workshopsContent .swiper", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: "#workshopsContent .programs-btn.next",
        prevEl: "#workshopsContent .programs-btn.prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  initTabs();
  initSwipers();
});

const faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach((faqBtn) => {
  faqBtn.addEventListener("click", () => {
    const faqGroup = faqBtn.parentElement;

    const faqContent = faqGroup.querySelector(".faq-content");

    if (faqContent.style.display === "block") {
      faqContent.style.display = "none";
      faqBtn.querySelector("img").style.transform = "rotate(0deg)";
    } else {
      document.querySelectorAll(".faq-content").forEach((content) => {
        content.style.display = "none";
      });
      document.querySelectorAll(".faq-btn img").forEach((img) => {
        img.style.display = "rotate(0deg)";
      });

      faqContent.style.display = "block";
      faqBtn.querySelector("img").style.transform = "rotate(180deg)";
    }
  });
});



