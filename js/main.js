$(function () {
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  $(".menu__list-link").on("click", function () {
    $(".menu__list").removeClass("menu__list--active");
  });

  var mixer = mixitup(".gallery__content");
});
