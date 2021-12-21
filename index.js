$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerColumn: 8,
  spacebetween: 4,
  slidesPerView: 8,
  freeModel: true,
  loopAdditionalslides: 4,
  speed: 400,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // for responsive Swiper
  on: {
    init: function () {},
    orientationchange: function () {},
    beforeResize: function () {
      let vw = window.innerWidth;
      if (vw > 1000) {
        mySwiper.params.slidesPerView = 6;
        mySwiper.params.slidesPerColumn = 6;
        mySwiper.params.slidesPerGroup = 6;
      } else {
        mySwiper.params.slidesPerView = 3;
        mySwiper.params.slidesPerColumn = 2;
        mySwiper.params.slidesPerGroup = 3;
      }
      mySwiper.init();
    },
  },
});
//Drop Down And Left Slider

$(".btn-menu").click(function () {
  $(this).toggleClass("click");
  $(".sidebar").toggleClass("show");
});
$(".feat-btn").click(function () {
  $("nav ul .feat-show").toggleClass("show");
  $("nav ul .first").toggleClass("rotate");
});
$(".serv-btn").click(function () {
  $("nav ul .serv-show").toggleClass("show1");
  $("nav ul .second").toggleClass("rotate");
});
$(".three-btn").click(function () {
  $("nav ul .three-show").toggleClass("show2");
  $("nav ul .three").toggleClass("rotate");
});
$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// Dark-Mode
function changeMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
