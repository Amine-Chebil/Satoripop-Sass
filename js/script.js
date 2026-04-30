/* Expanding flex cards */
$(".business-card").click(function () {
  $(".business-card").removeClass("active");
  $(".business-card .blue-rect").removeClass("active");
  $(this).addClass("active");
  $(this).find(".blue-rect").addClass("active");
});


const slider = tns({
  container: ".my-slider",
  loop: true,
  items: 3,
  slideBy: 1,
  controlsPosition: "bottom",
  navPostion: "bottom",
  nav: false,
  autoplay: true,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: "#customize-controls",
  responsive: {
      320: {
      items: 1
     },

      640: {
          items: 2
      },

      768: {
          items: 3
      },

      1440:{
        items: 5,
        gutter: 20,
    }
  }
});

/* change navbar background color when scroll */
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navEl.classList.add('navbar-scrolled');
  } else {
    navEl.classList.remove('navbar-scrolled');
  }
});





